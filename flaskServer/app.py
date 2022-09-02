from flask import Flask, render_template, request, session
from datetime import timedelta
import os
from base64 import b64encode
# path : /flaskServer/myModule
from myModule.user import userRegister,userLogin,updateModelList
from myModule.model import uploadFile,modelInsert,getEntireItem
from myModule.model import saveMessage,saveRecording,saveImage,modelInfo
from myModule.room import findRoom,roomExist,updateRoom,roomInsert,isRoomEditor

app = Flask(__name__)
app.config['SESSION_USE_SIGNER'] = True
app.config['SECRET_KEY'] = os.urandom(24)
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=1) # session 可以存活的時間
app.config['SESSION_PERMANENT'] = False   # session 期限是否為永久


@app.route("/")
def root():
    return render_template("index.html")
# 測試
@app.route("/menbers")
def menbers():
    return {"menbers":['test1','test2','test3']}
# 註冊
@app.route("/register",methods=["POST"])
def register():
    id = request.form.get('id')
    name = request.form.get('name')
    passwd = request.form.get('passwd')
    email = request.form.get('email')
    result = userRegister(name,id,passwd,email)
    # True: 註冊成功 False: 註冊失敗(有重複帳號)
    return result
# 登入
@app.route("/login",methods=["POST"])
def login():
    id = request.form.get('id')
    passwd = request.form.get('passwd')
    name = userLogin(id, passwd)
    # result: 回傳使用者的資料(name and id)，如果沒有代表沒有找到相符的
    if name :
        # 設置session
        session['id'] = id
        print(session)
        return True
    return False
@app.route("/upload",methods=["POST"])
def upload():
    # FIXME: 需要傳送 userID
    # userID = request.form.get('userID')
    # model files
    objName = request.form.get('objName')
    mtlName = request.form.get('mtlName')
    obj = request.form.get('obj')
    mtl = request.form.get('mtl')
    modelName = objName.split(".obj")[0]
    inputPath = f"./static/models/source/{objName}"
    outputPath = f"./static/models/js/{modelName}.js"
    # images
    thumbnail = request.form.get('thumbnail')
    texture = request.form.get('texture')
    thumbnailName = b64encode(os.urandom(20)).decode('utf-8')
    textureName = b64encode(os.urandom(20)).decode('utf-8')
    thumbnailPath = "./static/models/thumbnails"
    texturePath = "./static/models/textures"
    # modify name of texture in mtl
    mtl = f"{mtl.split('map_Kd')[0]} map_Kd {textureName}.jpg"
    # 上傳檔案到本機
    uploadFile(objName,obj,'file',"./static/models/source")
    uploadFile(mtlName,mtl,'file',"./static/models/source")
    uploadFile(thumbnailName,thumbnail,'image',thumbnailPath)
    uploadFile(textureName,texture,'image',texturePath)
    # 確認有沒有 JS 重複的檔案
    if os.path.exists(outputPath) == True:
        result = "model 已存在"
    # 找不到 input
    elif os.path.exists(inputPath) == False:
        result = "檔案上傳失敗，請檢查您的檔案是否正確"
    # obj to json and insert into DB
    else:
        os.system(f"python ./myModule/convert_obj_three.py -i {inputPath} -o {outputPath}")
        # 將 model 資料 insert into DB
        thumbnailPath = f"{thumbnailPath}/{thumbnailName}.jpg"
        texturePath = f"{texturePath}/{textureName}.jpg"
        # 成功插入資料庫
        modelID = modelInsert(thumbnailPath,texturePath,outputPath)
        if  modelID > 0:
            result = "上傳成功"
        else:
            result = "上傳失敗，請注意檔案名稱不可為中文"
    # FIXME:model 上傳成功，新增使用者的資料庫的 modelList
    # if result == "上傳成功":
    #     updateModelList(modelID,userID)
    # user 上傳的 model 做處理: obj to file and insert into database
    return {'result':result,'name':modelName,'model':outputPath,'type':1,'image':thumbnailPath}
@app.route("/getItem",methods=["POST"])
def getItem():
    items = getEntireItem()
    return {'itemList':items}
# user 所有的房間資料
@app.route("/userAllRoom",methods=["POST"])
def userAllRoom():
    userID = request.form.get('userID')
    result = findRoom(userID)
    return {'result':result}
@app.route("/saveRoom",methods=["POST"])
def saveRoom():
    roomID = request.form.get('roomID')
    name = request.form.get('roomName')
    roomContent = request.form.get('roomContent')
    private_public = request.form.get('private_public')
    userID = request.form.get('userID')
    # 已存在的房間
    if roomExist(roomID) == True:
        updateRoom(roomID,name,roomContent,userID,private_public)
    # 不是房間編輯者
    elif isRoomEditor(roomID,userID) == False:
        result = "您不是房間擁有者"
    elif roomInsert(name,roomContent,userID,private_public) == False:
        result = "您已經有相同房間名字存在，請重新命名"
    else:
        result = "房間存取成功"
    return {'result':result}
@app.route("/getModelInfo",methods=["POST"])
def getModelInfo():
    modelID = request.form.get('modelID')
    userID = request.form.get('userID')
    result = dict()
    result['message'] = modelInfo(modelID,userID,"message")
    result['recording'] = modelInfo(modelID,userID,"recording")
    result['image'] = modelInfo(modelID,userID,"image")
    return result
# message: insert the infomation into table message and update the messageID
@app.route("/messageInfo",methods=["POST"])
def messageInfo():
    modelID = request.form.get('modelID')
    title = request.form.get('title')
    weather = request.form.get('weather')
    content = request.form.get('content')
    color = request.form.get('color')
    userID = request.form.get('userID')
    result = saveMessage(modelID,title,weather,content,color,userID)
    return {'result':result}
# recording
@app.route("/recordingInfo",methods=["POST"])
def recordingInfo():
    modelID = request.form.get('modelID')
    name = request.form.get('name')
    path = request.form.get('path')
    userID = request.form.get('userID')
    result = saveRecording(modelID,name,path,userID)
    return {'result':result}
# image
@app.route("/imageInfo",methods=["POST"])
def imageInfo():
    modelID = request.form.get('modelID')
    name = request.form.get('name')
    path = request.form.get('path')
    userID = request.form.get('userID')
    result = saveImage(modelID,name,path,userID)
    return {'result':result}
# message board : 訪客的留言板，同樣將資料存入 table message，並將 messageID 存入 table room 的 msgList
# @app.route("/board",methods = ["POST"])
# def board():
#     roomID = request.form.get('roomID')
    

    
if __name__ == "__main__":
    app.run(host="localhost",port=5000,debug=True)
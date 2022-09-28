from flask import Flask, render_template, request, session, jsonify
from datetime import timedelta
import os
from base64 import b64encode
# path : /flaskServer/myModule
from myModule.user import userRegister,userLogin,updateModelList,getUserId
from myModule.model import uploadFile,modelInsert,getEntireItem
from myModule.model import saveMessage,saveRecording,saveImage,modelInfo
from myModule.room import findRoom,roomExist,updateRoom,roomInsert,isRoomEditor
from flask_cors import CORS

app = Flask(__name__)
app.config['SESSION_USE_SIGNER'] = True
app.config['SECRET_KEY'] = os.urandom(24)
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=1) # session 可以存活的時間
app.config['SESSION_PERMANENT'] = False   # session 期限是否為永久

CORS(app,supports_credentials=True, resources={r"/.*": {"origins": ["http://localhost:3000"]}})

@app.route("/")
def root():
    return render_template("index.html")
    # return render_template("verification.html")

############# 註冊 #############
@app.route("/register",methods=["POST"])
def register():
    userID = request.json['userID']
    name = request.json['name']
    passwd = request.json['passwd']
    email = request.json['email']
    result = userRegister(name,userID,passwd,email)
    # True: 註冊成功 False: 註冊失敗(有重複帳號)
    return result
############# 登入 #############
@app.route("/login",methods=["POST"])
def login():
    userID = request.json['userID']
    passwd = request.json['passwd']
    name = userLogin(userID, passwd)
    # result: 回傳使用者的資料(name and userID)，如果沒有代表沒有找到相符的
    if name :
        # 設置session
        session['userID'] = userID
        print(session)
        return jsonify({
            "login":name
        })
    return "Fail"
############# 登出 #############
@app.route("/logout",methods=["POST"])
def logout_user():
    session.pop("userID")
    return "200"
############# 取得使用者 ID #############
@app.route("/@me",methods = ["GET"])
def get_current_user():
    userID = session.get("userID")
    print("userID",userID)
    # if don't have user session
    if not userID :
        print("gogo")
        return jsonify({"error": "UnAuthorized"}),401
    user = getUserId(userID)
    # id,name,email
    return jsonify({
        "userID":user[0],
        "name":user[1],
        "email":user[2]
    })

############# 上傳 model #############
@app.route("/upload",methods=["POST"])
def upload():
    userID = session['userID']
    # model files
    objName = request.json['objName']
    mtlName = request.json['mtlName']
    obj = request.json['obj']
    mtl = request.json['mtl']
    modelName = objName.split(".obj")[0]
    inputPath = f"./static/models/source/{objName}"
    outputPath = f"./static/models/js/{modelName}.js"
    # images
    thumbnail = request.json['thumbnail']
    texture = request.json['texture']
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
    # FIXME: 檢查照片檔名重複
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
    if result == "上傳成功":
        updateModelList(modelID,userID)
    # user 上傳的 model 做處理: obj to file and insert into database
    return jsonify({'result':result,'name':modelName,'model':outputPath,'type':1,'image':thumbnailPath})

############# 取得所有 model 資訊 #############
@app.route("/getItem",methods=["POST"])
def getItem():
    items = getEntireItem()
    return jsonify({'itemList':items})

############# user 所有的房間資料 #############
@app.route("/userAllRoom",methods=["POST"])
def userAllRoom():
    userID = session['userID']
    result = findRoom(userID)
    return jsonify({'result':result})
############# 儲存房間 #############
@app.route("/saveRoom",methods=["POST"])
def saveRoom():
    roomID = request.json['roomID']
    name = request.json['roomName']
    roomContent = request.json['roomContent']
    private_public = request.json['private_public']
    userID = session['userID']
    # 已存在的房間
    if roomExist(roomID,userID) == True:
        updateRoom(roomID,name,roomContent,private_public)
    # 不是房間編輯者
    elif isRoomEditor(roomID,userID) == False:
        result = "您不是房間擁有者"
    elif roomInsert(name,roomContent,userID,private_public) == False:
        result = "您已經有相同房間名字存在，請重新命名"
    else:
        result = "房間存取成功"
    return jsonify({'result':result})
############# 點擊 model 取得內部資訊(照片、文字等) #############
@app.route("/getModelInfo",methods=["POST"])
def getModelInfo():
    modelID = request.json['modelID']
    userID = session['userID']
    result = dict()
    result['message'] = modelInfo(modelID,userID,"message")
    result['recording'] = modelInfo(modelID,userID,"recording")
    result['image'] = modelInfo(modelID,userID,"image")
    return jsonify(result)
############# 訊息插入到 model #############
# message: insert the infomation into table message and update the messageID
@app.route("/messageInfo",methods=["POST"])
def messageInfo():
    modelID = request.json['modelID']
    title = request.json['title']
    weather = request.json['weather']
    content = request.json['content']
    color = request.json['color']
    userID = session['userID']
    result = saveMessage(modelID,title,weather,content,color,userID)
    return jsonify({'result':result})
############# insert into recording #############
@app.route("/recordingInfo",methods=["POST"])
def recordingInfo():
    modelID = request.json['modelID']
    name = request.json['name']
    path = request.json['path']
    userID = session['userID']
    result = saveRecording(modelID,name,path,userID)
    return jsonify({'result':result})
############# insert into image #############
@app.route("/imageInfo",methods=["POST"])
def imageInfo():
    modelID = request.json['modelID']
    name = request.json['name']
    path = request.json['path']
    userID = session['userID']
    result = saveImage(modelID,name,path,userID)
    return jsonify({'result':result})

# message board : 訪客的留言板，同樣將資料存入 table message，並將 messageID 存入 table room 的 msgList
# @app.route("/board",methods = ["POST"])
# def board():
#     roomID = request.json['roomID']
    

    

if __name__ == "__main__":
    app.run(host="localhost",port=5000,debug=True)

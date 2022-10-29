from re import I
from flask import Flask, render_template, request, session, jsonify,redirect,url_for
from datetime import timedelta
import os
# import secrets
from base64 import b64encode
# path : /flaskServer/myModule
from myModule.user import userRegister,userLogin,userAllModel,getUserId,updatePersonal,updateHeadshot,updateItemList,updatePasswd
from myModule.model import modelInsert,getEntireItem
from myModule.itemInfo import itemInformation,itemInfoInsert,itemInfoUpdate
from myModule.room import findRoomByUserID,updateRoom,roomInsert,roomDelete,isRoomEditor,repeatRoomName,findRoomByRoomName,getAllRoom,findRoomByRoomID,roomSelect
from myModule.upload_save import uploadFile
from flask_cors import CORS


app = Flask(__name__)
app.config['SESSION_USE_SIGNER'] = True
app.config['SECRET_KEY'] = os.urandom(24)
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=1) # session 可以存活的時間
app.config['SESSION_PERMANENT'] = False   # session 期限是否為永久
# 設定 CORS
CORS(app,supports_credentials=True, resources={r"/.*": {"origins": ["http://localhost:3000"]}})



@app.route("/")
def root():
    return render_template("index.html")
    # return render_template("blueprint.html")
    # return render_template("verification.html")
@app.route("/blueprint")
def blueprint():
    return render_template("blueprint.html")
    # return render_template("blueprint.html")
    # return render_template("verification.html")
############# 註冊 #############
@app.route("/register",methods=["POST"])
def register():
    userID = request.json['userID']
    name = request.json['name']
    passwd = request.json['passwd']
    email = request.json['email']
    result = userRegister(name,userID,passwd,email)
    session['userID'] = userID
    if result == "success":
        return jsonify({
            "userID":userID,
            "email":email,
            "username":name
        })
    return jsonify({'result':result})

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
    return "LoginFail"
############# 登出 #############
@app.route("/logout",methods=["POST"])
def logout_user():
    session.pop("userID")
    return "200"
############# 取得使用者資料 #############
@app.route("/@me",methods = ["GET"])
def get_current_user():
    userID = session.get("userID")
    print("userID",userID)
    # if don't have user session
    if not userID :
        return jsonify({"error": "UnAuthorized"}),401
    user = getUserId(userID)
    # id,name,email
    return jsonify({
        "userID":user[0],
        "name":user[1],
        "email":user[2],
        "headshotPath":user[3],
        "introduction":user[4]
    })
# 更改 mtl 中的 texure 圖片
def updateMTL(mtl,textureName):
    newContext = ""
    mtl = mtl.split("\n")
    for i in range(len(mtl)):
        print("=======>",mtl[i])
        if "map_Kd" in mtl[i] or "map_Ka" in mtl[i] or "map_Ks" in mtl[i]:
            line = mtl[i].split()
            print(line)
            mtl[i] = line[0] + " " + textureName
        newContext += mtl[i] +"\n"
    return newContext

############# 上傳 model #############
@app.route("/upload",methods=["POST"])
def upload():
    # model files
    objName = request.form.get('objName')
    mtlName = request.form.get('mtlName')
    obj = request.form.get('obj')
    mtl = request.form.get('mtl')
    modelName = objName.split(".obj")[0]
    sourcePath = "./static/blueprint/models/source"
    inputPath = f"{sourcePath}/{objName}"
    outputPath = f"./static/blueprint/models/js/{modelName}.js"
    # images
    thumbnail = request.form.get('thumbnail')
    texture = request.form.get('texture')
    # thumbnailName = secrets.token_hex()+".jpg"
    # textureName = secrets.token_hex()+".jpg"
    thumbnailName = b64encode(os.urandom(20)).decode('utf-8')+".jpg"
    textureName = b64encode(os.urandom(20)).decode('utf-8')+".jpg"
    # userID = session.get("userID")
    # if not userID :
    #     return {"result":"未登入，無法上傳 model"} 
    thumbnailPath = "./static/blueprint/models/thumbnails"
    texturePath = "./static/blueprint/models/js"
    # modify name of texture in mtl
    mtl = updateMTL(mtl,textureName)
    # mtl = f"{mtl.split('map_Kd')[0]} map_Kd {textureName}.jpg"
    # 上傳檔案到本機
    uploadFile(objName,obj,'file',sourcePath)
    uploadFile(mtlName,mtl,'file',sourcePath)
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
        # 確認檔案都在
        os.system(f"python ./myModule/convert_obj_three.py -i {inputPath} -o {outputPath}")
        # 將 model 資料 insert into DB
        thumbnailPath = f"{thumbnailPath}/{thumbnailName}"
        texturePath = f"{texturePath}/{textureName}"
        # 成功插入資料庫
        itemID = modelInsert(thumbnailPath,texturePath,outputPath)
        if  itemID > 0:
            result = "上傳成功"
        else:
            result = "上傳失敗"
            os.remove(outputPath)
            os.remove(outputPath)
            os.remove(thumbnailPath)
            os.remove(texturePath)
    # FIXME:更新 table aacount 的 itemList
    # if result == "上傳成功":
    #     updateItemList(itemID,userID) 
    # user 上傳的 model 做處理: obj to file and insert into database
    return {'result':result,'name':modelName,'model':outputPath,'type':1,'image':thumbnailPath}

############# 取得所有 model #############
@app.route("/getItem",methods=["POST"])
def getItem():
    # FIXME: 測試用， userID 寫死
    userID = session.get('userID')
    print(userID)
    # userID = "test"
    itemList = userAllModel(userID) # 取得 user 所有 model 清單
    # FIXME: 以下暫時測試用
    itemList = []
    result = getEntireItem(itemList) # 取得 model 所有資訊
    return jsonify({'itemsInfo':result})
############# 取得目前此 model 資訊 #############
# @app.route("/getModelInfo",methods=["POST"])
# def getModelInfo():
#     roomID = request.form.get('roomID')
#     itemID = request.form.get('itemID')
#     # # 取得此model的roomID、modelID
#     # # 得到itemI
#     # userID = session.get('userID')
#     # print(userID)
#     # itemList = userAllModel(userID) # 取得 user 所有 model 清單
#     # result = getEntireItem(itemList) # 取得 model 所有資訊

#     # return jsonify({'itemsInfo':result})
#     return jsonify({'ModelInfo':"hello"})

############# user 選擇房間進入 #############
@app.route("/userClickRoom",methods=["POST"])
def userClickRoom():
    roomID = request.json['RoomInfo']
    session['roomID'] = roomID
    return "Success"

############# 載入房間 #############
@app.route("/loadRoom",methods=["GET"])
def loadRoom():
    roomID = session.get("roomID")
    try:
        userID = session.get('userID')
    except:
        userID = b64encode(os.urandom(10)).decode('utf-8')
        print("line 202 =====================>",userID)
    isEditor = isRoomEditor(roomID,userID)
    # roomID = 4
    # 取得此 roomID 的 (roomContent)
    print("roomID",roomID)
    roomContent = roomSelect(roomID)
    return {'roomContent':roomContent,"isEditor":isEditor}

############# user 所有的房間資料 #############
@app.route("/userAllRoom",methods=["GET"])
def userAllRoom():
    userID = session.get("userID")
    result = findRoomByUserID(userID)
    return jsonify({'result':result})

########### 創建房間並插入 DB ###########
@app.route("/createRoom",methods=["POST"])
def createRoom():
    roomName = request.json['roomName']
    introduction = request.json['introduction']
    roomContent = request.json['roomContent']
    private_public = request.json['private_public']
    userID = session.get("userID")
    # 使用者所擁有的房間中已經有相同的名字
    if repeatRoomName(roomName,userID) == True:
        return "name of room is repeat"
    roomID = roomInsert(roomName,introduction,roomContent,userID,private_public)
    # 儲存房間json 的session
    session['roomContent'] = roomContent
    return jsonify({'roomID':roomID})

############# 儲存房間 #############
@app.route("/saveRoom",methods=["POST"])
def saveRoom():
    roomID = request.json['roomID']
    roomName = request.json['roomName']
    roomImg = request.json['roomImg'] # FIXME: 不一定要上傳房間照片
    roomImgPath = request.json['roomImgPath']
    introduction = request.json['introduction']
    roomContent = request.json['roomContent']
    private_public = request.json['private_public']
    userID = session.get("userID")
    # 不是房間編輯者
    if isRoomEditor(roomID,userID) == False:
        result = "您不是房間擁有者"
    # 確認房間名字有重複
    elif repeatRoomName(roomName,userID) == True:
        result = "您已經有相同房間名字存在，請重新命名"
    else:
        # 房間截圖路徑
        path = ""
        # 有房間截圖
        if roomImg:
            # roomImgName = secrets.token_hex()+".jpg"
            roomImgName = b64encode(os.urandom(20)).decode('utf-8')+".jpg"
            path = f'{roomImgPath}/{roomImgName}'
            uploadFile(roomImgName,roomImg,'image',path) # 將房間圖片儲存到房間
        updateRoom(roomID,roomName,path,introduction,roomContent,private_public)
        result = "房間存取成功"
    return jsonify({'result':result})
######### 刪除房間 ############
@app.route("/deleteRoom",methods=["POST"])
def deleteRoom():
    roomID = request.json['roomID']
    result = roomDelete(roomID)
    return jsonify({'result':result})
############# 搜索房間 by roomName (首頁) #############
@app.route("/filterRoomName",methods=["GET"])
def filterRoomName():
    roomName = request.json['roomName']
    private_public = "on"
    result = findRoomByRoomName(roomName,private_public)
    return jsonify({'result':result})

############# 首頁瀏覽 #############
@app.route("/allRoom",methods=["GET"])
def allRoom():
    private_public = "on"
    result = getAllRoom(private_public)
    print(result)
    return jsonify({'result':result})

############# 點擊房間進入瀏覽介面 #############
@app.route("/RoomIntro",methods=["POST"])
def loadRoomInfo():
    roomID = request.json['roomID']
    result = findRoomByRoomID(roomID)
    return jsonify({'result':result})

############# 修改個人資訊 #############
@app.route("/modifyPersonal",methods=["POST"])
def modifyPersonal():
    userID = session.get('userID')
    name = request.form.get('name')
    email = request.form.get('email')
    introduction = request.form.get('introduction')
    result = updatePersonal(userID,name,email,introduction)
    return jsonify({'result':result})
############# 修改個人密碼 #############
@app.route("/modifyPasswd",methods=["POST"])
def modifyPasswd():
    userID = session.get('userID')
    print(userID)
    oldPasswd = request.form.get('oldPasswd')
    passwd = request.form.get('passwd')
    result = updatePasswd(userID,oldPasswd,passwd)
    return {'result':result}

############# 更新大頭貼 #############
@app.route("/modifyHeadshot",methods=["POST"])
def modifyHeadshot():
    userID = session.get('userID')
    headshot = request.json['headshot']
    path = request.json['path']
    # headshotName = secrets.token_hex()+".jpg"
    headshotName = b64encode(os.urandom(20)).decode('utf-8')+".jpg"
    # 將照片存到 server
    uploadFile(headshotName,headshot,'image',f'{path}/{headshotName}')
    # 更新大頭照路徑
    updateHeadshot(userID,path)
    return jsonify({'headshotName':headshotName})
############# 儲存 model 內部資訊(照片、文字等) #############
# FIXME: 未完成
@app.route("/saveItemInfo",methods=["POST"])
def saveItemInfo():
    itemInfoID = request.form.get('itemInfoID')
    itemName = request.form.get('itemName')
    date = request.form.get('date')
    weather = request.form.get('weather')
    message = request.form.get('message')
    image = request.form.get('image')
    record = request.form.get('record')
    recordName = request.form.get('recordName')
    imagePath = ""
    recordPath = ""
    # 照片處理
    if image:
        imagePath = "./static/blueprint/itemInfo/image"
        # imageName = secrets.token_hex()+".jpg"
        imageName = b64encode(os.urandom(20)).decode('utf-8')+".jpg"
        uploadFile(imageName,image,'image',imagePath)
    # 語音處理
    if record:
        recordPath = "recording","./static/blueprint/itemInfo/record"
        fileName = b64encode(os.urandom(20)).decode('utf-8')+".mp3"
        uploadFile(fileName,record,recordPath)
    # 第一次寫入訊息
    if itemInfoID == 0:
        itemInfoID = itemInfoInsert(itemName,date,weather,message,imagePath,recordPath,recordName)
        result = "新增成功"
    else:
        result = itemInfoUpdate(itemInfoID,itemName,date,weather,message,imagePath,recordPath,recordName)
    return {'result':result,'itemInfo':itemInfoID}
############# 點擊 Item 取得內部資訊(照片、文字等) #############
@app.route("/getItemInfo",methods=["POST"])
def getItemInfo():
    roomID = session.get("roomID")
    print("roomID",roomID)
    itemID = request.form.get('itemID')
    # userID = session.get("userID")
    result = itemInformation(roomID,itemID)
    return {'result':result}

















# ############# 點擊 model 取得內部資訊(照片、文字等) #############
# @app.route("/getModelInfo",methods=["POST"])
# def getModelInfo():
#     modelID = request.json['modelID']
#     userID = session.get("userID")
#     result = dict()
#     result['message'] = modelInfo(modelID,userID,"message")
#     result['recording'] = modelInfo(modelID,userID,"recording")
#     result['image'] = modelInfo(modelID,userID,"image")
#     return jsonify(result)
# ############# 訊息插入到 model #############
# # message: insert the infomation into table message and update the messageID
# @app.route("/messageInfo",methods=["POST"])
# def messageInfo():
#     modelID = request.json['modelID']
#     title = request.json['title']
#     weather = request.json['weather']
#     content = request.json['content']
#     color = request.json['color']
#     userID = session.get("userID")
#     result = saveMessage(modelID,title,weather,content,color,userID)
#     return jsonify({'result':result})
# ############# insert into recording #############
# @app.route("/recordingInfo",methods=["POST"])
# def recordingInfo():
#     modelID = request.json['modelID']
#     name = request.json['name']
#     path = request.json['path']
#     userID = session.get("userID")
#     result = saveRecording(modelID,name,path,userID)
#     return jsonify({'result':result})
# ############# insert into image #############
# @app.route("/imageInfo",methods=["POST"])
# def imageInfo():
#     modelID = request.json['modelID']
#     name = request.json['name']
#     path = request.json['path']
#     userID = session.get("userID")
#     result = saveImage(modelID,name,path,userID)
#     return jsonify({'result':result})

# message board : 訪客的留言板，同樣將資料存入 table message，並將 messageID 存入 table room 的 msgList
# @app.route("/board",methods = ["POST"])
# def board():
#     roomID = request.json['roomID']


if __name__ == "__main__":
    app.run(host="localhost",port=5000,debug=True)
    # app.run(host="0.0.0.0",port=5000,debug=True)

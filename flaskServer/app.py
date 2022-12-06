from flask import Flask, render_template, request, session, jsonify
from flask_cors import CORS
from datetime import timedelta
import os
import secrets
from base64 import b64encode
# path : /flaskServer/myModule
from myModule.user import userRegister,userLogin,userAllModel,getUserId,updatePersonal,updateHeadshot,updateItemList,updatePasswd,getUserNum,getUserByRoom
from myModule.model import modelInsert,getEntireItem,itemDelete
from myModule.itemInfo import itemSelect,itemInfoInsert,itemInfoUpdate
from myModule.room import findRoomByUserID,updateRoom,roomInsert,roomDelete,isRoomEditor,repeatRoomName,findRoomByRoomName,getAllRoom,findRoomByRoomID,roomSelect,RoomIntroEdit,RoomIntro,updateRoomPic,findPubRoomByUserID,findPubRoomByUserNum,findPubRoomByRoomID
from myModule.boardMsg import  allBoardMsg,boardMsgInsert
from myModule.upload_save import uploadFile

# , static_folder='static/build', static_url_path='/'
app = Flask(__name__)
app.config['SESSION_USE_SIGNER'] = True
app.config['SECRET_KEY'] = os.urandom(24)
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=1) # session 可以存活的時間
app.config['SESSION_PERMANENT'] = False   # session 期限是否為永久
# app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:root@localhost:3306/blueprint"

# CORS(app,supports_credentials=True, resources={r"/.*": {"origins": ["http://163.22.17.192:3000"]}})
CORS(app,supports_credentials=True, resources={r"/.*": {"origins": ["http://localhost:3000"]}})



@app.route("/")
def root():
    print("網站")
    return render_template("index.html")
    # return render_template("blueprint.html")
    # return render_template("verification.html")
@app.route("/blueprint")
def blueprint():
    return render_template("blueprint.html")
@app.route("/new")
def new():
    return render_template("content.html")
@app.route("/Login")
def newLogin():
    return render_template("index.html")
@app.route("/SignUp")
def newSignUp():
    return render_template("index.html")
@app.route("/servicedata")
def newservicedata():
    return render_template("index.html")
@app.route("/RoomIntro")
def newRoomIntro():
    return render_template("index.html")
@app.route("/RoomOwnerProfile")
def ownerprofile():
    return render_template("index.html")
@app.route("/profile")
def newprofile():
    return render_template("index.html")
@app.route("/userdata")
def newuserdata():
    return render_template("index.html")
@app.route("/allroom")
def newAllRoom():
    return render_template("index.html")

############# 註冊 #############
@app.route("/register",methods=["POST"])
def register():
    userID = request.json['userID']
    name = request.json['name']
    passwd = request.json['passwd']
    email = request.json['email']
    headshotPath = "./static/headShots/myHeadshot.jpg"
    result = userRegister(name,userID,passwd,email,headshotPath)
    if result == "success":
        session['userID'] = userID
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
    print(userID)
    passwd = request.json['passwd']
    name = userLogin(userID, passwd)
    # result: 回傳使用者的資料(name and userID)，如果沒有代表沒有找到相符的
    if name :
        # 設置session
        session['userID'] = userID
        session['name'] = name
        print(session)
        return jsonify({
            "login":name
        })
    return "LoginFail"
############# 登出 #############
@app.route("/logout",methods=["POST"])
def logout_user():
    session.pop("userID")
    session.pop("name")
    return "200"
############# 取得使用者資料 #############
@app.route("/@me",methods = ["GET"])
def get_current_user():
    print("current_user")
    userID = session.get("userID")
    # if don't have user session
    if (userID == None):
        return jsonify({"error": "UnAuthorized"}),401
    else :
        try :
            user = getUserId(userID)
        except :
            return jsonify({"error": "UnAuthorized"}),401
    # id,name,email
    return jsonify({
        "userID":user[0],
        "name":user[1],
        "email":user[2],
        "headshotPath":user[3],
        "introduction":user[4]
    })
@app.route("/@meforFile",methods = ["GET"])
def get_user_File():
    roomID = session.get("roomID")
    if (roomID == None) :
        return jsonify({"error": "UnAuthorized"}),401
    else :
        print("meforFile get in ! test test 123")
        try :
            user = getUserByRoom(roomID)
        except :
            return jsonify({"error": "UnAuthorized"}),401
        print("user inside 是什麼勒" , user)
        print("meforFile get in ! test test 成功")
    return jsonify({
        "userID":user[0],
        "name":user[1],
        "email":user[2],
        "headshotPath":user[3],
        "introduction":user[4]
    })
@app.route("/@mebyNum",methods = ["POST"])
def get_user():
    userNum = request.json['number']
    # if don't have user session
    if (userNum == None) :
        return jsonify({"error": "UnAuthorized"}),401
    else :
        try :
            user = getUserNum(userNum)
        except :
            return jsonify({"error": "UnAuthorized"}),401
    # id,name,email
    return jsonify({
        "userID":user[0],
        "name":user[1],
        "email":user[2],
        "headshotPath":user[3],
        "introduction":user[4]
    })


#################### model ####################
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

# 上傳 model
@app.route("/upload",methods=["POST"])
def upload():
    # model files
    objName = request.form.get('objName')
    mtlName = request.form.get('mtlName')
    obj = request.form.get('obj')
    mtl = request.form.get('mtl')
    thumbnail = request.form.get('thumbnail')
    texture = request.form.get('texture')
    modelType = request.form.get('type')
    modelName = objName.split(".obj")[0]
    sourcePath = "./static/blueprint/models/source"
    inputPath = f"{sourcePath}/{objName}"
    outputPath = f"./static/blueprint/models/js/{modelName}.js"
    # images
    thumbnailName = secrets.token_hex()+".jpg"
    textureName = secrets.token_hex()+".jpg"
    # thumbnailName = b64encode(os.urandom(20)).decode('utf-8')+".jpg"
    # textureName = b64encode(os.urandom(20)).decode('utf-8')+".jpg"
    userID = session.get("userID")
    if not userID :
        return {"result":"未登入，無法上傳 model"} 
    thumbnailPath = "./static/blueprint/models/thumbnails"
    texturePath = "./static/blueprint/models/js"
    # modify name of texture in mtl
    mtl = updateMTL(mtl,textureName)
    # mtl = f"{mtl.split('map_Kd')[0]} map_Kd {textureName}.jpg"
    # 上傳檔案到本機
    uploadFile(obj,'file',inputPath)
    uploadFile(mtl,'file',f"{sourcePath}/{mtlName}")
    uploadFile(thumbnail,'image',f"{thumbnailPath}/{thumbnailName}")
    uploadFile(texture,'image',f"{texturePath}/{textureName}")
    # itemID: 模型的 ID，如果上船錯誤就會回傳 itemID = 0
    itemID = 0
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
        itemID = modelInsert(thumbnailPath,texturePath,outputPath,modelType)
        if  itemID > 0:
            result = "上傳成功"
        else:
            result = "上傳失敗"
            os.remove(outputPath)
            os.remove(outputPath)
            os.remove(thumbnailPath)
            os.remove(texturePath)
    # FIXME:更新 table aacount 的 itemList
    if result == "上傳成功":
        updateItemList(itemID,userID) 
    # user 上傳的 model 做處理: obj to file and insert into database
    return {'result':result,'id':itemID,'name':modelName,'model':outputPath,'type':modelType,'image':thumbnailPath}

# 儲存模型內部資訊(照片、文字等)
@app.route("/saveItemInfo",methods=["POST"])
def saveItemInfo():
    roomID = session.get('roomID')
    itemID = request.form.get('itemID')
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
        # imageName = b64encode(os.urandom(20)).decode('utf-8')+".jpg"
        imageName = secrets.token_hex()+".jpg"
        imagePath = "./static/blueprint/itemInfo/image/"+imageName
        uploadFile(image,'image',imagePath)
    # 語音處理
    if record:
        # fileName = b64encode(os.urandom(20)).decode('utf-8')+".mp3"
        fileName = secrets.token_hex()+".mp3"
        recordPath = "./static/blueprint/itemInfo/record/"+fileName
        uploadFile(record,"recording",recordPath)
    print("=======================================")
    # 第一次寫入訊息
    if int(itemInfoID) == 0:
        itemInfoID = itemInfoInsert(roomID,itemID,itemName,date,weather,message,imagePath,recordPath,recordName)
        result = "新增成功"
    else:
        result = itemInfoUpdate(itemInfoID,itemName,date,weather,message,imagePath,recordPath,recordName)
    return {'result':result,'itemInfoID':itemInfoID}
# 點擊模型取得內部資訊(照片、文字等)
@app.route("/getItemInfo",methods=["POST"])
def getItemInfo():
    itemInfoID = request.form.get('itemInfoID')
    # 此模型沒有訊息
    print(itemInfoID)
    # if itemInfoID == NULL:
    #     result = {
    #         'itemInfoID': itemInfoID,
    #         'itemName': "",
    #         'date': "",
    #         'weather': "",
    #         'message': "",
    #         'imagePath': "",
    #         'recordPath': "",
    #         'recordName': ""
    #     }
    # else:
    result = itemSelect(itemInfoID)
    return result

# 取得所有 model
@app.route("/getItem",methods=["POST"])
def getItem():
    userID = session.get('userID')
    print(userID)
    itemList = userAllModel(userID) # 取得 user 所有 model 清單
    # FIXME: 以下暫時測試用
    # itemList = []
    result = getEntireItem(itemList) # 取得 model 所有資訊
    return jsonify({'itemsInfo':result})

# 刪除模型
@app.route("/deleteItem",methods=["POST"])
def deleteItem():
    userID = session.get('userID')
    itemID = request.form.get('itemID')
    result = itemDelete(userID,itemID)
    return {'result':result}

#################### room ####################
# user 選擇房間進入
@app.route("/userClickRoom",methods=["POST"])
def userClickRoom():
    roomID = request.json['RoomInfo']
    if roomID:
        print("line 313=======================",roomID)
        session['roomID'] = roomID
    return "Success"
# 載入房間
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

# user 所有的房間資料
@app.route("/userAllRoom",methods=["GET"])
def userAllRoom():
    userID = session.get("userID")
    if (userID == None) :
        return jsonify({"error": "UnAuthorized"}),401
    else :
        result = findRoomByUserID(userID)
    return jsonify({'result':result})

# user 所有公開房間資料
@app.route("/userAllPubRoom",methods=["POST"])
def userAllPubRoom():
    roomNum = request.json['number']
    if (roomNum == None) :
        userID = session.get("userID")
        if (userID == None) :
            return jsonify({"error": "UnAuthorized"}),401
        else :
            result = findPubRoomByUserID(userID)
    else :
        result = findPubRoomByUserNum(roomNum)
    # roomNum = request.json['number']
    # if (roomNum == None) :
    #     roomID = session.get("roomID")
    #     if (roomID == None) :
    #         userID = session.get("userID")
    #         if (userID == None) :
    #             return jsonify({"error": "UnAuthorized"}),401
    #         else :
    #             result = findPubRoomByUserID(userID)
    #     else :
    #         result = findPubRoomByRoomID(roomID)
    # else :
    #     result = findPubRoomByUserNum(roomNum)
    return jsonify({'result':result})

# user 所有公開房間資料
@app.route("/OwnerRoom",methods=["GET"])
def OwnerRoom():
    roomID = session.get("roomID")
    if (roomID == None) :
        return jsonify({"error": "UnAuthorized"}),401
    else :
        print("room ID take it take take ")
        try :
            result = findPubRoomByRoomID(roomID)
        except :
            return jsonify({"error": "UnAuthorized"}),401
        print("room ID take it take take 成功")
    return jsonify({'result':result})

# 創建房間並插入 DB
@app.route("/createRoom",methods=["POST"])
def createRoom():
    roomName = request.json['roomName']
    introduction = request.json['introduction']
    roomImgPath = request.json['roomImgPath'] # 預設圖片
    roomContent = request.json['roomContent']
    private_public = request.json['private_public']
    userID = session.get("userID")
    # 使用者所擁有的房間中已經有相同的名字
    if repeatRoomName(roomName,userID) == True:
        return "name of room is repeat"
    roomID = roomInsert(roomName,introduction,roomImgPath,roomContent,userID,private_public)
    # 儲存房間json 的session
    session['roomContent'] = roomContent
    return jsonify({'roomID':roomID})

# 編輯房間簡介
@app.route("/editRoom",methods=["POST"])
def editRoom():
    roomID = request.json['editRoomID']
    roomName = request.json['roomName']
    introduction = request.json['introduction']
    private_public = request.json['private_public']
    userID = session.get("userID")
    result = RoomIntroEdit(roomID,roomName,introduction,private_public)
    return jsonify({'result':result})

# 更新大頭貼
@app.route("/modifyRoomPic",methods=["POST"])
def modifyRoomPic():
    roomID = request.json['roomID']
    roomPic = request.json['roomPic']
    # 隨機命名
    roomPicName = secrets.token_hex()+"jpg"
    print("roomPicName in modifyHeadshot", roomPicName)
    # 將照片存到 server
    uploadFile(roomPic,'image',f'./static/roomPic/{roomPicName}')
    roomPicPath = f'/static/roomPic/{roomPicName}'
    # 更新大頭照路徑
    updateRoomPic(roomID, roomPicPath)
    return jsonify({'roomPicName':roomPicName})

# 儲存房間
@app.route("/saveRoom",methods=["POST"])
def saveRoom():
    # roomID = request.json['roomID']
    # roomName = request.json['roomName']
    # roomImg = request.json['roomImg'] # FIXME: 不一定要上傳房間照片
    # roomImgPath = request.json['roomImgPath']
    # introduction = request.json['introduction']
    print("request.json !!!!!!!!!!")
    roomName = request.json['roomName']
    print("roomName 是什麼我有", roomName)
    roomContent = request.json['roomContent']
    print("roomContent 不知道有沒有改變")
    roomID = session.get("roomID")
    print("roomID 總該有了吧", roomID)
    # private_public = request.json['private_public']
    # # 不是房間編輯者
    # if isRoomEditor(roomID,userID) == False:
    #     result = "您不是房間擁有者"
    # # 確認房間名字有重複
    # elif repeatRoomName(roomName,userID) == True:
    #     result = "您已經有相同房間名字存在，請重新命名"
    # else:
    # 房間截圖路徑
    # path = ""
    # 有房間截圖
    # if roomImg:
    #     roomImgName = secrets.token_hex()+".jpg"
    #     # roomImgName = b64encode(os.urandom(20)).decode('utf-8')+".jpg"
    #     path = f'{roomImgPath}/{roomImgName}'
    #     uploadFile(roomImgName,roomImg,'image',path) # 將房間圖片儲存到房間
    updateRoom(roomID,roomContent)
    # updateRoom(roomID,roomName,path,introduction,roomContent,private_public)
    result = "房間存取成功"
    return jsonify({'result':result})

# 獲取房間簡介
@app.route("/getRoomIntro",methods=["POST"])
def getRoomIntro():
    roomID = request.json['roomID']
    room = RoomIntro(roomID)
    print("room" , room)
    return jsonify({
        "id":room[0],
        "roomName":room[1],
        "introduction":room[2],
        "roomImgPath":room[3],
        "private_public":room[6]
    })

# 刪除房間
@app.route("/deleteRoom",methods=["POST"])
def deleteRoom():
    roomID = request.json['roomID']
    result = roomDelete(roomID)
    return jsonify({'result':result})

# 搜索房間 by roomName (首頁)
@app.route("/filterRoomName",methods=["POST"])
def filterRoomName():
    print("get in filter Room Name")
    roomName = request.json['temp']
    print("roomName", roomName)
    private_public = "on"
    result = findRoomByRoomName(roomName,private_public)
    return jsonify({'result':result})

# 首頁瀏覽
@app.route("/allRoom",methods=["GET"])
def allRoom():
    private_public = "on"
    try :
        result = getAllRoom(private_public)
    except :
        return jsonify({"error": "UnAuthorized"}),401
    print(result)
    return jsonify({'result':result})

# 點擊房間進入瀏覽介面
@app.route("/RoomIntro",methods=["POST"])
def loadRoomInfo():
    roomID = request.json['roomID']
    if (roomID == None) :
        roomID = session.get("roomID")
    print("hahaha here i stand in roomID", roomID)
    result = findRoomByRoomID(roomID)
    return jsonify({'result':result})
################### 留言板 #################
# 獲取留言板所有訊息
@app.route("/getMsgBoard",methods=["GET"])
def getMsgBoard():
    roomID = session.get('roomID')
    # print("/getMsgBoard roomID: ",roomID)
    # roomID = request.form.get('roomID')
    result = allBoardMsg(roomID)
    return jsonify({'result':result})
# 訪客寫紙條
@app.route("/writeMsgBoard",methods=["POST"])
def writeMsgBoard():
    roomID = session.get('roomID')
    # roomID = request.form.get('roomID')
    color = request.form.get('color')
    content = request.form.get('content')
    msgFrom = session.get('name')
    msgFromUserID = session.get('userID')
    # 假設這個人尚未登入: 沒有usrname 
    if(msgFrom == None and msgFromUserID == None):
        msgFrom = "visitor"
        msgFromUserID = "visitor"
        result= boardMsgInsert(color,content,msgFrom,msgFromUserID,roomID)
    else:
        result= boardMsgInsert(color,content,msgFrom,msgFromUserID,roomID)
    return jsonify({'result':result})

#################### 個人資訊 ####################
# 修改個人資訊
@app.route("/modifyPersonal",methods=["POST"])
def modifyPersonal():
    userID = session.get('userID')
    name = request.json['name']
    email = request.json['email']
    introduction = request.json['introduction']
    print("all data", userID,name,email,introduction)
    result = updatePersonal(userID,name,email,introduction)
    return jsonify({'result':result})
# 修改個人密碼
@app.route("/modifyPasswd",methods=["POST"])
def modifyPasswd():
    userID = session.get('userID')
    print(userID)
    oldPasswd = request.json['oldPasswd']
    passwd = request.json['passwd']
    result = updatePasswd(userID,oldPasswd,passwd)
    return {'result':result}

# 更新大頭貼
@app.route("/modifyHeadshot",methods=["POST"])
def modifyHeadshot():
    userID = session.get('userID')
    headshot = request.json['headshot']
    # 隨機命名
    headshotName = secrets.token_hex()+"jpg"
    print("headshotName in modifyHeadshot", headshotName)
    # 將照片存到 server
    uploadFile(headshot,'image',f'./static/headShots/{headshotName}')
    headshotPath = f'/static/headShots/{headshotName}'
    # 更新大頭照路徑
    updateHeadshot(userID, headshotPath)
    return jsonify({'headshotName':headshotName})

if __name__ == "__main__":
    #app.run(host="localhost",port=5000,debug=True)
    app.run(host="0.0.0.0", port=5000, debug=True) #127.0.0.1:5000
    # from gevent import pywsgi
    # server = pywsgi.WSGIServer(('0.0.0.0', 5000), app)
    # server.serve_forever()

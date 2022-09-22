from myModule.connectDB import connection,cursor
import base64
from datetime import datetime
import json

# all the item in DB (FIXME: 1. 抓到 userID 的 modelList，userID 獲取哪些 model)
def getEntireItem():
    command = f"SELECT name,thumbnailPath,jsPath,type FROM `item` WHERE 1"
    cursor.execute(command)
    dataList = cursor.fetchall()
    items = []
    for name,thumbnailPath,model,type in dataList:
        data = dict()
        # data['id'] = id
        data['name'] = name
        data['image'] = thumbnailPath
        data['model'] = model
        data['type'] = type
        items.append(data)
    print("載入完成")
    return items

# 使用者上船的 item 新增到 DB
def modelInsert(thumbnailPath,texturePath,jsPath):
    # 去掉路徑和 js
    jsName = jsPath.split("/")[-1][:-3]
    print("JSpath:",jsPath)
    print("JSName:",jsName)
    # read model.js
    # with open(jsPath) as f:
    #     data = json.load(f)
    #     data = json.dumps(data) # json to string
    # insert into DB
    try:
        command = f"INSERT INTO `item`(`name`, `thumbnailPath`, `texturePath`, `jsPath`) VALUES ('{jsName}','{thumbnailPath}','{texturePath}','{jsPath}')"
        cursor.execute(command)
        connection.commit()
        command = "select max(`id`) from item"
        modelID = cursor.execute(command)
        return modelID
    except:
        return 0
# 存取使用者上傳的 obj, mtl, texture
def uploadFile(fileName,content,fileType,path):
    # 檔案
    if fileType == 'file':
        writeInFile(f"{path}/{fileName}",content,"w")
    # 圖片
    elif fileType == 'image':
        content = content.split(",")[1]
        content = base64.b64decode(content)
        writeInFile(f"{path}/{fileName}.jpg",content,"wb")
def writeInFile(path,text,mode):
    f = open(path, mode)
    f.write(text)
    f.close()
# 取得 message 資訊
def modelInfo(modelID,userID,table):
    command = f"SELECT `{table}ID` from `item` WHERE id = '{modelID}'"
    cursor.execute(command)
    dataList = cursor.fetchone()[0]
    dataList = json.loads(dataList)
    if userID in dataList.keys():
        infoID = dataList[userID]
        command = f"SELECT * from {table} WHERE id = {infoID}"
        cursor.execute(command)
        data = cursor.fetchone()
        result = list(data)
    else:
        result = ""
    return result
# 留言板
# FIXME: 中文輸入時可能會報錯誤
# 點擊 model 填入資料(message, recording, image)，存到資料庫，如果是修改資料，依樣會將資料進行更新
def saveMessage(modelID,title,weather,content,color,userID):
    date = datetime.now()
    try:
        # # 檢查 userID 在物品上有沒有重複
        # command = f"SELECT `messageID` FROM `item` WHERE `id` = {modelID}"
        # cursor.execute(command)
        # data = cursor.fetchone() # FIXME: 不確定 fetchone 的格式
        # # item 已經有寫了
        # if userID in data:
        #     return False
        # 將 message information insert into DB
        command = f"INSERT INTO `message`(`title`, `date`, `weather`, `content`, `color`, `msgfrom`) VALUES ('{title}','{date}','{weather}','{content}', '{color}', '{userID}')"
        cursor.execute(command)
        connection.commit()
        # 將 message id 加入到 table item 的 messageID, 如果內容更新，也會一起更新
        command = "select max(`id`) from `message`"
        messageID = cursor.execute(command)
        command = f"UPDATE item SET item.messageID = JSON_SET( item.messageID, '$.{userID}', '{messageID}') WHERE id = '{modelID}'"
        cursor.execute(command)
        connection.commit()
        return True
    except:
        return False
def saveRecording(modelID,name,path,userID):
    try:
        command = f"INSERT INTO `recording`(`name`, `path`) VALUES ('{name}','{path}')"
        cursor.execute(command)
        connection.commit()
        command = "select max(`id`) from `recording`"
        recordID = cursor.execute(command)
        command = f"UPDATE item SET item.recordID = JSON_SET( item.recordID, '$.{userID}', '{recordID}') WHERE id = '{modelID}'"
        return True
    except:
        return False
def saveImage(modelID,name,path,userID):
    date = datetime.now()
    try:
        command = f"INSERT INTO `image`(`name`, `date`, `path`) VALUES ('{name}','{date}','{path}')"
        cursor.execute(command)
        connection.commit()
        command = "select max(`id`) from `image`"
        imageID = cursor.execute(command)
        command = f"UPDATE item SET item.imageID = JSON_SET( item.imageID, '$.{userID}', '{imageID}') WHERE id = '{modelID}'"
        return True
    except:
        return False


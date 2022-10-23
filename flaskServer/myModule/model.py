from myModule.connectDB import connection,cursor
# from datetime import datetime
# import json
from myModule.upload_save import  uploadFile
# all the item in DB (FIXME: 1. 抓到 userID 的 modelList，userID 獲取哪些 model)
def getEntireItem(modelList):
    # list to tuple
    modelList = tuple(modelList)
    # 取得 model 資訊
    # command = f"SELECT name,thumbnailPath,jsPath,type FROM `item` WHERE id in {modelList}"
    # FIXME: 暫時測試，所以使用以下 command
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
    # insert into DB
    try:
        command = f"INSERT INTO `item`(`name`, `thumbnailPath`, `texturePath`, `jsPath`) VALUES ('{jsName}','{thumbnailPath}','{texturePath}','{jsPath}')"
        cursor.execute(command)
        connection.commit()
        command = "select max(`id`) from item"
        itemID = cursor.execute(command)
        return itemID
    except:
        return 0









# =====================================================================
# 取得 message 資訊(old version)
# def modelInfo(itemID,userID,table):
#     command = f"SELECT `{table}ID` from `item` WHERE id = '{itemID}'"
#     cursor.execute(command)
#     dataList = cursor.fetchone()[0]
#     dataList = json.loads(dataList)
#     if userID in dataList.keys():
#         infoID = dataList[userID]
#         command = f"SELECT * from {table} WHERE id = {infoID}"
#         cursor.execute(command)
#         data = cursor.fetchone()
#         result = list(data)
#     else:
#         result = ""
#     return result
# 留言板
# 點擊 model 填入資料(message, recording, image)，存到資料庫，如果是修改資料，依樣會將資料進行更新
# def saveMessage(itemID,title,weather,content,color,userID):
#     date = datetime.now()
#     try:
#         # # 檢查 userID 在物品上有沒有重複
#         # command = f"SELECT `messageID` FROM `item` WHERE `id` = {itemID}"
#         # cursor.execute(command)
#         # data = cursor.fetchone() # FIXME: 不確定 fetchone 的格式
#         # # item 已經有寫了
#         # if userID in data:
#         #     return False
#         # 將 message information insert into DB
#         command = f"INSERT INTO `message`(`title`, `date`, `weather`, `content`, `color`, `msgfrom`) VALUES ('{title}','{date}','{weather}','{content}', '{color}', '{userID}')"
#         cursor.execute(command)
#         connection.commit()
#         # 將 message id 加入到 table item 的 messageID, 如果內容更新，也會一起更新
#         command = "select max(`id`) from `message`"
#         messageID = cursor.execute(command)
#         command = f"UPDATE item SET item.messageID = JSON_SET( item.messageID, '$.{userID}', '{messageID}') WHERE id = '{itemID}'"
#         cursor.execute(command)
#         connection.commit()
#         return True
#     except:
#         return False
# def saveRecording(itemID,name,path,userID):
#     try:
#         command = f"INSERT INTO `recording`(`name`, `path`) VALUES ('{name}','{path}')"
#         cursor.execute(command)
#         connection.commit()
#         command = "select max(`id`) from `recording`"
#         recordID = cursor.execute(command)
#         command = f"UPDATE item SET item.recordID = JSON_SET( item.recordID, '$.{userID}', '{recordID}') WHERE id = '{itemID}'"
#         return True
#     except:
#         return False
# def saveImage(itemID,name,path,userID):
#     date = datetime.now()
#     try:
#         command = f"INSERT INTO `image`(`name`, `date`, `path`) VALUES ('{name}','{date}','{path}')"
#         cursor.execute(command)
#         connection.commit()
#         command = "select max(`id`) from `image`"
#         imageID = cursor.execute(command)
#         command = f"UPDATE item SET item.imageID = JSON_SET( item.imageID, '$.{userID}', '{imageID}') WHERE id = '{itemID}'"
#         return True
#     except:
#         return False


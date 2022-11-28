from myModule.connectDB import connection,cursor
# from datetime import datetime
# import json
from myModule.upload_save import  uploadFile
# all the item in DB (FIXME: 1. 抓到 userID 的 modelList，userID 獲取哪些 model)
def getEntireItem(modelList):
    # list to tuple
    modelList = tuple(modelList)
    # 取得 model 資訊
    # command = f"SELECT id,name,thumbnailPath,jsPath,type FROM `item` WHERE id in {modelList}"
    # FIXME: 暫時測試，所以使用以下 command
    command = f"SELECT id,name,thumbnailPath,jsPath,type FROM `item` WHERE 1"
    cursor.execute(command)
    dataList = cursor.fetchall()
    items = []
    for id,name,thumbnailPath,model,type in dataList:
        data = dict()
        data['id'] = id
        data['name'] = name
        data['image'] = thumbnailPath
        data['model'] = model
        data['type'] = type
        items.append(data)
    print("載入完成")
    return items

# 使用者上船的 item 新增到 DB
def modelInsert(thumbnailPath,texturePath,jsPath,modelType):
    # 去掉路徑和 js
    jsName = jsPath.split("/")[-1][:-3]
    print("JSpath:",jsPath)
    print("JSName:",jsName)
    # insert into DB
    try:
        command = f"INSERT INTO `item`(`name`, `thumbnailPath`, `texturePath`, `jsPath`) VALUES ('{jsName}','{thumbnailPath}','{texturePath}','{jsPath}','{modelType}')"
        cursor.execute(command)
        connection.commit()
        command = "select max(`id`) from item"
        cursor.execute(command)
        itemID = cursor.fetchone()[0]
        print("itemID ============================>",itemID)
        return itemID
    except:
        return 0

def itemDelete(userID,itemID):
    # 預設模型不可以刪除
    if int(itemID) < 100:
        result = "預設的模型不可刪除"
    else:
        command = f"SELECT `itemList` FROM `account` WHERE userID = '{userID}'"
        cursor.execute(command)
        data = cursor.fetchone()[0]
        # data 去掉頭尾括弧 -> ()
        # data = data[1:len(data)-1].split(",")
        # string to list
        data = list(eval(data))
        data.remove(int(itemID))
        # list to string for saving DB
        data = ",".join([str(i) for i in data])
        # 刪除 user 擁有的模型ID
        command = f"UPDATE `account` SET `itemList`='{data}' WHERE  userID = '{userID}'"
        cursor.execute(command)
        connection.commit()
        # 刪除資料庫的模型
        command = f"DELETE FROM `item` WHERE id = '{itemID}'"
        cursor.execute(command)
        connection.commit()
        result = "刪除成功"
    return result








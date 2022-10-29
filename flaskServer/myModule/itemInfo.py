from myModule.connectDB import connection,cursor
def itemInformation(roomID,itemID):
    command = f"SELECT count(itemID) FROM itemInfo WHERE roomID = '{roomID}' and itemID = '{itemID}'"
    cursor.execute(command)
    num = cursor.fetchone()[0]
    if num == 0:
        command = f"SELECT `name` FROM `item` WHERE id = '{itemID}'"
        cursor.execute(command)
        itemName= cursor.fetchone()[0]
        data = {
            'id':"",
            'roomID':"",
            'itemID':"",
            'itemName':itemName,
            'date':"",
            'weather':"",
            'message':"",
            'imagePath':"",
            'recordPath':"",
            'recordName':""
        }
    else:
        # SELECT iteminfo.* ,item.name FROM itemInfo,`item`WHERE iteminfo.itemID = item.id and iteminfo.roomID = '3' and iteminfo.itemID = '1';
        command = f"SELECT iteminfo.* ,item.name FROM itemInfo,item WHERE iteminfo.itemID = item.id and roomID = '{roomID}' and itemID = '{itemID}'"
        cursor.execute(command)
        info= cursor.fetchone()
        data = {
            'id':info[0],
            'roomID':info[1],
            'itemID':info[2],
            'itemName':info[3],
            'date':info[4],
            'weather':info[5],
            'message':info[6],
            'imagePath':info[7],
            'recordPath':info[8],
            'recordName':info[9]
        }
    print(data)
    return data
# 插入 item 資訊
def itemInfoInsert(itemName,date,weather,message,imagePath,recordPath,recordName):
    command = f"INSERT INTO `iteminfo`(`itemName`, `date`, `weather`, `message`, `imagePath`, `recordPath`, `recordName`) VALUES ('{itemName}','{date}','{weather}','{message}','{imagePath}','{recordPath}','{recordName}')"
    cursor.execute(command)
    connection.commit()
    command = "select max(`id`) from item"
    itemInfoID = cursor.execute(command)
    return itemInfoID
def itemInfoUpdate(itemInfoID,itemName,date,weather,message,imagePath,recordPath,recordName):
    if imagePath and recordPath:
        command = f"UPDATE `iteminfo` SET `itemName`='{itemName}',`date`='{date}',`weather`='{weather}',`message`='{message}',`imagePath`='{imagePath}',`recordPath`='{recordPath}',`recordName`='{recordName}' WHERE id='{itemInfoID}'"
    elif imagePath:
        command = f"UPDATE `iteminfo` SET `itemName`='{itemName}',`date`='{date}',`weather`='{weather}',`message`='{message}',`imagePath`='{imagePath}' WHERE id='{itemInfoID}'"
    elif recordPath:
        command = f"UPDATE `iteminfo` SET `itemName`='{itemName}',`date`='{date}',`weather`='{weather}',`message`='{message}',`recordPath`='{recordPath}',`recordName`='{recordName}' WHERE id='{itemInfoID}'"
    try:
        cursor.execute(command)
        connection.commit()
        return "修改成功"
    except:
        return "修改失敗"
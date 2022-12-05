from myModule.connectDB import connection, cursor

def itemSelect(itemInfoID):
    command = f"SELECT `itemName`, `date`, `weather`, `message`, `imagePath`, `recordPath`, `recordName` FROM `iteminfo` WHERE id = '{itemInfoID}'"
    cursor.execute(command)
    result = cursor.fetchone()
    # print("result:",result)
    data = {
        'itemInfoID': itemInfoID,
        'itemName': result[0],
        'date': result[1],
        'weather': result[2],
        'message': result[3],
        'imagePath': result[4],
        'recordPath': result[5],
        'recordName': result[6]
    }
    print("Data date: ",data['date'])
    return data
# 插入 item 資訊
def itemInfoInsert(roomID,itemID,itemName,date,weather,message,imagePath,recordPath,recordName):
    command = f"INSERT INTO `iteminfo`(`roomID`,`itemID`,`itemName`, `date`, `weather`, `message`, `imagePath`, `recordPath`, `recordName`) VALUES ('{roomID}','{itemID}','{itemName}','{date}','{weather}','{message}','{imagePath}','{recordPath}','{recordName}')"
    cursor.execute(command)
    connection.commit()
    command = "select max(`id`) from `iteminfo`"
    cursor.execute(command)
    itemInfoID = cursor.fetchone()[0]
    return itemInfoID
def itemInfoUpdate(itemInfoID,itemName,date,weather,message,imagePath,recordPath,recordName):
    if imagePath and recordPath:
        command = f"UPDATE `iteminfo` SET `itemName`='{itemName}',`date`='{date}',`weather`='{weather}',`message`='{message}',`imagePath`='{imagePath}',`recordPath`='{recordPath}',`recordName`='{recordName}' WHERE id='{itemInfoID}'"
    elif imagePath:
        command = f"UPDATE `iteminfo` SET `itemName`='{itemName}',`date`='{date}',`weather`='{weather}',`message`='{message}',`imagePath`='{imagePath}' WHERE id='{itemInfoID}'"
    elif recordPath:
        command = f"UPDATE `iteminfo` SET `itemName`='{itemName}',`date`='{date}',`weather`='{weather}',`message`='{message}',`recordPath`='{recordPath}',`recordName`='{recordName}' WHERE id='{itemInfoID}'"
    else:
        command = f"UPDATE `iteminfo` SET `itemName`='{itemName}',`date`='{date}',`weather`='{weather}',`message`='{message}' WHERE id='{itemInfoID}'"
    try:
        cursor.execute(command)
        connection.commit()
    except:
        return "修改失敗"
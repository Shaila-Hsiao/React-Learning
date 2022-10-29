from myModule.connectDB import connection,cursor
def itemSelect(itemInfoID):
    command = f"SELECT `itemName`, `date`, `weather`, `message`, `imagePath`, `recordPath`, `recordName` FROM itemInfo WHERE itemInfoID = '{itemInfoID}'"
    cursor.execute(command)
    result = cursor.fetchone()[0]
    data = {
        'id': itemInfoID,
        'itemName': result[0],
        'date': result[1],
        'weather': result[2],
        'message': result[3],
        'imagePath': result[4],
        'recordPath': result[5],
        'recordName': result[6]
    }
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
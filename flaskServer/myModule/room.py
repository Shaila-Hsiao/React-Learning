from myModule.connectDB import connection,cursor

# 房間有沒有重複的名字
def repeatRoomName(roomName,userID):
    command = f"SELECT * FROM `room` WHERE roomName = '{roomName}' and Find_in_set('{userID}',room.userID)"
    cursor.execute(command)
    dataList = cursor.fetchall()
    # user 有重複名字的房間
    if len(dataList) > 0:
        return True
    return False

# 更新房間內容
def updateRoom(roomID,roomName,roomImgPath,introduction,roomContent,private_public):
    command = f"UPDATE `room` SET `roomName` = '{roomName}',`roomImgPath` = '{roomImgPath}',`introduction` = '{introduction}', `roomContent` = '{roomContent}', `private_public` = '{private_public}' WHERE id = '{roomID}'"
    cursor.execute(command)
    connection.commit()

# insert into DB
def roomInsert(roomName,introduction,roomContent,userID,private_public):
    command = f"INSERT INTO `room`(`roomName`, `introduction`, `roomContent`, `userID`, `private_public`) VALUES ('{roomName}','{introduction}','{roomContent}','{userID}','{private_public}')"
    # 新增至itemInfo
    cursor.execute(command)
    connection.commit()

# delete room
def roomDelete(roomID):
    command = f"DELETE FROM `room` WHERE roomID = '{roomID}'"
    cursor.execute(command)
    connection.commit()

# FIXME:檢查使用者是不是房間所有者 => table room 的 userID 要變成可多個編輯者加入?
def isRoomEditor(roomID,userID):
    command = f"SELECT `userID` FROM `room` WHERE roomID = '{roomID}'"
    cursor.execute(command)
    dataList = cursor.fetchone()
    # FIXME: 之後確認 if 'f' in ('結果','f') 需不需要做切割
    if userID in dataList:
        return True
    return False
# DB 取得的資訊轉換成 dictionary
def dataDic(dataList):
    data = []
    for i in dataList:
        row = dict()
        row['id'] = i[0]
        row['roomName'] = i[1]
        row['introduction'] = i[2]
        row['imgPath'] = i[3]
        row['roomContent'] = i[4]
        row['userID'] = i[5]
        row['private_public'] = i[6]
        data.append(row)
    return data
# 首頁 --- 取得房間資訊
def getAllRoom(private_public):
    command = f"SELECT `id`, `roomImgPath` FROM `room` WHERE private_public = '{private_public}'"
    cursor.execute(command)
    dataList = cursor.fetchall()
    return dataList

# find all of rooms by user
def findRoomByUserID(userID):
    command = f"SELECT * FROM `room` WHERE Find_in_set('{userID}',room.userID)"
    cursor.execute(command)
    dataList = cursor.fetchall()
    return dataList

# find room by roomID
def findRoomByRoomID(roomID):
    command = f"SELECT `roomName`,room.introduction,`roomImgPath`, `name`, `email`,account.introduction, `headshotPath` FROM `room`,`account`WHERE room.id = '{roomID}' && account.userID = (SELECT `userID` FROM `room`WHERE room.id = '{roomID}')"
    cursor.execute(command)
    dataList = cursor.fetchall()
    return dataList

def findRoomByRoomName(roomName,private_public):
    command = f"SELECT * FROM `room` WHERE `roomName` = {roomName} and `public_private` = {private_public}"
    cursor.execute(command)
    dataList = cursor.fetchall()
    return dataDic(dataList)
# 留言板
# JSON_CONTAINS(`userID`,'test');
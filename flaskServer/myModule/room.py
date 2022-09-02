from myModule.connectDB import setting

connection = setting()

# 房間有沒有存在
def roomExist(roomID):
    with connection.cursor() as cursor:
        command = f"SELECT * FROM `room` WHERE id = '{roomID}'"
        cursor.execute(command)
        dataList = cursor.fetchall()
        # the same userID with the same room of name
        if len(dataList) > 0:
            return True
    return True
# 更新房間內容
def updateRoom(roomID,name,roomContent,userID,private_public):
    with connection.cursor() as cursor:
        command = f"UPDATE `room` SET `name` = '{name}', `roomContent` = '{roomContent}', `userID` = {userID}, `private_public` = '{private_public}' WHERE id = '{roomID}'"
        cursor.execute(command)
        connection.commit()

# insert into DB
def roomInsert(name,roomContent,userID,private_public):
    # 檢查同個 userID 有沒有重複的房間名字
    with connection.cursor() as cursor:
        command = f"SELECT `id`, `name`, `roomContent`, `userID`, `private_public` FROM `room` WHERE userID = '{userID}' and name = '{name}'"
        cursor.execute(command)
        dataList = cursor.fetchall()
        # the same userID with the same room of name
        if len(dataList) > 0:
            return False
        # insert into DB
        command = f"INSERT INTO `room`(`name`, `roomContent`, `userID`, `private_public`) VALUES ('{name}','{roomContent}','{userID}','{private_public}')"
        cursor.execute(command)
        connection.commit()
    return True

# FIXME:檢查使用者是不是房間所有者 => table room 的 userID 要變成可多個編輯者加入?
def isRoomEditor(roomID,userID):
    with connection.cursor() as cursor:
        command = f"SELECT `userID` FROM `room` WHERE roomID = '{roomID}'"
        cursor.execute(command)
        dataList = cursor.fetchone()
        # FIXME: 之後確認 if 'f' in ('結果','f') 需不需要做切割
        if userID in dataList:
            return True
    return False
# find all of rooms by user
def findRoom(userID):
    with connection.cursor() as cursor:
        command = f"SELECT * FROM `room` WHERE Find_in_set('{userID}',room.userID)"
        cursor.execute(command)
        dataList = cursor.fetchall()
        data = []
        for i in dataList:
            row = dict()
            row['id'] = i[0]
            row['name'] = i[1]
            row['introduce'] = i[2]
            row['roomJson'] = i[3]
            row['userID'] = i[4]
            row['private_public'] = i[5]
            row['msgList'] = i[6]
            data.append(row)
    return data
# 留言板
# JSON_CONTAINS(`userID`,'test');
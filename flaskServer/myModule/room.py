from myModule.connectDB import setting

connection = setting()
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
    # update user's modelList
    with connection.cursor() as cursor:
        command = f"SELECT `userID` FROM `room` WHERE roomID = '{roomID}'"
        cursor.execute(command)
        dataList = cursor.fetchone()
        # FIXME: 之後確認 if 'f' in ('結果','f') 需不需要做切割
        if userID in dataList:
            return True
    return False
    
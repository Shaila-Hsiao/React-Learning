from flask_bcrypt import Bcrypt
# path: ./myModule
from myModule.connectDB import connection, cursor
# import myModule.connectDB
# register
def userRegister(name, userID, passwd, email, headshotPath):
    # connection = connectDB.setting()
    # cursor = connection.cursor(dictionary = True)
    # 檢查帳號有沒有重複
    sql = f"SELECT * FROM `account`  WHERE userID = '{userID}'"
    # 此帳號已經註冊過
    if cursor.execute(sql) != 0:
        print("duplicate account")
        return "Duplicate account !"
    # 密碼雜湊
    bcrypt = Bcrypt()
    passwd = bcrypt.generate_password_hash(password=passwd)
    # bytes to string
    passwd = passwd.decode()
    # 插入資料庫
    try:
        itemList = "1"
        for i in range(2,56):
            itemList += f",{i}"
        sql = f"INSERT INTO `account`(`name`,`userID`, `passwd`, `email`, `headshotPath`, `itemList`) VALUES ('{name}','{userID}','{passwd}','{email}','{headshotPath}','{itemList}')"
        cursor.execute(sql)
        connection.commit()
        # cursor.close()
        # connection.close()
        return "success"
    except:
        return "Chinese can't appear in userID"
    # 更新到 DB
# login
def userLogin(userID, passwd):
    # 回傳使用者的 name and userID
    result = ""
    sql = f"SELECT name,passwd FROM `account` WHERE userID = '{userID}'"
    cursor.execute(sql) # 執行 sql 指令
    dataList = cursor.fetchall()
    # cursor.close()
    # connection.close()
    if len(dataList) == 0:
        return result
    # userID is promary key. 符合 userID 的資料應該只有一個  (('name','userID','passwd',),)
    # 拿密碼比對
    pw = dataList[0][1]
    bcrypt = Bcrypt()
    isCorrect = bcrypt.check_password_hash(pw, passwd)
    # 帳密正確，回傳使用者名字
    if isCorrect:
        result = dataList[0][0]
    return result
# model 上傳成功要新增到資料庫的 itemList
def updateItemList(modelID,userID):
    # update user's itemList
    command = f"UPDATE `account` SET `itemList`=CONCAT(`itemList`,',{modelID}') WHERE userID = '{userID}'"
    cursor.execute(command)
    connection.commit()
    # cursor.close()
    # connection.close()

def getUserNum(number):
    result = ""
    sql = f"SELECT `userID`, `name`, `email`,`headshotPath`, `introduction` FROM `account` WHERE `number` = '{number}'"
    cursor.execute(sql) # 執行 sql 指令
    dataList = cursor.fetchall()
    if len(dataList) == 0:
        return result
    result = dataList[0]
    return result

def getUserId(userID):
    # 回傳使用者的 name and userID
    result = ""
    # 搜尋資料庫
    sql = f"SELECT `userID`, `name`, `email`,`headshotPath`, `introduction` FROM `account` WHERE `userID` = '{userID}'"
    cursor.execute(sql) # 執行 sql 指令
    dataList = cursor.fetchall()
    # print("getUserid"+dataList)
    # cursor.close()
    # connection.close()
    if len(dataList) == 0:
        return result
    result = dataList[0]
    return result

def findUserIdByRoom(roomID) :
    command = f"SELECT userID FROM `room` WHERE `id` = '{roomID}'"
    cursor.execute(command)
    dataList = cursor.fetchall()
    print("dataList         @-@", dataList)
    return dataList[0][0]

def getUserByRoom(roomID):
    print("再次檢查", roomID)
    userID = findUserIdByRoom(roomID)
    print("再次檢查 userID", userID)
    result = ""
    # 搜尋資料庫
    sql = f"SELECT `userID`, `name`, `email`,`headshotPath`, `introduction` FROM `account` WHERE `userID` = '{userID}'"
    cursor.execute(sql) # 執行 sql 指令
    dataList = cursor.fetchall()
    if len(dataList) == 0:
        return result
    result = dataList[0]
    print("dataList dataList", dataList[0])
    return result

def getUserNum(userNum):
    result = ""
    # 搜尋資料庫
    sql = f"SELECT `userID`, `name`, `email`,`headshotPath`, `introduction` FROM `account` WHERE `number` = '{userNum}'"
    cursor.execute(sql) # 執行 sql 指令
    dataList = cursor.fetchall()
    if len(dataList) == 0:
        return result
    result = dataList[0]
    return result

# 更新個人資料
def updatePersonal(userID,name,email,introduction):
    try:
        command = f"UPDATE `account` SET name = '{name}', email = '{email}', introduction = '{introduction}' WHERE `userID` = '{userID}'"
        cursor.execute(command)
        connection.commit()
        return True
    except:
        return False
# 更新個人密碼
def updatePasswd(userID,oldPasswd,newPasswd):
    # 檢查密碼是否正確
    command = f"SELECT `passwd` FROM `account` WHERE userID = '{userID}'"
    cursor.execute(command)
    pw = cursor.fetchone()[0]
    bcrypt = Bcrypt()
    isCorrect = bcrypt.check_password_hash(pw, oldPasswd) # 為何不用 WHERE 檢查密碼是否正確的原因: 因為使用者輸入密碼後，密碼採用雜湊存入 DB，導致同樣的密碼雜湊後每一次都不同
    # 更新密碼
    if isCorrect == True:
        newPasswd = bcrypt.generate_password_hash(password=newPasswd).decode()
        command = f"UPDATE `account` SET passwd = '{newPasswd}' WHERE userID = '{userID}'"
        cursor.execute(command)
        connection.commit()
        return True
    else:
        return False

# 大頭貼更換
def updateHeadshot(userID,headshotPath):
    # connection = connectDB.setting()
    # cursor = connection.cursor(dictionary = True)
    command = f"UPDATE `account` SET headshotPath = '{headshotPath}' WHERE userID = '{userID}'"
    cursor.execute(command)
    connection.commit()
    # cursor.close()
    # connection.close()
# 取得使用者所有 model 清單
def userAllModel(userID):
    # connection = connectDB.setting()
    # cursor = connection.cursor(dictionary = True)
    if userID:
        sql = f"SELECT itemList FROM `account` WHERE userID = '{userID}'"
        cursor.execute(sql) # 執行 sql 指令
        dataList = cursor.fetchone()
        # cursor.close()
        # connection.close()
        dataList = dataList[0].split(",")
        return dataList
    return list()
# 上傳 model 後，ID 新增到 table `account` 的 itemList
# def updateItemList(userID):
#     command = ""


    # with connection.cursor() as cursor:
    #     # sql 指令
    #     command = "INSERT INTO `item`(`name`, `imagePath`, `model`, `type`) VALUES ()"
    #     # command = "SELECT * FROM `item` WHERE 1"
    #     # 執行指令
    #     cursor.execute(command)
    #     # 取得前五筆資料
    #     # result = cursor.fetchmany(5)
    #     # print(result)

    # 連接資料庫
    # with connection.cursor() as cursor:
from flask_bcrypt import Bcrypt
# path: ./myModule
from myModule.connectDB import connection,cursor
# register
def userRegister(name,userID,passwd,email):
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
        for i in range(2,26):
            itemList += f",{i}"
        sql = f"INSERT INTO `account`(`name`,`userID`, `passwd`, `email`, `itemList`) VALUES ('{name}','{userID}','{passwd}','{email}','{itemList}')"
        cursor.execute(sql)
        connection.commit()
        return "success"
    except:
        return "Chinese can't appear in userID"
    # 更新到 DB
# login
def userLogin(userID,passwd):
    # 回傳使用者的 name and userID
    result = ""
    sql = f"SELECT name,passwd FROM `account` WHERE userID = '{userID}'"
    cursor.execute(sql) # 執行 sql 指令
    dataList = cursor.fetchall()
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
def getUserId(userID):
    # 回傳使用者的 name and userID
    result = ""
    # 搜尋資料庫
    sql = f"SELECT userID,name,email FROM `account` WHERE userID = '{userID}'"
    cursor.execute(sql) # 執行 sql 指令
    dataList = cursor.fetchall()
    if len(dataList) == 0:
        return result
    result = dataList[0]
    return result
# 更新密碼
def updatePersonal(userID,name,passwd,email,introduction):
    try:
        # 密碼雜湊
        bcrypt = Bcrypt()
        passwd = bcrypt.generate_password_hash(password=passwd)
        # bytes to string
        passwd = passwd.decode()
        command = f"UPDATE `account` SET name = '{name}', passwd = '{passwd}', email = '{email}', introduction = '{introduction}' WHERE userID = '{userID}'"
        cursor.execute(command)
        connection.commit()
        return True
    except:
        return False
# 大頭貼更換
def updateHeadshot(userID,headshotPath):
    command = f"UPDATE `account` SET headshotPath = '{headshotPath}' WHERE userID = '{userID}'"
    cursor.execute(command)
    connection.commit()
# 取得使用者所有 model 清單
def userAllModel(userID):
    sql = f"SELECT itemList FROM `account` WHERE userID = '{userID}'"
    cursor.execute(sql) # 執行 sql 指令
    dataList = cursor.fetchone()
    dataList = dataList[0].split(",")
    return dataList
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
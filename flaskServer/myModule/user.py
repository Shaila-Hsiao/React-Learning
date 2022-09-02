from flask_bcrypt import Bcrypt
# path: ./myModule
from myModule.connectDB import connection,cursor

# register
def userRegister(name,id,passwd,email):
    # 檢查帳號有沒有重複
    sql = f"SELECT * FROM `account`  WHERE id = '{id}'"
    # 此帳號已經註冊過
    if cursor.execute(sql) != 0:
        print("duplicate account")
        return False
    # 密碼雜湊
    bcrypt = Bcrypt()
    passwd = bcrypt.generate_password_hash(password=passwd)
    # bytes to string
    passwd = passwd.decode()
    # 插入資料庫
    sql = f"INSERT INTO `account`(`name`,`id`, `passwd`, `email`) VALUES ('{name}','{id}','{passwd}','{email}')"
    cursor.execute(sql)
    # 更新到 DB
    connection.commit()
    return True
# login
def userLogin(id,passwd):
    # 回傳使用者的 name and id
    result = ""
    sql = f"SELECT name,passwd FROM `account` WHERE id = '{id}'"
    cursor.execute(sql) # 執行 sql 指令
    dataList = cursor.fetchall()
    if len(dataList) == 0:
        return result
    # id is promary key. 符合 id 的資料應該只有一個  (('name','id','passwd',),)
    # 拿密碼比對
    pw = dataList[0][1]
    bcrypt = Bcrypt()
    isCorrect = bcrypt.check_password_hash(pw, passwd)
    # 帳密正確，回傳使用者名字
    if isCorrect:
        result = dataList[0][0]
    return result
# model 上傳成功要新增到資料庫的 modelList
def updateModelList(modelID,userID):
    # update user's modelList
    command = f"UPDATE `account` SET `modelList`=CONCAT(`modelList`,',{modelID}') WHERE id = '{userID}'"
    cursor.execute(command)
    connection.commit()



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

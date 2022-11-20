# import mysql.connector
import pymysql # mysql
# 連接資料庫
def setting():
    # 資料庫設定
    db_settings = {
        "host": "localhost",
        "port": 3306,
        "user": "root",
        # "user": "lab103",
        "password": "",
        # "password": "Lab103%",
        "database": "blueprint"
        # 'auth_plugin': 'mysql_native_password'
        # "charset": "utf8"
        
    }
    config = {
        "host": "mysql",
        "port": 3306,
        "user": "root",
        "password": "root",
        "database": "blueprint"
        # 'auth_plugin': 'mysql_native_password'
        # "charset": "utf8"
        
    }
    try:
        # # 建立Connection物件
        connection = pymysql.connect(**db_settings)
        # connection = mysql.connector.connect(**config)
        print("==========success to connect DB=============")
        return connection
    except Exception as ex:
        print("資料庫連線失敗: error",ex)
        return
# 建立連結
connection = setting()
cursor = connection.cursor()
# cursor = connection.cursor(dictionary = True)

# """
# db_settings = {
#     "host": "mysql",
#     'user': 'root',
#     'password': 'root',
#     'port': '3306',
#     'database': 'blueprint',
#     'auth_plugin': 'mysql_native_password'
# }
# """
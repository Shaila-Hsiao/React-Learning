# import mysql.connector 
import pymysql # mysql
# 連接資料庫
def setting():
    # 資料庫設定
    db_settings = {
        "host": "localhost",
        # "host": "mysql",
        "port": 3306,
        "user": "root",
        "password": "",
        # "password": "root",
        "db": "blueprint",
        # 'auth_plugin': 'mysql_native_password'
        # "charset": "utf8"
    }
    try:
        # 建立Connection物件
        connection = pymysql.connect(**db_settings)
        # connection = mysql.connector.connect(**db_settings)
        print("==========success to connect DB=============")
        return connection
    except Exception as ex:
        print("error",ex)
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
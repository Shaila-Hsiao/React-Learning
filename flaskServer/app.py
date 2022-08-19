from flask import Flask, render_template, request, session
from datetime import timedelta
import os
# path : /flaskServer/myModule
from myModule.user import userRegister,userLogin
from myModule.item import modelUpload,itemInsert,getEntireItem

app = Flask(__name__)
app.config['SESSION_USE_SIGNER'] = True
app.config['SECRET_KEY'] = os.urandom(24)
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(days=1) # session 可以存活的時間
app.config['SESSION_PERMANENT'] = False   # session 期限是否為永久


@app.route("/")
def root():
    return render_template("index.html")
# 測試
@app.route("/menbers")
def menbers():
    return {"menbers":['test1','test2','test3']}

@app.route("/register",methods=["POST"])
def register():
    id = request.form.get('id')
    name = request.form.get('name')
    passwd = request.form.get('passwd')
    email = request.form.get('email')
    result = userRegister(name,id,passwd,email)
    # True: 註冊成功 False: 註冊失敗(有重複帳號)
    if result:
        return "success"
    return "Fail"
@app.route("/login",methods=["POST"])
def login():
    id = request.form.get('id')
    passwd = request.form.get('passwd')
    name = userLogin(id, passwd)
    # result: 回傳使用者的資料(name and id)，如果沒有代表沒有找到相符的
    if name :
        # 設置session
        session[name] = id
        print(session)
        return "login"
    return "Fail"
@app.route("/upload",methods=["POST"])
def upload():
    textureName = request.form.get('textureName')
    objName = request.form.get('objName')
    mtlName = request.form.get('mtlName')
    texture = request.form.get('texture')
    obj = request.form.get('obj')
    mtl = request.form.get('mtl')
    jsName = objName.split(".obj")[0]
    inputPath = f"./static/item/source/{objName}"
    outputPath = f"./static/item/js/{jsName}.js"
    texturePath = f"./static/item/texture/{textureName}"
    result = ""
    # 確認有沒有重複的檔案
    if os.path.exists(outputPath) == True:
        result = "model 已存在"
    # 已存在同檔名的照片
    elif os.path.exists(texturePath) == True:
        result = "已存在同檔名的 texture iamge，若要更改檔名，mtl file 內容也一同更改 map_Kd 後面的材質名字再上傳"
    # user 上傳的 model 做處理: obj to file and insert into database
    modelUpload(textureName,objName,mtlName,texture,obj,mtl)
    # 檔案已經重複
    if result:
        pass
    # 找不到 input
    elif os.path.exists(inputPath) == False:
        result = "上傳失敗，請檢查您的檔案"
    # obj to json and insert into DB
    else:
        os.system(f"python ./myModule/convert_obj_three.py -i {inputPath} -o {outputPath}")
        result = "上傳成功"
        itemInsert(outputPath,texturePath)
    return {'result':result}
@app.route("/getItem",methods=["POST"])
def getItem():
    items = getEntireItem()
    return {'itemList':items}
# @app.route("/saveRoom",method=["POST"])
# def saveRoom():
#     name = request.form.get('name')  # 房間名字
#     roomContent = request.form.get('room')
#     userID = request.form.get('userID')
#     private_public = request.form.get('private_public')
    
#     return {'room':}
if __name__ == "__main__":
    app.run(host="localhost",port=5000,debug=True)
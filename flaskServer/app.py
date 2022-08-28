from flask import Flask, render_template, request, session
from datetime import timedelta
import os
from base64 import b64encode
# path : /flaskServer/myModule
from myModule.user import userRegister,userLogin
from myModule.model import uploadFile,modelInsert,getEntireItem

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
# 註冊
@app.route("/register",methods=["POST"])
def register():
    id = request.form.get('id')
    name = request.form.get('name')
    passwd = request.form.get('passwd')
    email = request.form.get('email')
    result = userRegister(name,id,passwd,email)
    # True: 註冊成功 False: 註冊失敗(有重複帳號)
    return result
# 登入
@app.route("/login",methods=["POST"])
def login():
    id = request.form.get('id')
    passwd = request.form.get('passwd')
    name = userLogin(id, passwd)
    # result: 回傳使用者的資料(name and id)，如果沒有代表沒有找到相符的
    if name :
        # 設置session
        print(session)
        return "login"
    return "Fail"
@app.route("/upload",methods=["POST"])
def upload():
    # model files
    objName = request.form.get('objName')
    mtlName = request.form.get('mtlName')
    obj = request.form.get('obj')
    mtl = request.form.get('mtl')
    jsName = objName.split(".obj")[0]
    inputPath = f"./static/models/source/{objName}"
    outputPath = f"./static/models/js/{jsName}.js"
    # images
    thumbnail = request.form.get('thumbnail')
    texture = request.form.get('texture')
    thumbnailName = b64encode(os.urandom(20)).decode('utf-8')
    textureName = b64encode(os.urandom(20)).decode('utf-8')
    thumbnailPath = "./static/models/thumbnails"
    texturePath = "./static/models/textures"
    # modify name of texture in mtl
    mtl = f"{mtl.split('map_Kd')[0]} map_Kd {textureName}.jpg"
    # 上傳檔案到本機
    uploadFile(objName,obj,'file',"./static/models/source")
    uploadFile(mtlName,mtl,'file',"./static/models/source")
    uploadFile(thumbnailName,thumbnail,'image',thumbnailPath)
    uploadFile(textureName,texture,'image',texturePath)
    # 確認有沒有 JS 重複的檔案
    if os.path.exists(outputPath) == True:
        result = "model 已存在"
    # 找不到 input
    elif os.path.exists(inputPath) == False:
        result = "檔案上傳失敗，請檢查您的檔案是否正確"
    # obj to json and insert into DB
    else:
        os.system(f"python ./myModule/convert_obj_three.py -i {inputPath} -o {outputPath}")
        # 將 model 資料 insert into DB
        thumbnailPath = f"{thumbnailPath}/{thumbnailName}.jpg"
        texturePath = f"{texturePath}/{textureName}.jpg"
        # 成功插入資料庫
        if modelInsert(thumbnailPath,texturePath,outputPath):
            result = "上傳成功"
        else:
            result = "上傳失敗，請注意檔案名稱不可為中文"
    # user 上傳的 model 做處理: obj to file and insert into database
    return {'result':result,'name':objName,'model':outputPath,'type':1,'image':thumbnailPath}
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
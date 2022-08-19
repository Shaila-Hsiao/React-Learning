from myModule.connectDB import setting
import base64
import json

# all the item in DB
def getEntireItem():
    connection = setting()
    with connection.cursor() as cursor:
        command = "SELECT id,name,imagePath,texturePath,model,type FROM `item` WHERE 1"
        cursor.execute(command)
    dataList = cursor.fetchall()
    items = []
    for id,name,imagePath,texturePath,model,type in dataList:
        data = dict()
        data['id'] = id
        data['name'] = name
        data['image'] = imagePath
        data['model'] = model
        data['type'] = type
        items.append(data)
        print(data["name"],"已載入")
    print("載入完成")
    return items

# 使用者上船的 item 新增到 DB
def itemInsert(jsPath,texturePath):
    connection = setting()
    # read model.js
    jsName = jsPath.split("/")[-1]
    with open(jsPath) as f:
        data = json.load(f)
        data = json.dumps(data) # json to string
    # insert into DB
    with connection.cursor() as cursor:
        command = f"INSERT INTO `item`(`name`, `texturePath`, `json`, `type`) VALUES ('{jsName}','{texturePath}','{data}','1')"
        cursor.execute(command)
        connection.commit()
# 存取使用者上傳的 obj, mtl, texture
def modelUpload(textureName,objName,mtlName,texture,obj,mtl):
    # write in file
    texture = texture.split(",")[1]
    texture = base64.b64decode(texture)
    writeInFile(f"./static/item/texture/{textureName}",texture,"wb")
    writeInFile(f"./static/item/source/{objName}",obj,"w")
    writeInFile(f"./static/item/source/{mtlName}",mtl,"w")
def writeInFile(path,text,mode):
    f = open(path, mode)
    f.write(text)
    f.close()

from myModule.connectDB import setting
import base64

# all the item in DB
def getEntireItem():
    connection = setting()
    with connection.cursor() as cursor:
        command = f"SELECT name,thumbnailPath,jsPath,type FROM `item` WHERE 1"
        cursor.execute(command)
    dataList = cursor.fetchall()
    items = []
    for name,thumbnailPath,model,type in dataList:
        data = dict()
        # data['id'] = id
        data['name'] = name
        data['image'] = thumbnailPath
        data['model'] = model
        data['type'] = type
        items.append(data)
    print("載入完成")
    return items

# 使用者上船的 item 新增到 DB
def modelInsert(thumbnailPath,texturePath,jsPath):
    connection = setting()
    # 去掉路徑和 js
    jsName = jsPath.split("/")[-1][:-3]
    print("JSpath:",jsPath)
    print("JSName:",jsName)
    # read model.js
    # with open(jsPath) as f:
    #     data = json.load(f)
    #     data = json.dumps(data) # json to string
    # insert into DB
    try:
        with connection.cursor() as cursor:
            command = f"INSERT INTO `item`(`name`, `thumbnailPath`, `texturePath`, `jsPath`) VALUES ('{jsName}','{thumbnailPath}','{texturePath}','{jsPath}')"
            cursor.execute(command)
            connection.commit()
            return True
    except:
        return False
# 存取使用者上傳的 obj, mtl, texture
def uploadFile(fileName,content,fileType,path):
    # 檔案
    if fileType == 'file':
        writeInFile(f"{path}/{fileName}",content,"w")
    # 圖片
    elif fileType == 'image':
        content = content.split(",")[1]
        content = base64.b64decode(content)
        writeInFile(f"{path}/{fileName}.jpg",content,"wb")
def writeInFile(path,text,mode):
    f = open(path, mode)
    f.write(text)
    f.close()

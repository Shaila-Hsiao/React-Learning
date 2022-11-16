import base64

# 存取使用者上傳的 obj, mtl, texture
def uploadFile(fileName,content,fileType,path):
    # 檔案
    if fileType == 'file':
        writeInFile(f"{path}/{fileName}",content,"w")
    # 圖片
    elif fileType == 'image':
        print("upload_save => uploadFile => image")
        content = content.split(",")[1]
        # print("content => ", content)
        content = base64.b64decode(content)
        writeInFile(f"{path}",content,"wb")
    # 音檔
    elif fileType == 'recording':
        content = content.split(",")[1]
        content = base64.b64decode(content)
        writeInFile(f"{path}/{fileName}",content,"wb")

def writeInFile(path,text,mode):
    # path = 'C:\\reactAndFlask\\React-Learning\\flaskServer\\static\\headShots\\text2.txt'
    # f = open(path, mode)
    # f = open(path)
    print(path)
    with open(path, mode) as f:
        f.write(text)

    # f.write("try open a new file")
    f.close()
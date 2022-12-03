import base64

# 存取使用者上傳的 obj, mtl, texture
def uploadFile(content,fileType,path):
    # 檔案
    if fileType == 'file':
        writeInFile(path,content,"w")
    # 圖片
    elif fileType == 'image':
        content = content.split(",")[1]
        content = base64.b64decode(content)
        writeInFile(path,content,"wb")
    # 音檔
    elif fileType == 'recording':
        content = content.split(",")[1]
        content = base64.b64decode(content)
        writeInFile(path,content,"wb")

def writeInFile(path,text,mode):
    # f = open(path, mode)
    # f = open(path)
    print(path)
    with open(path, mode) as f:
        f.write(text)
    f.close()
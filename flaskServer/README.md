## 在 flaskServer 底下 run
```cmd=
python app.py
```
## 目錄架構
```
flaskServer
|_ myModule
|    connectDB.py
|    covert_obj_three.py
|    item.py
|    room.py
|    user.py
|_ static
|    |_ css
|    |    boostrap.css
|    |    example.css
|    |_ fonts
|    |    glyphicons-halflings-regular.eot
|    |    ...(省略)
|    |_ js
|    |    blueprint3d.js
|    |    boostrap.js
|    |    example.js
|    |    items.js
|    |    jquery.js
|    |    OBJLoader.js
|    |_ models
|        |_ js
|        |_ source
|        |_ textures
|        |_ thumbnails
|    |_ node_modules
|    |_ rooms
|        |_ textures
|        |_ thumbnails
|_ templates
|    index.html
|_ app.py
|_ package.js
```
## 檔案介紹
### myModule
- connectDB.py 連接資料庫
- item.py 上傳 model 資料
- user.py user 登入、註冊
- convert_obj_three.py 將 obj model 轉成 js file
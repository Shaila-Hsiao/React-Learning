// 讀取圖片
// sourceID: 要取哪一個位置的圖片,showID: 要顯示圖片的位置
async function handleImage(sourceID, showID) {
    return new Promise((resolve, reject)=>{
        let reader = new FileReader();//建立FileReader物件
        try{
            // 使用 readAsDataURL 將圖片轉成 Base64
            reader.readAsDataURL($(sourceID)[0].files[0]);
            reader.onload = function (e) {
                imageContent = e.target.result;
                $(showID).attr('src', imageContent);//放入讀取到的圖片
                resolve(imageContent);
            };
        }catch{
            reject("fail");
        }
    });
}
// 讀取檔案
async function handleFile(sourceID,labelID) {
    return new Promise((resolve, reject)=>{
        try{
            var reader = new FileReader();
            reader.readAsText($(sourceID)[0].files[0]);
            reader.onload = function () {
                fileContent = reader.result;
                $(labelID).text = $(sourceID)[0].files[0].name;
                alert("成功上傳");
                resolve(fileContent);
            };
        }catch{
            reject("fail");
        }
    });
}
// 讀取音檔
async function handleRecord(sourceID, showID) {
    return new Promise((resolve, reject)=>{
        let reader = new FileReader();//建立FileReader物件
        try{
            reader.readAsDataURL($(sourceID)[0].files[0]);
            reader.onload = function (e) {
                recordContent = e.target.result;
                $(showID).attr('src', recordContent);//放入讀取到的圖片
                resolve(recordContent);
            };
        }catch{
            reject("fail");
        }
    });
}
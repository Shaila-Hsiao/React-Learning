// 登入
function login() {
    let id = document.getElementById('id');
    let passwd = document.getElementById('passwd');
    let email = document.getElementById('email');
    // 傳到後端處理
    $.ajax({
        url: '/login',
        type: "POST",
        // dataType: 'json',
        // contentType:'application/json',
        data: {"id": id,"passwd":passwd,'email':email},
        async: false, // 異步
        /*result為后端函式回傳的json*/
        success: function (result) {
            console.log("result", result);
            alert(result);
            alert("登入成功");
        }
    })
}
// 註冊

// 
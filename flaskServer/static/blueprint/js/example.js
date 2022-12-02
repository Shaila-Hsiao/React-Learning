
/*
 * Camera Buttons
 */
var CameraButtons = function (blueprint3d) {

  var orbitControls = blueprint3d.three.controls;
  var three = blueprint3d.three;

  var panSpeed = 30;
  var directions = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
  }

  function init() {


    // Camera controls
    $("#zoom-in").click(zoomIn);
    $("#zoom-out").click(zoomOut);
    $("#zoom-in").dblclick(preventDefault);
    $("#zoom-out").dblclick(preventDefault);

    $("#reset-view").click(three.centerCamera)

    $("#move-left").click(function () {
      pan(directions.LEFT)
    })
    $("#move-right").click(function () {
      pan(directions.RIGHT)
    })
    $("#move-up").click(function () {
      pan(directions.UP)
    })
    $("#move-down").click(function () {
      pan(directions.DOWN)
    })

    $("#move-left").dblclick(preventDefault);
    $("#move-right").dblclick(preventDefault);
    $("#move-up").dblclick(preventDefault);
    $("#move-down").dblclick(preventDefault);
  }

  function preventDefault(e) {
    e.preventDefault();
    // 停止傳播
    e.stopPropagation();
  }

  function pan(direction) {
    switch (direction) {
      case directions.UP:
        orbitControls.panXY(0, panSpeed);
        break;
      case directions.DOWN:
        orbitControls.panXY(0, -panSpeed);
        break;
      case directions.LEFT:
        orbitControls.panXY(panSpeed, 0);
        break;
      case directions.RIGHT:
        orbitControls.panXY(-panSpeed, 0);
        break;
    }
  }

  function zoomIn(e) {
    e.preventDefault();
    orbitControls.dollyIn(1.1);
    orbitControls.update();
  }

  function zoomOut(e) {
    e.preventDefault;
    orbitControls.dollyOut(1.1);
    orbitControls.update();
  }

  init();
}

/*
 * Context menu for selected item
 */

var ContextMenu = function (blueprint3d) {

  var scope = this;
  var selectedItem;
  var three = blueprint3d.three;

  function init() {
    $("#context-menu-delete").click(function (event) {
      selectedItem.remove();
    });

    three.itemSelectedCallbacks.add(itemSelected);
    three.itemUnselectedCallbacks.add(itemUnselected);

    initResize();

    $("#fixed").click(function () {
      var checked = $(this).prop('checked');
      selectedItem.setFixed(checked);
    });
    $("#IntroOrMove").click(function () {
      // 清空資訊
      clearItemInfo();
      // 有模型資訊就顯示
      if (selectedItem.metadata.itemInfoID != 0) {
        modelInfo(selectedItem.metadata.itemInfoID)
      }
    });

  }

  function cmToIn(cm) {
    return cm / 2.54;
  }

  function inToCm(inches) {
    return inches * 2.54;
  }

  function clearItemInfo() {
    $('#exampleModalLabel').val("");
    $('#date').val("");
    $('#weather').val("");
    $('#message').val("");
    $('#image').attr("src", "");
    $('#image').attr("alt", "");
    $('#AudioSource').attr("src", "");

  }
  // 儲存模型資訊
  function SaveItemInfo(itemInfoID) {
    console.log("Save");
    var itemName = $('#exampleModalLabel').val();
    var date = $('#date').val();
    var weather = $('#weather').val();
    var message = $('#message').val();
    var image = $('#image').attr("src");
    var AudioSource = $('#AudioSource').attr("src");
    var recordName = "blueprint";
    console.log(itemInfoID);
    console.log(itemName);
    console.log(date);
    console.log(weather);
    console.log(image);
    console.log(AudioSource);
    $.ajax({
      url: '/saveItemInfo',
      type: "POST",
      data: {
        'itemInfoID': itemInfoID,
        'itemName': itemName,
        'date': date,
        'weather': weather,
        'message': message,
        // 'image':image,
        // 'record':AudioSource,
        'recordName': recordName,
      },

      /*result為后端函式回傳的json*/
      success: function (resp) {
        console.log("success: ", resp);
      }
      , error: function (resp) {
        console.log("error:", resp);
      }
    });
  }

  // 點選Item 跳出 Info
  function modelInfo(itemInfoID) {
    console.log("【modelInfo】 itemInfoID: ", itemInfoID);
    // 按下儲存即可儲存嵌入模型的資訊
    $("#SaveBtn").click(function () { SaveItemInfo(itemInfoID) });
    $.ajax({
      url: '/getItemInfo',
      type: "POST",
      data: {
        'itemInfoID': itemInfoID
      },
      /*result為后端函式回傳的json*/
      success: function (resp) {
        // data = room.roomContent
        console.log("success: ", resp);
        // date -------------
        const IsoDate = new Date(resp.date)
        const DateStr = IsoDate.getFullYear() + "-" + (IsoDate.getMonth() + 1) + "-" + IsoDate.getDate()
        console.log("data: ", IsoDate)
        console.log("date type :", typeof (IsoDate))
        console.log("date type :", IsoDate.getFullYear())
        console.log("DataStr  :", DateStr)
        $("#date").val(DateStr)
        $("#message").val(resp.message)
        $("#weather").val(resp.weather)
        $("#image").attr("src", resp.imagePath)
        $("#image").attr("alt", resp.itemName)
        $("#exampleModalLabel").val(resp.itemName)

        // record Path
        console.log("resp.recordPath: ", resp.recordPath)
        $('#AudioSource').attr("src", resp.recordPath);
        var audio = $("#ItemInfoAudio");
        audio[0].pause();
        audio[0].load();//suspends and restores all audio element
      }
    });



  }
  // 顯示所有Board Message
  function AllBoardMsg(){
    var str = "";
    $.ajax({
      url: '/getMsgBoard',
      type: "GET",
      /*result為后端函式回傳的json*/
      success: function (resp) {
        // console.log("success: ", resp.data.result );
        // console.log("result: ", resp.result[0]);
        // console.log("result: ", resp.result.length);
        for(var i=0 ; i< resp.result.length;i++){
          var obj = resp.result[i];
          console.log(obj[0],obj[1])
          str += `<div class=\"panel panel-default col-xs-5\">`+
          `<div class=\"panel-heading\">From: ${obj[4]}</div>`+
          `<div class=\"panel-body\">`+
          `<div><label class="col-form-label">日期:</label><text id=\"boardDate\">${obj[1]}</text></div>`+
          `<div><label class="col-form-label">內容:</label><text id=\"boardContent\">${obj[2]}</text></div>`+
          `<div><label class="col-form-label">顏色:</label><text id=\"boardColor\">${obj[3]}</text></div>`+
          "</div></div>";
          console.log(str);
        }
        // const temp = resp.data.result;
        // cards = [];
        // console.log("cards", cards);
        // for (let i = 0; i < temp.length; i++) {
        //   cards.push(temp[i]);
        // }
        // console.log("cards", cards);
        var el = document.getElementById('AllMsgComment');
        el.innerHTML = str;
      }
    })
    // str += "</div>";
  }
  // 選擇物件時 
  function itemSelected(item) {
    console.log("============item==========", item);
    selectedItem = item;
    console.log("select!!!")
    console.log("log itemID in example.js line 147~~~~~", item.metadata.itemID);
    console.log("log itemName in example.js line 147~~~~~", item.metadata.itemName);
    console.log("log itemInfoID in example.js line 148~~~~~", item.metadata.itemInfoID);
    console.log("IsEditor: ", isEditor);
    $("#context-menu-name").text(item.metadata.itemName);


    $("#context-menu").show();
    // 模型沒有資訊而且身分為訪客: 看不到模型資訊以及按鈕
    $("#IntroOrMove").show();
    if (item.metadata.itemInfoID == 0 && isEditor == false) {
      $("#IntroOrMove").hide();
      console.log("no data");
    }
    // 模型有資訊
    else {
      console.log("info has data");
      $("#IntroOrMove").show();
    }
<<<<<<< HEAD
    // 當點選的物件為留言板時
     // 模型為留言板時
    if(item.metadata.itemName == "messageBoard"){ 
      AllBoardMsg();
      $("#boardInfo").show();
      console.log("boardInfo")
      $("#itemInfo").removeClass("col-xs-2").addClass("col-xs-4");
      $("#main").removeClass("col-xs-10").addClass("col-xs-8");
      if(isEditor == false){
        $("#context-menu").hide();
      }
    }
=======

>>>>>>> ca105411cebe7e4844185ddc09a6daeb10dea4f5
    $("#item-width").val(cmToIn(selectedItem.getWidth()).toFixed(0));
    $("#item-height").val(cmToIn(selectedItem.getHeight()).toFixed(0));
    $("#item-depth").val(cmToIn(selectedItem.getDepth()).toFixed(0));
    $("#fixed").prop('checked', item.fixed);
  }

  function resize() {
    selectedItem.resize(
      inToCm($("#item-height").val()),
      inToCm($("#item-width").val()),
      inToCm($("#item-depth").val())
    );
  }

  function initResize() {
    $("#item-height").change(resize);
    $("#item-width").change(resize);
    $("#item-depth").change(resize);
  }

  function itemUnselected() {
    selectedItem = null;
    $("#exampleIntro").hide();
    $("#IntroOrMove").hide();
    $("#context-menu").hide();
    // $("#boardInfo").hide();
  }

  // function logKey(element) {
  //   var x = element.screenX;
  //   var y = element.screenY;
  //   // // 這邊有個重點，當父元素被下了 position 屬性之後他就會變成 offsetParent，所以這邊我們用迴圈不斷往上累加。
  //   // element = element.offsetParent;
  //   document.getElementById("IntroOrMove").style.left = x+"px";
  //   document.getElementById("IntroOrMove").style.top = y+"px";
  // }

  init();
}

/*
 * Loading modal for items
 */

var ModalEffects = function (blueprint3d) {

  var scope = this;
  var blueprint3d = blueprint3d;
  var itemsLoading = 0;

  this.setActiveItem = function (active) {
    itemSelected = active;
    update();
  }

  function update() {
    if (itemsLoading > 0) {
      $("#loading-modal").show();
    } else {
      $("#loading-modal").hide();
    }
  }

  function init() {
    blueprint3d.model.scene.itemLoadingCallbacks.add(function () {
      itemsLoading += 1;
      update();
    });

    blueprint3d.model.scene.itemLoadedCallbacks.add(function () {
      itemsLoading -= 1;
      update();
    });

    update();
  }

  init();
}

/*
 * Side menu
 */
var SideMenu = function (blueprint3d, floorplanControls, modalEffects) {
  var blueprint3d = blueprint3d;
  var floorplanControls = floorplanControls;
  var modalEffects = modalEffects;

  var ACTIVE_CLASS = "active";

  var tabs = {
    "FLOORPLAN": $("#floorplan_tab"),
    "SHOP": $("#items_tab"),
    "DESIGN": $("#design_tab")
  }

  var scope = this;
  this.stateChangeCallbacks = $.Callbacks();

  this.states = {
    "DEFAULT": {
      "div": $("#viewer"),
      "tab": tabs.DESIGN
    },
    "FLOORPLAN": {
      "div": $("#floorplanner"),
      "tab": tabs.FLOORPLAN
    },
    "SHOP": {
      "div": $("#add-items"),
      "tab": tabs.SHOP
    }
  }

  // sidebar state
  var currentState = scope.states.FLOORPLAN;

  function init() {
    for (var tab in tabs) {
      var elem = tabs[tab];
      elem.click(tabClicked(elem));
    }

    $("#update-floorplan").click(floorplanUpdate);

    initLeftMenu();

    blueprint3d.three.updateWindowSize();
    handleWindowResize();

    initItems();

    setCurrentState(scope.states.DEFAULT);
    // upload model init
    initUploadModel();

  }

  function floorplanUpdate() {
    itemInfoShow();
    setCurrentState(scope.states.DEFAULT);
  }

  function tabClicked(tab) {
    return function () {
      // Stop three from spinning
      blueprint3d.three.stopSpin();
      // 關閉 sidebar
      closeNav();
      // Selected a new tab
      for (var key in scope.states) {
        var state = scope.states[key];
        if (state.tab == tab) {
          // 點擊新增模型就把左欄模型資訊隱藏起來
          if (tab[0] == $("#items_tab")[0]) {
            itemInfoHide();
          }
          setCurrentState(state);

          break;
        }
      }
    }
  }
  function setCurrentState(newState) {
    if (currentState == newState) {
      return;
    }

    // show the right tab as active
    if (currentState.tab !== newState.tab) {
      if (currentState.tab != null) {
        currentState.tab.removeClass(ACTIVE_CLASS);
      }
      if (newState.tab != null) {
        newState.tab.addClass(ACTIVE_CLASS);
      }
    }

    // set item unselected
    blueprint3d.three.getController().setSelectedObject(null);

    // show and hide the right divs
    currentState.div.hide()
    newState.div.show()

    // custom actions
    if (newState == scope.states.FLOORPLAN) {
      itemInfoHide();
      console.log("new state ==>", newState);
      floorplanControls.updateFloorplanView();
      floorplanControls.handleWindowResize();
    }

    if (currentState == scope.states.FLOORPLAN) {
      itemInfoHide();
      console.log("current State ==>", currentState);
      blueprint3d.model.floorplan.update();
    }

    if (newState == scope.states.DEFAULT) {
      blueprint3d.three.updateWindowSize();
      itemInfoShow();
    }

    // set new state
    handleWindowResize();
    currentState = newState;

    scope.stateChangeCallbacks.fire(newState);
  }

  function initLeftMenu() {
    $(window).resize(handleWindowResize);
    handleWindowResize();
  }

  function handleWindowResize() {
    $(".sidebar").height(window.innerHeight);
    $("#add-items").height(window.innerHeight);

  };

  // TODO: this doesn't really belong here
  function initItems() {
    $("#add-items").find(".add-item").mousedown(function (e) {
      alert($(this).attr("model-id"));
      var itemID = $(this).attr("model-id");
      var itemName = $(this).attr("model-name")
      var modelUrl = $(this).attr("model-url");
      var itemType = parseInt($(this).attr("model-type"));
      var itemInfoID = parseInt($(this).attr("itemInfo-id"));
      var metadata = {
        itemID: itemID,
        itemName: itemName,
        resizable: true,
        modelUrl: modelUrl,
        itemType: itemType,
        itemInfoID: itemInfoID
      }
      console.log("modelID", $(this).attr("model-id"));
      console.log("log itemInfoID in example.js line 374", metadata);
      console.log("【ClickTest】", metadata);
      blueprint3d.model.scene.addItem(itemType, modelUrl, metadata);
      setCurrentState(scope.states.DEFAULT);
    });
  }
  /* =======  upload model ======= */
  var textureContent, objContent, mtlContent, thumbnailContent;
  function uploadModel() {
    let thumbnail = $("#thumbnail")[0];
    let obj = $("#obj")[0];
    let mtl = $("#mtl")[0];
    let texture = $("#texture")[0];
    // 缺一個檔案 => 不可上傳
    if (texture.files.length == 0 || mtl.files.length == 0 || obj.files.length == 0 || thumbnail.files.length == 0) {
      alert("Please check all the files is upload.");
      return;
    }
    // 沒有選模型類型
    else if ($("input[name=modelType-radio]:checked").val() == undefined){
      alert("Please choose the type of model");
      return;
    }
    // 圖片處理
    alert("upload model");
    // obj and mtl 檔案移動並合併成 json
    $.ajax({
      url: '/upload',
      type: "POST",
      data: {
        'objName': obj.files[0].name,
        'mtlName': mtl.files[0].name,
        'thumbnail': thumbnailContent,
        'obj': objContent,
        'mtl': mtlContent,
        'texture': textureContent,
        'type': $("input[name=modelType-radio]:checked").val()
      },
      async: true, // 異步
      /*result為后端函式回傳的json*/
      success: function (item) {
        alert(item.result);
        if (item.result == "上傳成功") {
          var html = '<div class="col-sm-4" style="height:500px">' +
            '<a class="thumbnail add-item" itemInfo-id="' +
            0 +
            '"model-id ="' +
            item.id +
            '"model-name="' +
            item.name +
            '" model-url="' +
            item.model +
            '" model-type="' +
            item.type +
            '"><img src="' +
            item.image +
            '" alt="Add Item"> ' +
            item.name +
            `</a><button onclick = "deleteItem(${item.id})">delete</button></div>`;
          $("#items-wrapper").append(html);
          initItems();
        }
      }
    });
  }
  function initUploadModel(){
    $('#texture').change(function(){
      // handleTexture
      handleImage("#texture", "#canvasTexture")
        .then(success=>{
          textureContent = success;
        });
    });
    $('#obj').change(function(){
      // handleObj
      handleFile("#obj")
      .then(success=>{
        objContent = success;
      });
    });
    $('#mtl').change(function(){
      // handleMtl
      handleFile("#mtl")
      .then(success=>{
        mtlContent = success;
      });
    });
    $('#thumbnail').change(function(){
      // handleThumbnail);
      handleImage("#thumbnail", "#canvasAppearance")
      .then(success=>{
        thumbnailContent = success;
      });
    });
    $("#uploadBtn").click(uploadModel);
  }
  init();

}

/*
 * Change floor and wall textures
 */

var TextureSelector = function (blueprint3d, sideMenu) {

  var scope = this;
  var three = blueprint3d.three;
  var isAdmin = isAdmin;

  var currentTarget = null;

  function initTextureSelectors() {
    $(".texture-select-thumbnail").click(function (e) {
      var textureUrl = $(this).attr("texture-url");
      var textureStretch = ($(this).attr("texture-stretch") == "true");
      var textureScale = parseInt($(this).attr("texture-scale"));
      currentTarget.setTexture(textureUrl, textureStretch, textureScale);

      e.preventDefault();
    });
  }

  function init() {
    three.wallClicked.add(wallClicked);
    three.floorClicked.add(floorClicked);
    three.itemSelectedCallbacks.add(reset);
    three.nothingClicked.add(reset);
    sideMenu.stateChangeCallbacks.add(reset);
    initTextureSelectors();
  }

  function wallClicked(halfEdge) {
    currentTarget = halfEdge;
    $("#floorTexturesDiv").hide();
    $("#wallTextures").show();
  }

  function floorClicked(room) {
    currentTarget = room;
    $("#wallTextures").hide();
    $("#floorTexturesDiv").show();
  }

  function reset() {
    $("#wallTextures").hide();
    $("#floorTexturesDiv").hide();
  }

  init();
}

/*
 * Floorplanner controls
 */

var ViewerFloorplanner = function (blueprint3d) {

  var canvasWrapper = '#floorplanner';

  // buttons
  var move = '#move';
  var remove = '#delete';
  var draw = '#draw';

  var activeStlye = 'btn-primary disabled';

  this.floorplanner = blueprint3d.floorplanner;

  var scope = this;

  function init() {

    $(window).resize(scope.handleWindowResize);
    scope.handleWindowResize();

    // mode buttons
    scope.floorplanner.modeResetCallbacks.add(function (mode) {
      $(draw).removeClass(activeStlye);
      $(remove).removeClass(activeStlye);
      $(move).removeClass(activeStlye);
      if (mode == BP3D.Floorplanner.floorplannerModes.MOVE) {
        $(move).addClass(activeStlye);
      } else if (mode == BP3D.Floorplanner.floorplannerModes.DRAW) {
        $(draw).addClass(activeStlye);
      } else if (mode == BP3D.Floorplanner.floorplannerModes.DELETE) {
        $(remove).addClass(activeStlye);
      }

      if (mode == BP3D.Floorplanner.floorplannerModes.DRAW) {
        $("#draw-walls-hint").show();
        scope.handleWindowResize();
      } else {
        $("#draw-walls-hint").hide();
      }
    });

    $(move).click(function () {
      scope.floorplanner.setMode(BP3D.Floorplanner.floorplannerModes.MOVE);
    });

    $(draw).click(function () {
      scope.floorplanner.setMode(BP3D.Floorplanner.floorplannerModes.DRAW);
    });

    $(remove).click(function () {
      scope.floorplanner.setMode(BP3D.Floorplanner.floorplannerModes.DELETE);
    });
  }

  this.updateFloorplanView = function () {
    scope.floorplanner.reset();
  }

  this.handleWindowResize = function () {
    $(canvasWrapper).height(window.innerHeight - $(canvasWrapper).offset().top);
    scope.floorplanner.resizeView();
  };

  init();
}

// 上面 3 個按鈕: new、save、load
var mainControls = function (blueprint3d) {
  var blueprint3d = blueprint3d;
  console.log(blueprint3d);
  // function newDesign() {
  //   blueprint3d.model.loadSerialized('{"floorplan":{"corners":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":204.85099999999989,"y":289.052},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":672.2109999999999,"y":289.052},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":672.2109999999999,"y":-178.308},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":204.85099999999989,"y":-178.308}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"./static/blueprint/rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"./static/blueprint/rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"./static/blueprint/rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"./static/blueprint/rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"./static/blueprint/rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"./static/blueprint/rooms/textures/wallmap.png","stretch":true,"scale":0}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"./static/blueprint/rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"./static/blueprint/rooms/textures/wallmap.png","stretch":true,"scale":0}}],"wallTextures":[],"floorTextures":{},"newFloorTextures":{}},"items":[]}');
  // }

  function loadDesign() {
    files = $("#loadFile").get(0).files;
    var reader = new FileReader();
    reader.onload = function (event) {
      var data = event.target.result;
      console.log("type of data", typeof (data));
    }
    reader.readAsText(files[0]);
    console.log("-->", files);
    console.log("==>", reader);
  }

  function download() {
    var data = blueprint3d.model.exportSerialized();
    var a = window.document.createElement('a');
    var blob = new Blob([data], { type: 'text' });
    a.href = window.URL.createObjectURL(blob);
    a.download = 'design.blueprint3d';
    document.body.appendChild(a)
    a.click();
    document.body.removeChild(a)
  }
  // 存進 DB
  function saveRoomInDB() {
    var roomContent = blueprint3d.model.exportSerialized();
    console.log("roomContent", roomContent)
    var input = {
      'roomName': "testToSave",
      'roomContent': roomContent
    };
    // 跳出框框
    $.ajax({
      url: '/saveRoom',
      type: "POST",
      contentType: 'application/json',
      // FIXME: 以下資訊要從哪裡來
      data: JSON.stringify(input),
      // async: true, // 異步
      /*result為后端函式回傳的json*/
      success: function (result) {
        alert(result.result);
      },
      error: function () {
        alert(result.result);
      }
    });
}
function init() {
  // $("#new").click(newDesign);
  $("#loadFile").change(loadDesign);
  $("#download").click(download);
  $("#saveRoom").click(saveRoomInDB);
}

init();
}

// =====================
// upload recoding test
// =====================
var uploadRecordingInit = function () {
  async function handleRecording() {
    const reader = new FileReader();//建立FileReader物件
    // 使用 readAsDataURL 將圖片轉成 Base64
    reader.readAsDataURL($('#recording')[0].files[0]);
    reader.onload = function (e) {
      recordingContent = e.target.result;
      alert(recordingContent);
      uploadRecording();
    };
  }
  function uploadRecording() {
    // obj and mtl 檔案移動並合併成 json
    $.ajax({
      url: '/saveItemInfo',
      type: "POST",
      data: {
        'recording': recordingContent,
      },
      async: true, // 異步
      /*result為后端函式回傳的json*/
      success: function (item) {
        alert(item.result);
        if (item.result == "上傳成功") {

        }
      }
    });
  }
  function init() {
    $('#recording').change(handleRecording);
  }
  init();
}
/*
 * Initialize!
 */
//全域變數: 是不是房主
var isEditor;
$(document).ready(function () {

  // main setup
  var opts = {
    floorplannerElement: 'floorplanner-canvas',
    threeElement: '#viewer',
    threeCanvasElement: 'three-canvas',
    textureDir: "./static/blueprint/models/textures/",
    widget: false
  }
  var blueprint3d = new BP3D.Blueprint3d(opts);
  var modalEffects = new ModalEffects(blueprint3d);
  var viewerFloorplanner = new ViewerFloorplanner(blueprint3d);
  var contextMenu = new ContextMenu(blueprint3d);
  var sideMenu = new SideMenu(blueprint3d, viewerFloorplanner, modalEffects);
  var cameraButtons = new CameraButtons(blueprint3d);

  mainControls(blueprint3d);
  uploadRecordingInit();
  // 依據使用者的選擇的房間載入
  $.ajax({
    url: '/loadRoom',
    type: "GET",
    data: {},
    /*result為后端函式回傳的json*/
    success: function (room) {
      let data = room.roomContent  // 房間內容的 json
      isEditor = room.isEditor // 是否為房間編輯者
      console.log("isEditor_success", isEditor)
      // 訪客只能瀏覽房間，不可寫也不可移動家具
      if (isEditor == false) {
        data = data.replace(/false/gi, "true");
        $("#check").prop("checked", true);
        $("#fixed").hide();
        $("input").attr("readonly", "readonly")
        $("textarea").attr("readonly", "readonly")
        $("#context-menu-delete").hide();
        $("#main-controls").hide();
        $("#add-items").hide();
        // ItemInfo物件資訊的儲存按鈕
        $("#SaveBtn").hide();
        // sidebar 新增模型連結
        $("#items_tab").hide();
        // $("#SaveBtn").hide();
        // ("#fixed").attr('style','display:none;'); 
      }
      // 只有房主可以編輯地板和牆面的材質
      else{
        var textureSelector = new TextureSelector(blueprint3d, sideMenu);

      }

      // data = '{"floorplan": {"corners": {"56d9ebd1-91b2-875c-799d-54b3785fca1f": {"x": 630.555,"y": -227.58400000000006},"8f4a050d-e102-3c3f-5af9-3d9133555d76": {"x": 294.64,"y": -227.58400000000006},"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359": {"x": 294.64,"y": 232.664},"254656bf-8a53-3987-c810-66b349f49b19": {"x": 745.7439999999998,"y": 232.664},"11d25193-4411-fbbf-78cb-ae7c0283164b": {"x": 1044.7019999999998,"y": 232.664},"edf0de13-df9f-cd6a-7d11-9bd13c36ce12": {"x": 1044.7019999999998,"y": -105.66399999999999},"e7db8654-efe1-bda2-099a-70585874d8c0": {"x": 745.7439999999998,"y": -105.66399999999999}},"walls": [{"corner1": "4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","corner2": "254656bf-8a53-3987-c810-66b349f49b19","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap_yellow.png","stretch": true,"scale": null}},{"corner1": "254656bf-8a53-3987-c810-66b349f49b19","corner2": "e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap_yellow.png","stretch": true,"scale": null}},{"corner1": "56d9ebd1-91b2-875c-799d-54b3785fca1f","corner2": "8f4a050d-e102-3c3f-5af9-3d9133555d76","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap_yellow.png","stretch": true,"scale": null}},{"corner1": "8f4a050d-e102-3c3f-5af9-3d9133555d76","corner2": "4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap_yellow.png","stretch": true,"scale": null}},{"corner1": "254656bf-8a53-3987-c810-66b349f49b19","corner2": "11d25193-4411-fbbf-78cb-ae7c0283164b","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0}},{"corner1": "11d25193-4411-fbbf-78cb-ae7c0283164b","corner2": "edf0de13-df9f-cd6a-7d11-9bd13c36ce12","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/light_brick.jpg","stretch": false,"scale": 100}},{"corner1": "edf0de13-df9f-cd6a-7d11-9bd13c36ce12","corner2": "e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0}},{"corner1": "e7db8654-efe1-bda2-099a-70585874d8c0","corner2": "56d9ebd1-91b2-875c-799d-54b3785fca1f","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap_yellow.png","stretch": true,"scale": null}}],"wallTextures": [],"floorTextures": {},"newFloorTextures": {"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12": {"url": "./static/blueprint/rooms/textures/light_fine_wood.jpg","scale": 300}}},"items": [{"item_name": "Full Bed","item_type": 1,"model_url": "./static/blueprint/models/js/ik_nordli_full.js","xpos": 939.5525544513545,"ypos": 50,"zpos": -15.988409993966997,"rotation": -1.5707963267948966,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Bedside table - White","item_type": 1,"model_url": "./static/blueprint/models/js/cb-archnight-white_baked.js","xpos": 1001.0862865204286,"ypos": 31.15939942141,"zpos": 86.4297300551338,"rotation": -0.7872847644705953,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Open Door","item_type": 7,"model_url": "./static/blueprint/models/js/open_door.js","xpos": 745.2440185546875,"ypos": 110.5,"zpos": 64.8291839065202,"rotation": -1.5707963267948966,"scale_x": 1.7003089598352215,"scale_y": 0.997292171703541,"scale_z": 0.999415040540576,"fixed": false},{"item_name": "Window","item_type": 3,"model_url": "./static/blueprint/models/js/whitewindow.js","xpos": 886.8841174461031,"ypos": 139.1510114697785,"zpos": -105.16400146484375,"rotation": 0,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Dresser - White","item_type": 1,"model_url": "./static/blueprint/models/js/we-narrow6white_baked.js","xpos": 898.0548281668393,"ypos": 35.611997646165,"zpos": 201.10860458067486,"rotation": -3.141592653589793,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Window","item_type": 3,"model_url": "./static/blueprint/models/js/whitewindow.js","xpos": 534.9620937975317,"ypos": 137.60931398864443,"zpos": -227.08399963378906,"rotation": 0,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Window","item_type": 3,"model_url": "./static/blueprint/models/js/whitewindow.js","xpos": 295.1400146484375,"ypos": 141.43383044055196,"zpos": 123.2280598724867,"rotation": 1.5707963267948966,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Media Console - White","item_type": 1,"model_url": "./static/blueprint/models/js/cb-clapboard_baked.js","xpos": 658.6568227980731,"ypos": 67.88999754395999,"zpos": -141.50237235990153,"rotation": -0.8154064090423808,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Blue Rug","item_type": 8,"model_url": "./static/blueprint/models/js/cb-blue-block-60x96.js","xpos": 905.8690190229256,"ypos": 0.250005,"zpos": 44.59927303228528,"rotation": -1.5707963267948966,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Sofa - Grey","item_type": 1,"model_url": "./static/blueprint/models/js/cb-rochelle-gray_baked.js","xpos": 356.92671999154373,"ypos": 42.54509923821,"zpos": -21.686174295784554,"rotation": 1.5707963267948966,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Floor Lamp","item_type": 1,"model_url": "./static/blueprint/models/js/ore-3legged-white_baked.js","xpos": 346.697102333121,"ypos": 72.163997943445,"zpos": -175.19915302127583,"rotation": 0,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Red Chair","item_type": 1,"model_url": "./static/blueprint/models/js/ik-ekero-orange_baked.js","xpos": 397.676038151142,"ypos": 37.50235073007,"zpos": 156.31701312594373,"rotation": 2.4062972386507093,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Window","item_type": 3,"model_url": "./static/blueprint/models/js/whitewindow.js","xpos": 374.7738207971076,"ypos": 138.62749831597068,"zpos": -227.08399963378906,"rotation": 0,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Closed Door","item_type": 7,"model_url": "./static/blueprint/models/js/closed-door28x80_baked.js","xpos": 637.2176377788675,"ypos": 110.80000022010701,"zpos": 232.16400146484375,"rotation": 3.141592653589793,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false},{"item_name": "Bookshelf","item_type": 1,"model_url": "./static/blueprint/models/js/cb-kendallbookcasewalnut_baked.js","xpos": 533.1460416453955,"ypos": 92.17650034119151,"zpos": 207.7644213268835,"rotation": 3.141592653589793,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false}]}'
      // data = '{"floorplan": {"corners": {"56d9ebd1-91b2-875c-799d-54b3785fca1f": {"x": 630.555,"y": -227.58400000000006},"8f4a050d-e102-3c3f-5af9-3d9133555d76": {"x": 294.64,"y": -227.58400000000006},"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359": {"x": 294.64,"y": 232.664},"254656bf-8a53-3987-c810-66b349f49b19": {"x": 745.7439999999998,"y": 232.664},"11d25193-4411-fbbf-78cb-ae7c0283164b": {"x": 1044.7019999999998,"y": 232.664},"edf0de13-df9f-cd6a-7d11-9bd13c36ce12": {"x": 1044.7019999999998,"y": -105.66399999999999},"e7db8654-efe1-bda2-099a-70585874d8c0": {"x": 745.7439999999998,"y": -105.66399999999999}},"walls": [{"corner1": "4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","corner2": "254656bf-8a53-3987-c810-66b349f49b19","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap_yellow.png","stretch": true,"scale": null}},{"corner1": "254656bf-8a53-3987-c810-66b349f49b19","corner2": "e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap_yellow.png","stretch": true,"scale": null}},{"corner1": "56d9ebd1-91b2-875c-799d-54b3785fca1f","corner2": "8f4a050d-e102-3c3f-5af9-3d9133555d76","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap_yellow.png","stretch": true,"scale": null}},{"corner1": "8f4a050d-e102-3c3f-5af9-3d9133555d76","corner2": "4e312eca-6c4f-30d1-3d9a-a19a9d1ee359","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap_yellow.png","stretch": true,"scale": null}},{"corner1": "254656bf-8a53-3987-c810-66b349f49b19","corner2": "11d25193-4411-fbbf-78cb-ae7c0283164b","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0}},{"corner1": "11d25193-4411-fbbf-78cb-ae7c0283164b","corner2": "edf0de13-df9f-cd6a-7d11-9bd13c36ce12","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/light_brick.jpg","stretch": false,"scale": 100}},{"corner1": "edf0de13-df9f-cd6a-7d11-9bd13c36ce12","corner2": "e7db8654-efe1-bda2-099a-70585874d8c0","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0}},{"corner1": "e7db8654-efe1-bda2-099a-70585874d8c0","corner2": "56d9ebd1-91b2-875c-799d-54b3785fca1f","frontTexture": {"url": "./static/blueprint/rooms/textures/wallmap.png","stretch": true,"scale": 0},"backTexture": {"url": "./static/blueprint/rooms/textures/wallmap_yellow.png","stretch": true,"scale": null}}],"wallTextures": [],"floorTextures": {},"newFloorTextures": {"11d25193-4411-fbbf-78cb-ae7c0283164b,254656bf-8a53-3987-c810-66b349f49b19,e7db8654-efe1-bda2-099a-70585874d8c0,edf0de13-df9f-cd6a-7d11-9bd13c36ce12": {"url": "./static/blueprint/rooms/textures/light_fine_wood.jpg","scale": 300}}},"items": [{"item_id":10,"item_name": "Bedside table - White","item_type": 1,"model_url": "./static/blueprint/models/js/cb-archnight-white_baked.js","xpos": 1001.0862865204286,"ypos": 31.15939942141,"zpos": 86.4297300551338,"rotation": -0.7872847644705953,"scale_x": 1,"scale_y": 1,"scale_z": 1,"fixed": false}]}'
      // This serialization format needs work
      // Load a simple rectangle room
      blueprint3d.model.loadSerialized(data);
    }
  });
});

// model list
var items;
$(document).ready(function () {
  $.ajax({
    url: '/getItem',
    type: "POST",
    data: {},
    async: false,
    /*result為后端函式回傳的json*/
    success: function (result) {
      items = result.itemsInfo
      initItemList(items);
    },
    error: function(error){
      alert("您現在的身分為訪客");
    }
  });
  // $('#deleteItemBtn').click(deleteItem(item.metadata.itemID));
  // items = [
  //     {
  //     "name": "Closed Door",
  //     "image": "./static/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
  //     "model": "./static/models/js/closed-door28x80_baked.js",
  //     "type": "7"
  //   },
  //   {
  //     "name": "Open Door",
  //     "image": "./static/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
  //     "model": "./static/models/js/open_door.js",
  //     "type": "7"
  //   },
  //   {
  //       "name": "Window",
  //     "image": "./static/models/thumbnails/thumbnail_window.png",
  //     "model": "./static/models/js/whitewindow.js",
  //     "type": "3"
  //   },
  //   {
  //     "name": "Chair",
  //     "image": "./static/models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
  //     "model": "./static/models/js/gus-churchchair-whiteoak.js",
  //     "type": "1"
  //   },
  //   {
  //       "name": "Red Chair",
  //       "image": "./static/models/thumbnails/thumbnail_tn-orange.png",
  //     "model": "./static/models/js/ik-ekero-orange_baked.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Blue Chair",
  //     "image": "./static/models/thumbnails/thumbnail_ekero-blue3.png",
  //     "model": "./static/models/js/ik-ekero-blue_baked.js",
  //     "type": "1"
  //   },
  //   {
  //       "name": "Dresser - Dark Wood",
  //       "image": "./static/models/thumbnails/thumbnail_matera_dresser_5.png",
  //       "model": "./static/models/js/DWR_MATERA_DRESSER2.js",
  //       "type": "1"
  //     },
  //     {
  //         "name": "Dresser - White",
  //     "image": "./static/models/thumbnails/thumbnail_img25o.jpg",
  //     "model": "./static/models/js/we-narrow6white_baked.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Bedside table - Shale",
  //     "image": "./static/models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
  //     "model": "./static/models/js/bd-shalebedside-smoke_baked.js",
  //     "type": "1"
  //   },
  //   {
  //       "name": "Bedside table - White",
  //     "image": "./static/models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
  //     "model": "./static/models/js/cb-archnight-white_baked.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Wardrobe - White",
  //     "image": "./static/models/thumbnails/thumbnail_TN-ikea-kvikine.png",
  //     "model": "./static/models/js/ik-kivine_baked.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Full Bed",
  //     "image": "./static/models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
  //     "model": "./static/models/js/ik_nordli_full.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Bookshelf",
  //     "image": "./static/models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
  //     "model": "./static/models/js/cb-kendallbookcasewalnut_baked.js",
  //     "type": "1"
  //   },
  //   {
  //       "name": "Media Console - White",
  //     "image": "./static/models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
  //     "model": "./static/models/js/cb-clapboard_baked.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Media Console - Black",
  //     "image": "./static/models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
  //     "model": "./static/models/js/cb-moore_baked.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Sectional - Olive",
  //     "image": "./static/models/thumbnails/thumbnail_img21o.jpg",
  //     "model": "./static/models/js/we-crosby2piece-greenbaked.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Sofa - Grey",
  //     "image": "./static/models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
  //     "model": "./static/models/js/cb-rochelle-gray_baked.js",
  //     "type": "1"
  //   },
  //   {
  //       "name": "Wooden Trunk",
  //     "image": "./static/models/thumbnails/thumbnail_teca-storage-trunk.jpg",
  //     "model": "./static/models/js/cb-tecs_baked.js",
  //     "type": "1"
  //   },
  //   {
  //       "name": "Floor Lamp",
  //     "image": "./static/models/thumbnails/thumbnail_ore-white.png",
  //     "model": "./static/models/js/ore-3legged-white_baked.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Coffee Table - Wood",
  //     "image": "./static/models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
  //     "model": "./static/models/js/ik-stockholmcoffee-brown.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Side Table",
  //     "image": "./static/models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
  //     "model": "./static/models/js/GUSossingtonendtable.js",
  //     "type": "1"
  //   },
  //   {
  //       "name": "Dining Table",
  //     "image": "./static/models/thumbnails/thumbnail_scholar-dining-table.jpg",
  //     "model": "./static/models/js/cb-scholartable_baked.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Dining table",
  //     "image": "./static/models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
  //     "model": "./static/models/js/BlakeAvenuejoshuatreecheftable.js",
  //     "type": "1"
  //   },
  //   {
  //     "name": "Blue Rug",
  //     "image": "./static/models/thumbnails/thumbnail_cb-blue-block60x96.png",
  //     "model": "./static/models/js/cb-blue-block-60x96.js",
  //     "type": "8"
  //   },
  //   {
  //     "name": "NYC Poster",
  //     "image": "./static/models/thumbnails/thumbnail_nyc2.jpg",
  //     "model": "./static/models/js/nyc-poster2.js",
  //     "type": "2"
  //   }
  // ]
  // initItemList(items);
});
function initItemList(items) {
  var itemsDiv = $("#items-wrapper")
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var html = '<div class="col-sm-4" style="height:500px">' +
      '<a class="thumbnail add-item" itemInfo-id="'+
      0+
      '"model-id ="'+
      item.id+
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
    itemsDiv.append(html);
    // console.log(html);
  }
}
// 刪除模型
function deleteItem(itemID){
  $.ajax({
    url: '/deleteItem',
    type: "POST",
    data: {
        'itemID':itemID
    },
    /*result為后端函式回傳的json*/
    success: function (resp) {
      alert(resp.result)
    }
  });
}


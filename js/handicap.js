/** 
 * 関数の定義
 */

const makeCanvas = function(fileName, canvasId) {
  // 画像の定義
  var image = new Image()
  image.src = fileName

  image.onload = function() {
    // 画像サイズ取得
    var imageWidth = image.width
    var imageHeight = image.height

    // canvasの定義
    var canvas = document.getElementById(canvasId)
    var context = canvas.getContext("2d")
    // canvasサイズの定義(CANVAS_HEIGHTを基に設定している)
    var canvasHeight = CANVAS_HEIGHT
    var canvasWidth = CANVAS_HEIGHT*imageWidth/imageHeight
    canvas.height = canvasHeight
    canvas.width = canvasWidth

    // 画像の描画
    context.drawImage(image, 0, 0, canvasWidth, canvasHeight)
  }
}

const changeMonochrome = function() {
    //   // // 白黒にする処理
  //   // for (var i = 0; i < src.data.length; i = i + 4) {
  //   //   var pixel = (src.data[i] + src.data[i + 1] + src.data[i + 2]) / 3;
  //   //   dst.data[i] = pixel //Red
  //   //   dst.data[i + 1] = pixel //Green
  //   //   dst.data[i + 2] = pixel //Blue
  //   //   dst.data[i + 3] = src.data[i + 3]; //Alpha(0 -> clear)
  //   // }
}
(function solarizedPalette () {
  var colorPalette = document.getElementsByClassName('color-palette__buttons')
  var inputColor = document.getElementsByClassName('input-color')
  var colorPicker = document.getElementsByClassName('color-picker')
  var hexOutput = document.getElementsByClassName('hex-output')
  var rgbOutput = document.getElementsByClassName('rgb-output')
  var previewHalf = document.getElementsByClassName('second-half')

  // For each palette.
  for (var i = 0; i < colorPalette.length; i++) {
    // For each of the buttons in each palette.
    for (var j = 0; j < colorPalette[i].children.length; j++) {
      colorPalette[i].children[j].style.backgroundColor = FIRST_COLOR_PALETTE[j].backgroundColor
      colorPalette[i].children[j].setAttribute('title', FIRST_COLOR_PALETTE[j].colorName);
      (function (i, j) {
        colorPalette[i].children[j].addEventListener('click', function () {
          var paletteButtonColor = rgbFullToHex(colorPalette[i].children[j].style.backgroundColor)
          inputColor[i].value = paletteButtonColor
          colorPicker[i].value = paletteButtonColor
          hexOutput[i].innerHTML = paletteButtonColor
          rgbOutput[i].innerHTML = 'rgb(' + hexToRgb(paletteButtonColor).r.toString() + ', ' +
          hexToRgb(paletteButtonColor).g.toString() + ', ' +
          hexToRgb(paletteButtonColor).b.toString() + ')'
          previewHalf[i].style.backgroundColor = paletteButtonColor
        })
      })(i, j)
    }
  }
})();

(function newPalette () {
  var colorPalette = document.querySelectorAll('.new .color-palette__buttons')
  var inputColor = document.querySelectorAll('.new .input-color')
  var colorPicker = document.querySelectorAll('.new .color-picker')
  var hexOutput = document.querySelectorAll('.new .hex-output')
  var rgbOutput = document.querySelectorAll('.new .rgb-output')
  var previewHalf = document.querySelectorAll('.new .second-half')

  // For each palette.
  for (var i = 0; i < colorPalette.length; i++) {
    // For each of the buttons in each palette.
    for (var j = 0; j < colorPalette[i].children.length; j++) {
      colorPalette[i].children[j].style.backgroundColor = SECOND_COLOR_PALETTE[j].backgroundColor
      colorPalette[i].children[j].setAttribute('title', SECOND_COLOR_PALETTE[j].colorName);
      (function (i, j) {
        colorPalette[i].children[j].addEventListener('click', function () {
          var paletteButtonColor = rgbFullToHex(colorPalette[i].children[j].style.backgroundColor)
          inputColor[i].value = paletteButtonColor
          colorPicker[i].value = paletteButtonColor
          hexOutput[i].innerHTML = paletteButtonColor
          rgbOutput[i].innerHTML = 'rgb(' + hexToRgb(paletteButtonColor).r.toString() + ', ' +
          hexToRgb(paletteButtonColor).g.toString() + ', ' +
          hexToRgb(paletteButtonColor).b.toString() + ')'
          previewHalf[i].style.backgroundColor = paletteButtonColor
        })
      })(i, j)
    }
  }
})();

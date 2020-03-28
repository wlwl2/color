// Hex input will be the source of all truth for the color displayed.

function colorPickerFunction () {
  var inputColor = document.getElementsByClassName('input-color')
  var colorPicker = document.getElementsByClassName('color-picker')
  var hexOutput = document.getElementsByClassName('hex-output')
  var rgbOutput = document.getElementsByClassName('rgb-output')
  var previewHalf = document.getElementsByClassName('second-half')
  
  for (var i = 0; i < inputColor.length; i++){
    (function (i) {
      previewHalf[i].style.backgroundColor = colorPicker[i].value
      inputColor[i].value = colorPicker[i].value
      inputColor[i].addEventListener("change", function () {

        inputColor[i].value = inputColor[i].value.trim()

        // If 3 digit hex entered, make into 6 digit hex
        if (inputColor[i].value.search(/^#[0-9A-Fa-f]{3}$/) !== -1) {
          var firstCharacter = inputColor[i].value.charAt(1)
          var secondCharacter = inputColor[i].value.charAt(2)
          var thirdCharacter = inputColor[i].value.charAt(3)
          
          inputColor[i].value = "#" + 
          firstCharacter + firstCharacter + 
          secondCharacter + secondCharacter + 
          thirdCharacter + thirdCharacter
          
          colorPicker[i].value = inputColor[i].value
          hexOutput[i].innerHTML = inputColor[i].value
          
          rgbOutput[i].innerHTML = "rgb(" + 
          hexToRgb(inputColor[i].value).r.toString() + ", " +
          hexToRgb(inputColor[i].value).g.toString() + ", " +
          hexToRgb(inputColor[i].value).b.toString() + ")"
          
        } else if (
          // RGB validation
          // Format 1: RGB(111, 50, 121) or rgb(111, 50, 121).
          (((inputColor[i].value.search(/[R][G][B][(]/) !== -1) || 
          (inputColor[i].value.search(/[r][g][b][(]/) !== -1)) &&                    
          inputColor[i].value.match(/\d,/g).length === 2 && 
          inputColor[i].value.search(/[)]/) !== -1) ||
          // Format 2: RGB (111, 50, 121) or rgb (111, 50, 121).
          (((inputColor[i].value.search(/[R][G][B]\s[(]/) !== -1) || 
          (inputColor[i].value.search(/[r][g][b]\s[(]/) !== -1)) &&                    inputColor[i].value.match(/\d,/g).length === 2 &&                    
          inputColor[i].value.search(/[)]/) !== -1)
        ) {
          rgbOutput[i].innerHTML = inputColor[i].value
          var regExp = /\(([^)]+)\)/
          var rgbList = regExp.exec(inputColor[i].value)[1].split(",")
          var red = Number(rgbList[0])
          var green = Number(rgbList[1])
          var blue = Number(rgbList[2])
          hexOutput[i].innerHTML = rgbToHex(red, green, blue)
          colorPicker[i].value = hexOutput[i].innerHTML
        } else if (
          inputColor[i].value.search(/^#[0-9A-Fa-f]{6}$/) !== -1 && 
          inputColor[i].value.length === 7
        ) {
          // 6 digit hex
          colorPicker[i].value = inputColor[i].value
          hexOutput[i].innerHTML = inputColor[i].value
          
          rgbOutput[i].innerHTML = "rgb(" + 
          hexToRgb(inputColor[i].value).r.toString() + ", " +
          hexToRgb(inputColor[i].value).g.toString() + ", " +
          hexToRgb(inputColor[i].value).b.toString() + ")"
          
        } else if (
          inputColor[i].value.search(/[0-9A-Fa-f]{6}/) !== -1 && 
          inputColor[i].value.length === 6
        ) {
          // 6 digit hex WITH NO hash
          inputColor[i].value = '#' + inputColor[i].value
          colorPicker[i].value = inputColor[i].value
          hexOutput[i].innerHTML = inputColor[i].value
          
          rgbOutput[i].innerHTML = "rgb(" + 
          hexToRgb(inputColor[i].value).r.toString() + ", " +
          hexToRgb(inputColor[i].value).g.toString() + ", " +
          hexToRgb(inputColor[i].value).b.toString() + ")"
        } else {
          // Not accepted formats:
          hexOutput[i].innerHTML = 
            "Please enter a valid color in hex or rgb format!"
          rgbOutput[i].innerHTML = 
            "Please enter a valid color in hex or rgb format!"
        }
        hexOutput[i].innerHTML = hexOutput[i].innerHTML.trim()
        rgbOutput[i].innerHTML = rgbOutput[i].innerHTML.trim()

        previewHalf[i].style.backgroundColor = colorPicker[i].value
      })

      colorPicker[i].addEventListener("change", function () {
        inputColor[i].value = colorPicker[i].value
        hexOutput[i].innerHTML = inputColor[i].value
        rgbOutput[i].innerHTML = "rgb(" + 
        hexToRgb(inputColor[i].value).r.toString() + ", " +
        hexToRgb(inputColor[i].value).g.toString() + ", " +
        hexToRgb(inputColor[i].value).b.toString() + ")"
        previewHalf[i].style.backgroundColor = colorPicker[i].value
      })

    })(i)
  }
}
colorPickerFunction()

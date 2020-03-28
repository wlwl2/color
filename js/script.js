// Hex input will be the source of all truth for the color displayed.
function colorPickerFunction () {
  var inputColor = document.getElementsByClassName('input-color')
  var colorPicker = document.getElementsByClassName('color-picker')
  var hexOutput = document.getElementsByClassName('hex-output')
  var rgbOutput = document.getElementsByClassName('rgb-output')
  var previewHalf = document.getElementsByClassName('second-half')
  
  function eachColorPicker (index) {
    previewHalf[index].style.backgroundColor = colorPicker[index].value
    inputColor[index].value = colorPicker[index].value
    
    inputColor[index].addEventListener("change", function () {
      inputColor[index].value = inputColor[index].value.trim()

      // If 3 digit hex entered, make into 6 digit hex
      if (inputColor[index].value.search(/^#[0-9A-Fa-f]{3}$/) !== -1) {
        var firstCharacter = inputColor[index].value.charAt(1)
        var secondCharacter = inputColor[index].value.charAt(2)
        var thirdCharacter = inputColor[index].value.charAt(3)
        
        inputColor[index].value = "#" + 
        firstCharacter + firstCharacter + 
        secondCharacter + secondCharacter + 
        thirdCharacter + thirdCharacter
        
        colorPicker[index].value = inputColor[index].value
        hexOutput[index].innerHTML = inputColor[index].value
        
        rgbOutput[index].innerHTML = "rgb(" + 
        hexToRgb(inputColor[index].value).r.toString() + ", " +
        hexToRgb(inputColor[index].value).g.toString() + ", " +
        hexToRgb(inputColor[index].value).b.toString() + ")"
        
      } else if (
        // RGB validation
        // Format 1: RGB(111, 50, 121) or rgb(111, 50, 121).
        (((inputColor[index].value.search(/[R][G][B][(]/) !== -1) || 
        (inputColor[index].value.search(/[r][g][b][(]/) !== -1)) &&                    
        inputColor[index].value.match(/\d,/g).length === 2 && 
        inputColor[index].value.search(/[)]/) !== -1) ||
        // Format 2: RGB (111, 50, 121) or rgb (111, 50, 121).
        (((inputColor[index].value.search(/[R][G][B]\s[(]/) !== -1) || 
        (inputColor[index].value.search(/[r][g][b]\s[(]/) !== -1)) &&                    inputColor[index].value.match(/\d,/g).length === 2 &&                    
        inputColor[index].value.search(/[)]/) !== -1)
      ) {
        rgbOutput[index].innerHTML = inputColor[index].value
        var regExp = /\(([^)]+)\)/
        var rgbList = regExp.exec(inputColor[index].value)[1].split(",")
        var red = Number(rgbList[0])
        var green = Number(rgbList[1])
        var blue = Number(rgbList[2])
        hexOutput[index].innerHTML = rgbToHex(red, green, blue)
        colorPicker[index].value = hexOutput[index].innerHTML
      } else if (
        inputColor[index].value.search(/^#[0-9A-Fa-f]{6}$/) !== -1 && 
        inputColor[index].value.length === 7
      ) {
        // 6 digit hex
        colorPicker[index].value = inputColor[index].value
        hexOutput[index].innerHTML = inputColor[index].value
        
        rgbOutput[index].innerHTML = "rgb(" + 
        hexToRgb(inputColor[index].value).r.toString() + ", " +
        hexToRgb(inputColor[index].value).g.toString() + ", " +
        hexToRgb(inputColor[index].value).b.toString() + ")"
        
      } else if (
        inputColor[index].value.search(/[0-9A-Fa-f]{6}/) !== -1 && 
        inputColor[index].value.length === 6
      ) {
        // 6 digit hex WITH NO hash
        inputColor[index].value = '#' + inputColor[index].value
        colorPicker[index].value = inputColor[index].value
        hexOutput[index].innerHTML = inputColor[index].value
        
        rgbOutput[index].innerHTML = "rgb(" + 
        hexToRgb(inputColor[index].value).r.toString() + ", " +
        hexToRgb(inputColor[index].value).g.toString() + ", " +
        hexToRgb(inputColor[index].value).b.toString() + ")"
      } else {
        // Not accepted formats:
        hexOutput[index].innerHTML = 
          "Please enter a valid color in hex or rgb format!"
        rgbOutput[index].innerHTML = 
          "Please enter a valid color in hex or rgb format!"
      }
      hexOutput[index].innerHTML = hexOutput[index].innerHTML.trim()
      rgbOutput[index].innerHTML = rgbOutput[index].innerHTML.trim()

      previewHalf[index].style.backgroundColor = colorPicker[index].value
    })

    colorPicker[index].addEventListener("change", function () {
      inputColor[index].value = colorPicker[index].value
      hexOutput[index].innerHTML = inputColor[index].value
      rgbOutput[index].innerHTML = "rgb(" + 
      hexToRgb(inputColor[index].value).r.toString() + ", " +
      hexToRgb(inputColor[index].value).g.toString() + ", " +
      hexToRgb(inputColor[index].value).b.toString() + ")"
      previewHalf[index].style.backgroundColor = colorPicker[index].value
    })
  }
  
  for (var i = 0; i < inputColor.length; i++){
    eachColorPicker(i)
  }
}
colorPickerFunction()

var inputColor = document.querySelector(".input-color");
var colorPicker = document.querySelector(".color-picker");

inputColor.value = colorPicker.value;

function rgbToHex(r, g, b) {
  function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

inputColor.addEventListener("change", function() {
  // if 3 digit hex entered, make into 6 digit hex
  if (inputColor.value.search(/^#...$/) !== -1) {
    var firstCharacter = inputColor.value.charAt(1);
    var secondCharacter = inputColor.value.charAt(2);
    var thirdCharacter = inputColor.value.charAt(3);
    inputColor.value = "#" + firstCharacter + firstCharacter + secondCharacter +
    secondCharacter + thirdCharacter + thirdCharacter;
  }

  // format example: rgb(111, 50, 121)
  if (inputColor.value.search(/^[r][g][b][(]/) !== -1 &&
      inputColor.value.match(/\d,/g).length === 2 &&
      inputColor.value.search(/[)]/) !== -1)
  {
    document.querySelector(".rgb-output").innerHTML = inputColor.value;
    var regExp = /\(([^)]+)\)/;
    var rgbList = regExp.exec(inputColor.value)[1].split(",");
    var red = Number(rgbList[0]);
    var green = Number(rgbList[1]);
    var blue = Number(rgbList[2]);
    inputColor.value = rgbToHex(red, green, blue);
    document.querySelector(".hex-output").innerHTML = rgbToHex(red, green, blue);
  }
  colorPicker.value = inputColor.value;
})

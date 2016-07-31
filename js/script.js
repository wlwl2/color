var inputColor = document.querySelector(".input-color");
var colorPicker = document.querySelector(".color-picker");
var hexOutput = document.querySelector(".hex-output");
var rgbOutput = document.querySelector(".rgb-output");

inputColor.value = colorPicker.value;

//RGB to hex conversion and add any required zero padding
function rgbToHex(r, g, b) {
  function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

/*function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}*/

// Here's a version of hexToRgb() that also parses a shorthand hex triplet such as "#03F"
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

inputColor.addEventListener("change", function() {
  inputColor.value = inputColor.value.trim();
  // if 3 digit hex entered, make into 6 digit hex
  if (inputColor.value.search(/^#...$/) !== -1) {
    var firstCharacter = inputColor.value.charAt(1);
    var secondCharacter = inputColor.value.charAt(2);
    var thirdCharacter = inputColor.value.charAt(3);
    inputColor.value = "#" + firstCharacter + firstCharacter + secondCharacter +
    secondCharacter + thirdCharacter + thirdCharacter;
  }
  // format example: rgb(111, 50, 121)
  if (inputColor.value.search(/[r][g][b][(]/) !== -1 &&
      inputColor.value.match(/\d,/g).length === 2 &&
      inputColor.value.search(/[)]/) !== -1)
  {
    rgbOutput.innerHTML = inputColor.value;
    var regExp = /\(([^)]+)\)/;
    var rgbList = regExp.exec(inputColor.value)[1].split(",");
    var red = Number(rgbList[0]);
    var green = Number(rgbList[1]);
    var blue = Number(rgbList[2]);
    inputColor.value = rgbToHex(red, green, blue);
    hexOutput.innerHTML = rgbToHex(red, green, blue);
  }

  colorPicker.value = inputColor.value;
  hexOutput.innerHTML = inputColor.value;
  rgbOutput.innerHTML = "rgb("+ hexToRgb(inputColor.value).r.toString() + ", " +
  hexToRgb(inputColor.value).g.toString() + ", " +
  hexToRgb(inputColor.value).b.toString() + ")";
});

colorPicker.addEventListener("change", function(){
  colorPicker.value = colorPicker.value;
  inputColor.value = colorPicker.value;
  hexOutput.innerHTML = inputColor.value;
  rgbOutput.innerHTML = "rgb("+ hexToRgb(inputColor.value).r.toString() + ", " +
  hexToRgb(inputColor.value).g.toString() + ", " +
  hexToRgb(inputColor.value).b.toString() + ")";
});

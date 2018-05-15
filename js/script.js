// Hex input will be the source of all truth for the color displayed.

(function colorPickerFunction () {
  var inputColor = document.getElementsByClassName('input-color')
  var colorPicker = document.getElementsByClassName('color-picker')
  var hexOutput = document.getElementsByClassName('hex-output')
  var rgbOutput = document.getElementsByClassName('rgb-output')
  var previewHalf = document.getElementsByClassName('second-half')
  // RGB to hex conversion and add any required zero padding.
  function rgbToHex (r, g, b) {
    function componentToHex (c) {
      var hex = c.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
  }
  /* function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  } */
  // Here's a version of hexToRgb() that also parses a shorthand hex triplet such as "#03F"
  function hexToRgb (hex) {
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

  for( var i = 0; i < inputColor.length; i++ ){
    (function(i){

      previewHalf[i].style.backgroundColor = colorPicker[i].value;

      inputColor[i].value = colorPicker[i].value;

      inputColor[i].addEventListener("change", function() {

        // Removes whitespaces from the left and right side of the input value.
        inputColor[i].value = inputColor[i].value.trim();

        // If 3 digit hex entered, make into 6 digit hex
        if (inputColor[i].value.search(/^#[0-9A-Fa-f]{3}$/) !== -1) {
          var firstCharacter = inputColor[i].value.charAt(1);
          var secondCharacter = inputColor[i].value.charAt(2);
          var thirdCharacter = inputColor[i].value.charAt(3);
          inputColor[i].value = "#" + firstCharacter + firstCharacter + secondCharacter +
          secondCharacter + thirdCharacter + thirdCharacter;
          colorPicker[i].value = inputColor[i].value;
          hexOutput[i].innerHTML = inputColor[i].value;
          rgbOutput[i].innerHTML = "rgb("+ hexToRgb(inputColor[i].value).r.toString() + ", " +
          hexToRgb(inputColor[i].value).g.toString() + ", " +
          hexToRgb(inputColor[i].value).b.toString() + ")";
        }

        // RGB validation
        // Format 1: RGB(111, 50, 121) or rgb(111, 50, 121).
        // Format 2: RGB (111, 50, 121) or rgb (111, 50, 121).
        // Format 3:
        else if (
                  (
                    (
                      (inputColor[i].value.search(/[R][G][B][(]/) !== -1)
                      ||
                      (inputColor[i].value.search(/[r][g][b][(]/) !== -1)
                    )
                    &&
                    inputColor[i].value.match(/\d,/g).length === 2
                    &&
                    inputColor[i].value.search(/[)]/) !== -1
                  )
                  ||
                  (
                    (
                      (inputColor[i].value.search(/[R][G][B]\s[(]/) !== -1)
                      ||
                      (inputColor[i].value.search(/[r][g][b]\s[(]/) !== -1)
                    )
                    &&
                    inputColor[i].value.match(/\d,/g).length === 2
                    &&
                    inputColor[i].value.search(/[)]/) !== -1
                  )
                  /*||
                  (
                    (
                      (inputColor[i].value.search(/[R][G][B][:]/) !== -1)
                      ||
                      (inputColor[i].value.search(/[r][g][b][:]/) !== -1)
                    )
                    &&
                    inputColor[i].value.match(/\d,/g).length === 2
                  )*/
                ) {
          rgbOutput[i].innerHTML = inputColor[i].value;
          var regExp = /\(([^)]+)\)/;
          var rgbList = regExp.exec(inputColor[i].value)[1].split(",");
          var red = Number(rgbList[0]);
          var green = Number(rgbList[1]);
          var blue = Number(rgbList[2]);
          hexOutput[i].innerHTML = rgbToHex(red, green, blue);
          colorPicker[i].value = hexOutput[i].innerHTML;
        }

        // 6 digit hex
        else if (inputColor[i].value.search(/^#[0-9A-Fa-f]{6}$/) !== -1  && inputColor[i].value.length === 7) {
          colorPicker[i].value = inputColor[i].value;
          hexOutput[i].innerHTML = inputColor[i].value;
          rgbOutput[i].innerHTML = "rgb("+ hexToRgb(inputColor[i].value).r.toString() + ", " +
          hexToRgb(inputColor[i].value).g.toString() + ", " +
          hexToRgb(inputColor[i].value).b.toString() + ")";
        }

        // 6 digit hex WITH NO hash
        else if (inputColor[i].value.search(/[0-9A-Fa-f]{6}/) !== -1 && inputColor[i].value.length === 6) {
          inputColor[i].value = '#' + inputColor[i].value;
          colorPicker[i].value = inputColor[i].value;
          hexOutput[i].innerHTML = inputColor[i].value;
          rgbOutput[i].innerHTML = "rgb("+ hexToRgb(inputColor[i].value).r.toString() + ", " +
          hexToRgb(inputColor[i].value).g.toString() + ", " +
          hexToRgb(inputColor[i].value).b.toString() + ")";
        }

        // Not accepted formats:
        else {
          hexOutput[i].innerHTML = "Please enter a valid color in hex or rgb format!";
          rgbOutput[i].innerHTML = "Please enter a valid color in hex or rgb format!";
        }
        hexOutput[i].innerHTML = hexOutput[i].innerHTML.trim();
        rgbOutput[i].innerHTML = rgbOutput[i].innerHTML.trim();

        previewHalf[i].style.backgroundColor = colorPicker[i].value;

      });


      colorPicker[i].addEventListener("change", function(){
        inputColor[i].value = colorPicker[i].value;
        hexOutput[i].innerHTML = inputColor[i].value;
        rgbOutput[i].innerHTML = "rgb("+ hexToRgb(inputColor[i].value).r.toString() + ", " +
        hexToRgb(inputColor[i].value).g.toString() + ", " +
        hexToRgb(inputColor[i].value).b.toString() + ")";
        previewHalf[i].style.backgroundColor = colorPicker[i].value;
      });

    })(i);
  }
})();

window.addEventListener("touchstart", preventBouncing, {passive: false} );

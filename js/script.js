
/*function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

document.write( rgbToHex(0, 51, 255) ); // #0033ff*/

var inputColor = document.querySelector(".input-color");
var colorPicker = document.querySelector(".color-picker");

inputColor.value = colorPicker.value;

inputColor.addEventListener("change", function() {
    colorPicker.value = inputColor.value;

    if (inputColor.value.search(/#fff/) !== -1) {
      console.log("can white");
    }

    if (inputColor.value.search(/#fff/) !== -1) {
      console.log("can white");
    }
})

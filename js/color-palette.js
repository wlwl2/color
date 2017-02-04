function rgbToHex(r, g, b) {
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};


function rgbFullToHex(rgbFull) {
  var oldHex = rgbFull;
  var regExp = /\(([^)]+)\)/;
  var rgbList = regExp.exec(oldHex)[1].split(",");
  var red = Number(rgbList[0]);
  var green = Number(rgbList[1]);
  var blue = Number(rgbList[2]);
  var newHex = rgbToHex(red,green,blue);
  return newHex;
}

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

var colorList = [
  {
    "color": "red",
    "backgroundColor" : "#b91b1b"
  },
  {
    "color": "green",
    "backgroundColor" : "#1e6712"
  },
  {
    "color": "blue",
    "backgroundColor" : "#0b2732"
  },
  {
    "color": "yellow",
    "backgroundColor" : "#cfc32c"
  },
  {
    "color": "purple",
    "backgroundColor" : "#8965ad"
  },
  {
    "color": "orange",
    "backgroundColor" : "#e8af4d"
  }
]

var colorPalette = document.querySelectorAll(".color-palette__buttons");
var previewHalf = document.querySelectorAll(".second-half");
var inputColor = document.querySelectorAll(".input-color");
var hexOutput = document.querySelectorAll(".hex-output");
var rgbOutput = document.querySelectorAll(".rgb-output");

// For each palette.
for (var i = 0; i < colorPalette.length; i++) {

  // For each of the buttons in each palette.
  for (var j = 0; j < colorPalette[i].children.length; j++) {
    colorPalette[i].children[j].style.backgroundColor = colorList[j].backgroundColor;

    (function(i,j){
      colorPalette[i].children[j].addEventListener("click", function(){
        var paletteButtonColor = rgbFullToHex(colorPalette[i].children[j].style.backgroundColor);
        hexOutput[i].innerHTML = paletteButtonColor;
        rgbOutput[i].innerHTML = "rgb("+ hexToRgb(paletteButtonColor).r.toString() + ", " +
        hexToRgb(paletteButtonColor).g.toString() + ", " +
        hexToRgb(paletteButtonColor).b.toString() + ")";
        previewHalf[i].style.backgroundColor = paletteButtonColor;
      });
    })(i,j);
  }
}

function rgbToHex (r, g, b) {
  function componentToHex (c) {
    var hex = c.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

function rgbFullToHex (rgbFull) {
  var oldHex = rgbFull
  var regExp = /\(([^)]+)\)/
  var rgbList = regExp.exec(oldHex)[1].split(',')
  var red = Number(rgbList[0])
  var green = Number(rgbList[1])
  var blue = Number(rgbList[2])
  var newHex = rgbToHex(red, green, blue)
  return newHex
}

// Here's a version of hexToRgb() that also parses a shorthand hex triplet such as "#03F"
function hexToRgb (hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b
  })
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

var colorList = [
  {
    'colorName': 'base03',
    'backgroundColor': '#002b36'
  },
  {
    'colorName': 'base02',
    'backgroundColor': '#073642'
  },
  {
    'colorName': 'base01',
    'backgroundColor': '#586e75'
  },
  {
    'colorName': 'base00',
    'backgroundColor': '#657b83'
  },
  {
    'colorName': 'base0',
    'backgroundColor': '#839496'
  },
  {
    'colorName': 'base1',
    'backgroundColor': '#93a1a1'
  },
  {
    'colorName': 'base2',
    'backgroundColor': '#eee8d5'
  },
  {
    'colorName': 'base3',
    'backgroundColor': '#fdf6e3'
  },
  {
    'colorName': 'yellow',
    'backgroundColor': '#b58900'
  },
  {
    'colorName': 'orange',
    'backgroundColor': '#cb4b16'
  },
  {
    'colorName': 'red',
    'backgroundColor': '#dc322f'
  },
  {
    'colorName': 'magenta',
    'backgroundColor': '#d33682'
  },
  {
    'colorName': 'violet',
    'backgroundColor': '#6c71c4'
  },
  {
    'colorName': 'blue',
    'backgroundColor': '#268bd2'
  },
  {
    'colorName': 'cyan',
    'backgroundColor': '#2aa198'
  },
  {
    'colorName': 'green',
    'backgroundColor': '#859900'
  }
];

var newColorList = [
  {
    'colorName': 'LightSalmon',
    'backgroundColor': 'rgb(255, 160, 122)'
  },
  {
    'colorName': 'Salmon',
    'backgroundColor': '#rgb(250, 128, 114)'
  },
  {
    'colorName': 'DarkSalmon',
    'backgroundColor': 'rgb(233, 150, 122)'
  },
  {
    'colorName': 'LightCoral',
    'backgroundColor': 'rgb(240, 128, 128)'
  },
  {
    'colorName': 'IndianRed',
    'backgroundColor': 'rgb(205, 92, 92)'
  },
  {
    'colorName': 'Crimson',
    'backgroundColor': 'rgb(220, 20, 60)'
  },
  {
    'colorName': 'FireBrick',
    'backgroundColor': 'rgb(178, 34, 34)'
  },
  {
    'colorName': 'DarkRed',
    'backgroundColor': 'rgb(139, 0, 0)'
  },
  {
    'colorName': 'Red',
    'backgroundColor': 'rgb(255, 0, 0)'
  },
  {
    'colorName': 'blue',
    'backgroundColor': '#273751'
  },
  {
    'colorName': 'blue',
    'backgroundColor': '#1E2A3A'
  },
  {
    'colorName': 'navy0',
    'backgroundColor': '#1f427e'
  },
  {
    'colorName': 'navy1',
    'backgroundColor': '#395690'
  },
  {
    'colorName': 'navy2',
    'backgroundColor': '#314582'
  },
  {
    'colorName': 'navy3',
    'backgroundColor': '#2C4D82'
  },
  {
    'colorName': 'indigo dye',
    'backgroundColor': '#00416a'
  }
];

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
      colorPalette[i].children[j].style.backgroundColor = colorList[j].backgroundColor
      colorPalette[i].children[j].setAttribute('title', colorList[j].colorName);
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
      colorPalette[i].children[j].style.backgroundColor = newColorList[j].backgroundColor
      colorPalette[i].children[j].setAttribute('title', newColorList[j].colorName);
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

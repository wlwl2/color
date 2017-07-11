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
]

var chineseColorList = [
  {
    'colorName': 'White',
    'backgroundColor': '#ffffff'
  },
  {
    'colorName': 'Gamboge',
    'backgroundColor': '#ffb61f'
  },
  {
    'colorName': 'Vermilion',
    'backgroundColor': '#f36838'
  },
  {
    'colorName': 'Cinnabar',
    'backgroundColor': '#f05654'
  },
  {
    'colorName': 'Rouge',
    'backgroundColor': '#660000'
  },
  {
    'colorName': 'Carmine',
    'backgroundColor': '#cb3a56'
  },
  {
    'colorName': 'Scarlet',
    'backgroundColor': '#ff2121'
  },
  {
    'colorName': 'Umber',
    'backgroundColor': '#9c5333'
  },
  {
    'colorName': 'LightGreen',
    'backgroundColor': '#7bcfa6'
  },
  {
    'colorName': 'LightBlue',
    'backgroundColor': '#1685a9'
  },
  {
    'colorName': 'PhthalocyanineBlue',
    'backgroundColor': '#000f89'
  },
  {
    'colorName': 'Indigo',
    'backgroundColor': '#003472'
  }
];

(function solarizedPalette () {
  var colorPalette = document.querySelectorAll('.color-palette__buttons')
  var inputColor = document.querySelectorAll('.input-color')
  var colorPicker = document.querySelectorAll('.color-picker')
  var hexOutput = document.querySelectorAll('.hex-output')
  var rgbOutput = document.querySelectorAll('.rgb-output')
  var previewHalf = document.querySelectorAll('.second-half')

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
(function chinesePalette () {
  var colorPalette = document.querySelectorAll('.chinese .color-palette__buttons')
  var inputColor = document.querySelectorAll('.chinese .input-color')
  var colorPicker = document.querySelectorAll('.chinese .color-picker')
  var hexOutput = document.querySelectorAll('.chinese .hex-output')
  var rgbOutput = document.querySelectorAll('.chinese .rgb-output')
  var previewHalf = document.querySelectorAll('.chinese .second-half')

  // For each palette.
  for (var i = 0; i < colorPalette.length; i++) {
    // For each of the buttons in each palette.
    for (var j = 0; j < colorPalette[i].children.length; j++) {
      colorPalette[i].children[j].style.backgroundColor = chineseColorList[j].backgroundColor
      colorPalette[i].children[j].setAttribute('title', chineseColorList[j].colorName);
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

// This file contains utility functions used in this app.

/**
 * Does RGB to hex conversion and adds any required zero padding.
 * Note: Expects integer values for r, g and b, so you'll need to do 
 * your own rounding if you have non-integer values.
 * (https://stackoverflow.com/questions/
 * 5623838/rgb-to-hex-and-hex-to-rgb|Source)
 * @param {number} r - Red.
 * @param {number} g - Green.
 * @param {number} b - Blue.
 */
function rgbToHex (r, g, b) {
  function componentToHex (c) {
    var hex = c.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  return '#' + 
    componentToHex(r) + 
    componentToHex(g) + 
    componentToHex(b)
}

/**
 * Converts rgb(211, 54, 130) to #d33682.
 * (https://stackoverflow.com/questions/
 * 5623838/rgb-to-hex-and-hex-to-rgb|Source)
 * @param {string} rgbFull - For example: rgb(211, 54, 130).
 */
function rgbFullToHex (rgbFull) {
  var oldHex = rgbFull
  console.log(rgbFull)
  // From rgb(211, 54, 130) detects: (211, 54, 130).
  var regExp = /\(([^)]+)\)/
  var rgbList = regExp.exec(oldHex)[1].split(',')
  var red = Number(rgbList[0])
  var green = Number(rgbList[1])
  var blue = Number(rgbList[2])
  var newHex = rgbToHex(red, green, blue)
  // returns #d33682
  return newHex
}

/**
 * Also parses shorthand hex triplets such as "#03F".
 * (https://stackoverflow.com/questions/
 * 5623838/rgb-to-hex-and-hex-to-rgb|Source)
 * @param {string} hex - For example: #d33682.
 */
function hexToRgb (hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, 
    function (m, r, g, b) {
      return r + r + g + g + b + b  
    }
  )
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

// /**
//  * Just an alternative version of rgbToHex().
//  * Note: Expects integer values for r, g and b, so you'll need to do 
//  * your own rounding if you have non-integer values.
//  * (https://stackoverflow.com/questions/
//  * 5623838/rgb-to-hex-and-hex-to-rgb|Source)
//  * @param {number} r - Red.
//  * @param {number} g - Green.
//  * @param {number} b - Blue.
//  */
// function rgbToHex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }
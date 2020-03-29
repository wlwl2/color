// This file contains utility functions used in this app.

/**
 * Does RGB to hex conversion and adds any required zero padding.
 * Note: Expects integer values for r, g and b, so you'll need to do 
 * your own rounding if you have non-integer values.
 * Converts rgbToHex(211, 54, 130) to '#d33682'.
 * (https://stackoverflow.com/questions/
 * 5623838/rgb-to-hex-and-hex-to-rgb|Source)
 * @param {number} r - Red.
 * @param {number} g - Green.
 * @param {number} b - Blue.
 * @returns {string} - hex e.g. #d33682.
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
 * Converts 'rgb(211, 54, 130)' to '#d33682'.
 * (https://stackoverflow.com/questions/
 * 5623838/rgb-to-hex-and-hex-to-rgb|Source)
 * @param {string} rgbFull - For example: rgb(211, 54, 130).
 * @returns {string} - hex e.g. #d33682.
 */
function rgbFullToHex (rgbFull) {
  var oldHex = rgbFull
  // From rgb(211, 54, 130) detects: (211, 54, 130).
  var regExp = /\(([^)]+)\)/
  var rgbList = regExp.exec(oldHex)[1].split(',')
  var red = Number(rgbList[0])
  var green = Number(rgbList[1])
  var blue = Number(rgbList[2])
  var finalHex = rgbToHex(red, green, blue)
  // returns #d33682
  return finalHex
}

/**
 * Also parses shorthand hex triplets such as "#03F".
 * (https://stackoverflow.com/questions/
 * 5623838/rgb-to-hex-and-hex-to-rgb|Source)
 * @param {string} hex - For example: #d33682.
 * @returns {Object.<string, number>} - Object containing 
 * RGB key: values each ∈ [0, 255].
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

/**
 * Converts an RGB color value to HSV. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 * The return value for this function is inherently complex, be careful.
 * Put what is returned from this function into hsvToFullHsv() 
 * to get a HSV in the format: hsv(239, 78%, 43%).
 * (https://gist.github.com/mjackson/5311256)
 * @param {number} r - Red ∈ [0, 255].
 * @param {number} g - Green ∈ [0, 255].
 * @param {number} b - Blue ∈ [0, 255].
 * @returns {(number|Array)} - The HSV each ∈ [0, 1].
 */
function rgbToHsv (r, g, b) {
  r /= 255, g /= 255, b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, v = max;

  var d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return [ h, s, v ];
}

/**
 * I: An array of three elements hue (h) ∈ [0, 360], and saturation (s) 
 * and value (v) which are ∈ [0, 1]
 * O: An array of red (r), green (g), blue (b), each ∈ [0, 255]
 * Derived from https://en.wikipedia.org/wiki/HSL_and_HSV
 * This stackexchange was the clearest derivation I found to reimplement:
 * https://cs.stackexchange.com/questions/64549/convert-hsv-to-rgb-colors
 * (https://gist.github.com/mjackson/5311256 
 * [@stephencweiss] Stephen Weiss's answer)
 * Use example: hsvToRgb(239, .78, .43) correctly returns [24, 26, 110]
 * @param {number} h - Hue ∈ [0, 360].
 * @param {number} s - Saturation ∈ [0, 1].
 * @param {number} v - Value ∈ [0, 1].
 * @returns {(number|Array)} - RGB each ∈ [0, 255].
 */
function hsvToRgb (h, s, v) {
  hprime = h / 60;
  const c = v * s;
  const x = c * (1 - Math.abs(hprime % 2 - 1)); 
  const m = v - c;
  let r, g, b;
  if (!hprime) {r = 0; g = 0; b = 0; }
  if (hprime >= 0 && hprime < 1) { r = c; g = x; b = 0 }
  if (hprime >= 1 && hprime < 2) { r = x; g = c; b = 0 }
  if (hprime >= 2 && hprime < 3) { r = 0; g = c; b = x }
  if (hprime >= 3 && hprime < 4) { r = 0; g = x; b = c }
  if (hprime >= 4 && hprime < 5) { r = x; g = 0; b = c }
  if (hprime >= 5 && hprime < 6) { r = c; g = 0; b = x }
  r = Math.round( (r + m) * 255);
  g = Math.round( (g + m) * 255);
  b = Math.round( (b + m) * 255);
  return [r, g, b]
}

/**
 * Converts hsv array from rgbToHsv() to a HSV. 
 * E.g. [ 0.6627906976744186, 0.7818181818181819, 0.43137254901960786 ]
 * to hsv(239, 78%, 43%). Take care of what this returns.
 * @param {(number|Array)} hsv - hsv array from rgbToHsv().
 * @returns {Object} - Object containing a regular hsv string and the original
 * hsv array passed into this function.
 */
function hsvToFullHsv (hsv) {
  const h = hsv[0]
  const s = hsv[1]
  const v = hsv[2]
  
  const hue = Math.round(h * 360)
  let saturation = 0
  let value = 0
  if (s > 0 && s < 1) {
    saturation = s.toFixed(2)
  }
  if (v > 0 && v < 1) {
    value = v.toFixed(2)
  }
  
  const finalSaturation = saturation * 100
  const finalValue = value * 100
  
  let result = {
    fullHsv: `hsv(${hue}, ${finalSaturation}%, ${finalValue}%)`,
    originalHsv: hsv
  }
  
  return result
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
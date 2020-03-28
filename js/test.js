// Just used for testing these "interesting" functions.
// hsv(239, 78%, 43%) = rgb(24, 26, 110)
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
  
  return [ h, s, v ]
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

// hsv(239, 78%, 43%) = rgb(24, 26, 110)
console.log(hsvToFullHsv(rgbToHsv(24, 26, 110)))
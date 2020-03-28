// Just used for testing these "interesting" functions.
// hsv(239, 78%, 43%) = rgb(24, 26, 110)

function hsvToRgb (h, s, v) {
  hprime = h / 60;
  const c = v * s;
  const x = c * (1 - Math.abs(hprime % 2 - 1)); 
  const m = v - c;
  let r, g, b;
  if (!hprime) {r = 0; g = 0; b = 0; }
  if (hprime >= 0 && hprime < 1) { r = c; g = x; b = 0}
  if (hprime >= 1 && hprime < 2) { r = x; g = c; b = 0}
  if (hprime >= 2 && hprime < 3) { r = 0; g = c; b = x}
  if (hprime >= 3 && hprime < 4) { r = 0; g = x; b = c}
  if (hprime >= 4 && hprime < 5) { r = x; g = 0; b = c}
  if (hprime >= 5 && hprime < 6) { r = c; g = 0; b = x}
  
  r = Math.round( (r + m)* 255);
  g = Math.round( (g + m)* 255);
  b = Math.round( (b + m)* 255);

  return [r, g, b]
}

console.log(hsvToRgb(239, .78, .43))

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

console.log(rgbToHsv(24, 26, 110))
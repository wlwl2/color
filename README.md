# color

Color picker tools.

## Color Utility Functions

This repository also contains color utility functions that are meant for use in
front-end projects.


### rgbToHex(r, g, b)

Does RGB to hex conversion and adds any required zero padding.
Note: Expects integer values for r, g and b, so you'll need to do 
your own rounding if you have non-integer values.
Converts rgbToHex(211, 54, 130) to '#d33682'.

```js
@param {number} r - Red.
@param {number} g - Green.
@param {number} b - Blue.
@returns {string} - hex e.g. #d33682.
```

/**
 * Converts 'rgb(211, 54, 130)' to '#d33682'.
 * (https://stackoverflow.com/questions/
 * 5623838/rgb-to-hex-and-hex-to-rgb|Source)
 * @param {string} rgbFull - For example: rgb(211, 54, 130).
 * @returns {string} - hex e.g. #d33682.
 */
rgbFullToHex(rgbFull)

/**
 * Also parses shorthand hex triplets such as "#03F".
 * (https://stackoverflow.com/questions/
 * 5623838/rgb-to-hex-and-hex-to-rgb|Source)
 * @param {string} hex - For example: #d33682.
 * @returns {Object.<string, number>} - Object containing 
 * RGB key: values each ∈ [0, 255].
 */
hexToRgb(hex)

/**
 * Converts an RGB color value to HSV.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and v in the set [0, 1].
 * The return value for this function is inherently complex, be careful.
 * Put what is returned from this function into hsvToFullHsv() 
 * to get a HSV in the format: hsv(239, 78%, 43%).
 * @param {number} r - Red ∈ [0, 255].
 * @param {number} g - Green ∈ [0, 255].
 * @param {number} b - Blue ∈ [0, 255].
 * @returns {(number|Array)} - The HSV each ∈ [0, 1].
 */
rgbToHsv(r, g, b)

/**
 * I: An array of three elements hue (h) ∈ [0, 360], and saturation (s) 
 * and value (v) which are ∈ [0, 1]
 * O: An array of red (r), green (g), blue (b), each ∈ [0, 255]
 * Use example: hsvToRgb(239, .78, .43) correctly returns [24, 26, 110]
 * @param {number} h - Hue ∈ [0, 360].
 * @param {number} s - Saturation ∈ [0, 1].
 * @param {number} v - Value ∈ [0, 1].
 * @returns {(number|Array)} - RGB each ∈ [0, 255].
 */
hsvToRgb(h, s, v)

/**
 * Converts hsv array from rgbToHsv() to a HSV. 
 * E.g. [ 0.6627906976744186, 0.7818181818181819, 0.43137254901960786 ]
 * to hsv(239, 78%, 43%). Take care of what this returns.
 * @param {(number|Array)} hsv - hsv array from rgbToHsv().
 * @returns {Object} - Object containing a regular hsv string and the original
 * hsv array passed into this function.
 */
hsvToFullHsv(hsv)

## Resources

Good examples of palettes/design systems can be found here:

### Material Design

Source: https://material.io/guidelines/style/color.html#color-color-palette

License: https://www.apache.org/licenses/LICENSE-2.0.html

### Web Colors

Source: https://en.wikipedia.org/wiki/Web_colors

License: https://creativecommons.org/licenses/by-sa/3.0/

## Possibilities

- Add a custom canvas color picker. Currently native browser color 
pickers are used.

## Development

Run `npm i`

Run `grunt`
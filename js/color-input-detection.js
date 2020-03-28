// Deals with default browser color picker inputs on the page.
// If at least one picker value is invalid it hides all 
// default browser color picker inputs on the page.
(function colorInputDetection () {
  var colorPicker = document.querySelectorAll('.color-picker')[0]
  // Should he a hex color.
  if (colorPicker.value.length !== 7) {
    // All default browser color picker inputs on the page.
    // They look like this:
    // <input class="color-picker" type="color"/>
    var allNativePickers = document.querySelectorAll('.color-picker')
    var allColorInputs = document.querySelectorAll('.input-color')
    var allSecondHalves = document.querySelectorAll('.second-half')
    for (var i = 0; i < allNativePickers.length; i++) {
      allNativePickers[i].style.display = 'none'
      allColorInputs[i].value = '#000000'
      allSecondHalves[i].setAttribute('style', 'background-color: black;')
    }
  }
})()

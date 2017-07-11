(function colorInputDetection () {
  var colorPicker = document.querySelectorAll('.color-picker')[0]
  if (colorPicker.value.length !== 7) {
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

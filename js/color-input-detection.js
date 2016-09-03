(function colorInputDetection(){
  var colorPicker = document.querySelector(".color-picker");
  if (colorPicker.value.length !== 7) {
    document.querySelector('.color-picker-page').setAttribute("style", "display:none;");
    document.write("your browser doesn't support this color picker")
  }
})();

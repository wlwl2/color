(function colorInputDetection(){
  var colorPicker = document.querySelectorAll(".color-picker")[0];
  if (colorPicker) {
    if (colorPicker.value.length !== 7) {
      document.querySelector('.color-picker-main-container').setAttribute("style", "display:none;");
      console.log("your browser doesn't support this color picker");
      document.write("your browser doesn't support this color picker");
    }
  } else {
    document.querySelector('.color-picker-main-container').setAttribute("style", "display:none;");
    console.log("your browser doesn't support this color picker");
    document.write("your browser doesn't support this color picker");
  }
})();

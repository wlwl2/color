var paletteButtons = document.querySelectorAll('.color-palette__buttons');

for( var i = 0; i < paletteButtons.length; i++ ){
  for (var j = 0; j < paletteButtons[i].children.length; j++) {
    (function(i,j){
      paletteButtons[i].children[j].addEventListener("click", function(){
        var colorPicker = document.querySelectorAll(".color-picker");
        colorPicker[i].value = paletteButtons[i].children[j].style.backgroundColor;
        console.log(window.getComputedStyle(paletteButtons[i].children[j]));
        console.log(i,j);
      });
    })(i,j);
  }
}

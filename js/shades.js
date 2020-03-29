var moreColorPicker = document.querySelector('.more__color-picker')
var moreHexValue = document.querySelector('.more__selected-hex-value')

moreColorPicker.addEventListener("change", function () {
  console.log(moreColorPicker.value)
  moreHexValue.textContent = moreColorPicker.value
  
})

// if (confirmed >= 0 && confirmed < 10) {
//     return 'hsv(0, 25%, 100%)'
//   } else if (confirmed > 9 && confirmed < 50) {
//     return 'hsv(0, 29%, 100%)'
//   } else if (confirmed > 49 && confirmed < 100) {
//     return 'hsv(0, 34%, 100%)'
//   } else if (confirmed > 99 && confirmed < 250) {
//     return 'hsv(0, 40%, 100%)'
//   } else if (confirmed > 249 && confirmed < 500) {
//     return '#ff8c8c'
//   } else if (confirmed > 499 && confirmed < 1000) {
//     return '#ff8080'
//   } else if (confirmed > 999 && confirmed < 2500) {
//     return '#ff7373'
//   } else if (confirmed > 2499 && confirmed < 5000) {
//     return '#ff6666'
//   } else if (confirmed > 4999 && confirmed < 10000) {
//     return '#ff5959'
//   } else if (confirmed > 9999 && confirmed < 25000) {
//     return '#ff4d4d'
//   } else if (confirmed > 24999 && confirmed < 50000) {
//     return '#ff4040'
//   } else if (confirmed > 49999 && confirmed < 100000) {
//     return '#ff3333'
//   } else if (confirmed > 99999 && confirmed < 250000) {
//     return '#ff2626'
//   } else if (confirmed > 249999 && confirmed < 500000) {
//     return '#ff1919'
//   } else if (confirmed > 499999 && confirmed < 1000000) {
//     return '#ff0d0d'
//   } else if (confirmed > 999999) {
//     return '#ff0000'
//   }
// 
//   hsv(151, 58%, 70%)
// 
//   hsv(151, 53%, 70%)
const moreColorPicker = document.querySelector('.more__color-picker')
const moreHexValue = document.querySelector('.more__selected-hex-value')
const moreHsvValue = document.querySelector('.more__selected-hsv-value')

const startPercentage = document.querySelector('.more__start-percentage')
const endPercentage = document.querySelector('.more__end-percentage')
const percentageGap = document.querySelector('.more__percentage-gap')

const demoList = document.querySelector('.more__shades-demo-list')

endPercentage.value = 100

moreColorPicker.addEventListener("change", function (event) {
  const hex = moreColorPicker.value
  const rgb = hexToRgb(hex)
  const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b)
  const newFullHsvObj = hsvToFullHsv(hsv)
  moreHexValue.textContent = hex
  // Test: #400080 = hsv(270, 100%, 50%)
  moreHsvValue.textContent = newFullHsvObj.fullHsv
  const saturation = hsv[1]
  let endPercent = 0
  if (saturation === 1) {
    endPercent = 100
  } else if (saturation > 0 && saturation < 1) {
    endPercent = saturation.toFixed(2) * 100
  }
  endPercentage.value = endPercent
  
  setColors()
  
})

startPercentage.addEventListener("change", function (event) {
  setColors()
})

percentageGap.addEventListener("change", function (event) {
  setColors()
})

function setColors () {
  if (
    endPercentage.value.length > 0 &&
    startPercentage.value.length > 0 &&
    percentageGap.value.length > 0
  ) {
    const numberOfShades = 
    (endPercentage.value - startPercentage.value) / percentageGap.value
    
    const numberOfShadesFloored = Math.floor(numberOfShades)
    
    demoList.innerHTML = ''
    
    for (var i = 0; i < numberOfShadesFloored; i++) {
      const color = document.createElement('li')
      const percentDecrease = (i + 1) * Number(percentageGap.value)
      const newSaturation = Number(endPercentage.value) - percentDecrease
      const saturationDecimal = newSaturation / 100
      
      const hex = moreColorPicker.value
      const rgb = hexToRgb(hex)
      const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b)
      const newHsv = [hsv[0], saturationDecimal, hsv[2]]
      
      const newFullHsvObj = hsvToFullHsv(newHsv)
      
      const newHue = Math.round(hsv[0] * 360)
      
      const newRgb = hsvToRgb(newHue, newHsv[1], newHsv[2])
      
      const newHex = rgbToHex(newRgb[0], newRgb[1], newRgb[2])
      
      const box = document.createElement('span')
      
      box.setAttribute('style', `
        display: inline-block; 
        vertical-align: middle;  
        height: 30px; 
        width: 30px; 
        background-color: ${newHex};
        margin: 0 10px 0 0;
      `)
      
      const label = document.createElement('span')
      label.textContent = `${newHex} ${newFullHsvObj.fullHsv}`
      
      label.setAttribute('style', `
        display: inline-block; 
        vertical-align: middle;  
      `)
      
      color.appendChild(box)
      color.appendChild(label)
      
      color.setAttribute('style', `
        margin: 6px 0;  
      `)
      
      demoList.appendChild(color)
    }
  }
}

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
//     return 'rgb(255, 15, 15)'
//   } else if (confirmed > 999999) {
//     return 'rgb(255, 0, 0)'
//   }
// 
//   hsv(151, 58%, 70%)
// 
//   hsv(151, 53%, 70%)

/*

#ff1f8f #ff1f8f
#ff3d9e hsv(330, 76%, 100%)
#ff5cad hsv(330, 64%, 100%)
#ff7abd hsv(330, 52%, 100%)
#ff99cc #ff99cc
#ffb8db hsv(330, 28%, 100%)
#ffd6eb hsv(330, 16%, 100%)
#fff5fa hsv(330, 4%, 100%)

*/
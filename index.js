
const meterToFeet = 3.28084 // feet
const literToGallon = 0.264172 // gallon
const kiloToPound = 2.20462 // pound
const feetToMeter = 0.3048 //meter
const galToLiters = 3.78541 // liters
const poundToKilos = 0.453592 // kilos
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

convertBtn.addEventListener("click", function() {
    let inputVal = inputEl.value
    const calcLength = inputVal * meterToFeet
    const calcVolume = inputVal * literToGallon
    const calcMass = inputVal * kiloToPound
    const calcMeter = inputVal * feetToMeter
    const calcLiters = inputVal * galToLiters
    const calcKilos = inputVal * poundToKilos
    lengthOutput.innerHTML = `${inputVal} meters = ${calcLength.toFixed(3)} feet | ${inputVal} feet = ${calcMeter.toFixed(3)} meters`
    volumeOutput.innerHTML = `${inputVal} liters = ${calcVolume.toFixed(3)} gallons | ${inputVal} gallons = ${calcLiters.toFixed(3)} liters`
    massOutput.innerHTML = `${inputVal} kilos ${calcMass.toFixed(3)} pounds | ${inputVal} pounds = ${calcKilos.toFixed(3)} kilos`
        
    //test
    }
)
export function convertTempToC(temp) {
    const celcius = Math.trunc((temp - 32) * (5 / 9))
    return(celcius)
}

export function convertTempToF(temp) {
    const faren = Math.trunc((temp * (9 / 5)) + 32)
    return(faren)
}

export function updateTemperature(celciusOption) {
    const mainTempDisp = document.querySelector(".main-temp");
    const maxTempDisp = document.querySelector(".higher-temp");
    const minTempDisp = document.querySelector(".lower-temp");
    const feelsLikeDisp = document.querySelector(".feels-like-temp")

    const celciusChosen = celciusOption.classList.contains("chosen-temp");
    const mainTemp = celciusChosen ? convertTempToC(Number(mainTempDisp.textContent)) : convertTempToF(Number(mainTempDisp.textContent));
    const maxTemp = celciusChosen ? convertTempToC(Number(maxTempDisp.textContent)) : convertTempToF(Number(maxTempDisp.textContent));
    const minTemp = celciusChosen ? convertTempToC(Number(minTempDisp.textContent)) : convertTempToF(Number(minTempDisp.textContent));
    const feelsLike = celciusChosen ? convertTempToC(Number(feelsLikeDisp.textContent)) : convertTempToF(Number(feelsLikeDisp.textContent));


    mainTempDisp.textContent = mainTemp;
    maxTempDisp.textContent = maxTemp;
    minTempDisp.textContent = minTemp;
    feelsLikeDisp.textContent = feelsLike;  
}
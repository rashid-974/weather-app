export function convertTempToC(temp) {
    const celcius = Math.trunc((temp - 32) * (5 / 9))
    return(celcius)
}
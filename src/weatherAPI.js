export async function getWeatherData(city) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=KM3DMPXPQQUV39ARA6AFF23FD`);
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.error(error);
    }
}

export async function getWeatherConditions(city) {
    const weather = await getWeatherData(city);
    const currentConditions = weather.currentConditions;
    const today = weather.days.slice(0, 1)[0];

    const conditions = {
        condition: currentConditions.conditions,
        temp: currentConditions.temp,
        feelsLike: currentConditions.feelslike,
        humidity: currentConditions.humidity,
        icon: currentConditions.icon,
        sunrise: currentConditions.sunrise,
        sunset: currentConditions.sunset,
        uvindex: currentConditions.uvindex,
        visibility: currentConditions.visibility,
        desc: today.description,
        tempmax: today.tempmax,
        tempmin: today.tempmin
    }

    return conditions;
}
import { icons } from "./icons.js";
import { convertTempToC } from "./temperature.js";

const display = document.querySelector(".weather-disp");

export function clearDisplay() {
    display.innerHTML = "";
    return
}

export function updateDisplay(conditions, celciusOption) {
    clearDisplay()

    const celciusChosen = celciusOption.classList.contains("chosen-temp");
    const mainTemp = celciusChosen ? convertTempToC(Number(conditions.temp)) : Math.trunc(Number(conditions.temp));
    const maxTemp = celciusChosen ? convertTempToC(Number(conditions.tempmax)) : Math.trunc(Number(conditions.tempmax));
    const minTemp = celciusChosen ? convertTempToC(Number(conditions.tempmin)) : Math.trunc(Number(conditions.tempmin));
    const feelsLike = celciusChosen ? convertTempToC(Number(conditions.feelsLike)) : Math.trunc(Number(conditions.feelsLike));

    display.innerHTML += `
    <div class="main-disp">
        <div class="condition-box">
            ${icons[conditions.icon]}
            <h2>${conditions.condition}</h2>
        </div>
        <div class="temp-disp">
            <h2 class="main-temp temperature">${mainTemp}</h2>
            <div class="">
                <div class="higher-lower">
                    <div class="higher">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-up</title><path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" /></svg>
                        <p class="higher-temp temperature">${maxTemp}</p>
                    </div>
                    <p class="slash">/</p>
                    <div class="lower">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-down</title><path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" /></svg>
                        <p class="lower-temp temperature">${minTemp}</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="today-desc">
            <p>"${conditions.desc}"</p>
            <p class="feels-like">Feels like <span class="feels-like-temp temperature">${feelsLike}</span></p>
        </div>
        <div class="sub-disp">
            <div class="ux-disp sub-topic">
                <div class="sub-topic-div">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>sun-wireless-outline</title><path d="M11 1L13.39 4.42C12.65 4.15 11.84 4 11 4S9.35 4.15 8.61 4.42L11 1M2.34 6L6.5 5.65C5.9 6.16 5.36 6.78 4.94 7.5C4.5 8.24 4.25 9 4.11 9.79L2.34 6M2.36 16L4.12 12.23C4.26 13 4.53 13.78 4.95 14.5C5.37 15.24 5.91 15.86 6.5 16.37L2.36 16M19.65 6L17.88 9.79C17.74 9 17.47 8.23 17.05 7.5C16.63 6.78 16.1 6.15 15.5 5.64L19.65 6M23 13H21C21 15.05 20.22 17.1 18.66 18.66C17.09 20.23 15.05 21 13 21V23C15.56 23 18.12 22 20.07 20.07S23 15.56 23 13M19 13H17C17 14 16.61 15.05 15.83 15.83C15.05 16.61 14 17 13 17V19C14.54 19 16.08 18.41 17.25 17.24C18.41 16.08 19 14.54 19 13M11 8C12.65 8 14 9.35 14 11S12.65 14 11 14 8 12.65 8 11 9.35 8 11 8M11 6C8.24 6 6 8.24 6 11S8.24 16 11 16 16 13.76 16 11 13.76 6 11 6Z" /></svg>
                    <p>uv</p>
                </div>
                <p>${conditions.uvindex}</p>
            </div>
            <div class="humidity-disp sub-topic">
                <div class="sub-topic-div">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>water-outline</title><path d="M12,3.77L11.25,4.61C11.25,4.61 9.97,6.06 8.68,7.94C7.39,9.82 6,12.07 6,14.23A6,6 0 0,0 12,20.23A6,6 0 0,0 18,14.23C18,12.07 16.61,9.82 15.32,7.94C14.03,6.06 12.75,4.61 12.75,4.61L12,3.77M12,6.9C12.44,7.42 12.84,7.85 13.68,9.07C14.89,10.83 16,13.07 16,14.23C16,16.45 14.22,18.23 12,18.23C9.78,18.23 8,16.45 8,14.23C8,13.07 9.11,10.83 10.32,9.07C11.16,7.85 11.56,7.42 12,6.9Z" /></svg>
                    <p>humidity</p>
                </div>
                <p>${conditions.humidity}</p>
            </div>
            <div class="sunrise-disp sub-topic">
                <div class="sub-topic-div">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunset-up</title><path d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z" /></svg>
                    <p>sunrise</p>
                </div>
                <p>${conditions.sunrise.slice(0, 5)}</p>
            </div>
            <div class="sunset-disp sub-topic">
                <div class="sub-topic-div">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-sunset</title><path d="M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M5,16H19A1,1 0 0,1 20,17A1,1 0 0,1 19,18H5A1,1 0 0,1 4,17A1,1 0 0,1 5,16M17,20A1,1 0 0,1 18,21A1,1 0 0,1 17,22H7A1,1 0 0,1 6,21A1,1 0 0,1 7,20H17M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7Z" /></svg>
                    <p>sunset</p>
                </div>
                <p>${conditions.sunset.slice(0, 5)}</p>
            </div>
            <div class="visibility-disp sub-topic">
                <div class="sub-topic-div">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg>
                    <p>visibility</p>
                </div>
                <p>${conditions.visibility}</p>
            </div>
        </div>
    </div>
    `
}
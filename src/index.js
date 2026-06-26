import "./styles.css";

import { getWeatherConditions } from "./weatherAPI.js";
import { updateDisplay } from "./display.js";

const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("search");

let currentConditions = null;

function getCity() {
    const inputValue = searchBar.value.trim().replace(/\s+/g, "-");
    const validity = /^[A-Za-z-]+$/.test(inputValue)
    if (!validity) {
        return /^[A-Za-z-]+$/.test(inputValue)
    }
    return inputValue.toLowerCase();
}

searchBtn.addEventListener("click", async () => {
    currentConditions = await getWeatherConditions(getCity());
    updateDisplay(currentConditions, celciusOption);
})

const celciusOption = document.querySelector(".celcius");
const farenOption = document.querySelector(".faren");
const tempBox = document.querySelector(".temp-box");

tempBox.addEventListener("click", () => {
    const celciusChosen = celciusOption.classList.contains("chosen-temp");
    
    if (celciusChosen) {
        celciusOption.classList.remove("chosen-temp");
        farenOption.classList.add("chosen-temp")
    } else {
        farenOption.classList.remove("chosen-temp");
        celciusOption.classList.add("chosen-temp")
    }

    if (currentConditions) updateDisplay(currentConditions, celciusOption);
})
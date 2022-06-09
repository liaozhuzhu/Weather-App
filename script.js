let inputVal = document.querySelector("#city-input");
let submitBtn = document.querySelector("#submit-button");
let city = document.querySelector("#city-display");
let  description = document.querySelector("#description");
let temperatureC = document.querySelector("#temp");
let temperatureF = document.querySelector("#temp");
let unitBtn = document.getElementById("unit-button");

let apiKey = "2e28d7e9243bc054f306ec962e33fb4e";

// Convert Kelvin to Celsius
function convertKeltoC(val) {
    return (val - 271.5).toFixed(2);
}

function convertCtoF(val) {
    return (val * 9/5) + 32;
}

// Fetch Method
submitBtn.addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputVal.value + "&appid=" + apiKey)
    .then(res => res.json())
    .then(data => {
        let nameVal = data["name"];
        let desc = (data["weather"][0]["description"]).toUpperCase();
        let tempC = convertKeltoC(data["main"]["temp"]);
        let tempF = convertCtoF(tempC);

        city.innerHTML = `<span>${nameVal}</span>'s Weather`;
        description.innerHTML = `<span>${desc}</span>`;
        temperatureC.innerHTML = `<span>${tempC}°C</span>`;
        //temperatureF.innerHTML = `<span>${tempF}°F</span>`;
    })
    .catch(err => alert ("Enter a Valid City"));
    displayUnitButton(true);
});

// Display Unit Button
function displayUnitButton(booIn) {
    if(booIn == true) {
        unitBtn.style.display = "inline";
    }
    else {
        unitBtn.style.display = "none";
    }
}

// Change Unit
function changeUnit() {

}

displayUnitButton(false);
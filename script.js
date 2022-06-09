let inputVal = document.querySelector("#city-input");
let submitBtn = document.querySelector("#submit-button");
let city = document.querySelector("#city-display");
let  description = document.querySelector("#description");
let temperature = document.querySelector("#temp");

apiKey = "2e28d7e9243bc054f306ec962e33fb4e";

// Convert Kelvin to Celsius
function convertKeltoC(val) {
    return (val - 273).toFixed(2);
}

// Fetch Method
submitBtn.addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputVal.value + "&appid" + apiKey)
    .then(res => res.json())
    .then(data => {
        let nameVal = data["name"];
        let desc = data["weather"][0]["description"];
        let temp = data["main"]["temp"];
        city.innerHTML = `Weather of <span>${nameVal}</span>`
    })
});

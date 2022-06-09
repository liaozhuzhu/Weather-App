locationBtn = document.getElementById("curr-location-id");


function init() {
    document.getElementById("search-id");
    document.addEventListener("click", fetchWeather);
}

/*function fetchWeather() {

}*/

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(succ, fail);
    }
    else {
        alert("Location Not Supported");
    }
}

function succ(position) {
    console.log(position);
}

function fail(error) {
    console.log(error);
}

locationBtn.onclick = function(){getLocation()}
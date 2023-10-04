const apiUrl = "https://api.openweathermap.org/data/2.5/forecast";
const apiKey = "68b22ab80eda8ec6492635c3f35eaab4"; // i don't really care if this is stolen

// elements
const searchInputEl = document.querySelector("#search-input");
const searchBtnEl = document.querySelector("#search-btn");

function searchCity(event) {
    event.preventDefault()

    city = searchInputEl.value.split(' ').join('_').toLowerCase(); // replace spaces with underscores for api url
    console.log(city);

    // fetch from OpenWeather
    fetch(apiUrl + "?q=" + city + "&appid=" + apiKey)
        .then(function (response) {
            if (response === 404) {
                // add error message to page here
                console.log("bad input - city weather data not found");
            }
            return response.json();
        })
        .then(function (data) {
            weatherData = data;
            console.log(weatherData);
            renderWeather();
            renderForecast();
            addToLocal();
        });
}

function renderWeather() {
    
}

function renderForecast() {

}

function addToLocal() {

}

searchBtnEl.addEventListener("click", searchCity);
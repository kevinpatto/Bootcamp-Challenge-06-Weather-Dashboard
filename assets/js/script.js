const apiUrl = "https://api.openweathermap.org/data/2.5/forecast";
const todayApiUrl = "https://api.openweathermap.org/data/2.5/weather"
const apiKey = "68b22ab80eda8ec6492635c3f35eaab4"; // i don't really care if this is stolen

// elements
const searchInputEl = document.querySelector("#search-input");
const searchBtnEl = document.querySelector("#search-btn");
const btnGroupDiv = document.querySelector("#btn-group");

var cityNameEl = document.querySelector("#city-name");
var tempEl = document.querySelector("#temp");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");

var weatherData;
var todayWeatherData;

function searchCity(event) {
    event.preventDefault()

    var city = searchInputEl.value.split(' ').join('_').toLowerCase(); // replace spaces with underscores for api url
    console.log(city);

    // fetch forecast
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
            renderForecast();
        });
    // fetch today's weather
    fetch(todayApiUrl + "?q=" + city + "&appid=" + apiKey)
        .then(function (response) {
            if (response === 404) {
                // add error message to page here
                console.log("bad input - city weather data not found");
            }
            return response.json();
        })
        .then(function (data) {
            todayWeatherData = data;
            console.log(todayWeatherData);
            renderWeather();
        });
}

function renderWeather() {
    // TODO: add icon for weather
    cityNameEl.textContent = todayWeatherData.name + " (" + dayjs().format("MM/DD/YYYY") + ") " + todayWeatherData.weather[0].main;
    fahrenheit = Math.floor((todayWeatherData.main.temp - 273.15) * 1.8 + 32);
    tempEl.textContent = "Temp: " + fahrenheit + "\u00B0F";
    windEl.textContent = "Wind: " + todayWeatherData.wind.speed + " MPH";
    humidityEl.textContent = "Humidity: " + todayWeatherData.main.humidity + "%";
}

function renderForecast() {

}

function addToLocal() {

}

searchBtnEl.addEventListener("click", searchCity);
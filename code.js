const apiKey = "ddc70978d0884ecf952183243231909";
const apiURL = "http://api.weatherapi.com/v1/current.json?";
const searchBox = document.querySelector('#input');
const button = document.getElementById('search-button');

button.addEventListener('click', async function() {
    let inputValue = searchBox.value;
    try {
        searchBox.value = "";
        var data = await checkWeather(inputValue);
        document.querySelector(".temp").innerHTML = data.current.temp_f + "°F";
        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".weather-icon").src = data.current.condition.icon;
        document.querySelector(".weather-condition").innerHTML = data.current.condition.text;
        document.querySelector(".humidity").innerHTML = "Humidity: " + data.current.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = "Wind: " + data.current.wind_mph + "mph";
        document.querySelector(".wind-direction").innerHTML = "Direction: " + data.current.wind_dir;
        document.querySelector(".pressure").innerHTML = "Pressure: " + data.current.pressure_in + " inHg";
        console.log(data);
    } catch (error) {
        console.log(error);
    }
});

async function checkWeather(location) {
    const response = await fetch(apiURL + `key=${apiKey}&q=${location}&aqi=no`);
    var data = await response.json();
    return data;
}

document.addEventListener("DOMContentLoaded", () => {
    let cityInput = document.getElementById("city-input");
    let searchButton = document.getElementById("search-btn");
    let location = document.getElementById("location");
    let temperature = document.getElementById("temperature");
    let humidity = document.getElementById("humidity");
    let windSpeed = document.getElementById("wind");
    let weatherCard = document.getElementById("weather-card");
    let error = document.getElementById("error-message");

    const API_KEY = "4e5213335713baa974a89a1b13b1f895";

    // searchButton.addEventListener("click", async () => {
    //     const city = cityInput.value.trim();
    //     if(!city) {
    //         noInputError();
    //         return;
    //     }
    //     weatherCard.classList.remove("hidden");
    //     error.classList.add("hidden");
    //     try {
    //         const weatherData = await fetchWeatherData(city);
    //         dispalyWeather(weatherData);
    //     } catch (error) {
    //         cityNameError();
    //     }
    // })

    async function searchWeather() {
        const city = cityInput.value.trim();
        if (!city) {
            noInputError();
            return;
        }
        weatherCard.classList.remove("hidden");
        error.classList.add("hidden");
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeather(weatherData);
        } catch (error) {
            cityNameError();
        }
    }
    cityInput.addEventListener("keypress", async (event) => {
        if (event.key === "Enter") {
            await searchWeather();
        }
    });
    searchButton.addEventListener("click", async () => {
        await searchWeather();
    });
    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const responce = await fetch(url);

        if(!responce.ok){
            throw Error;
        }

        const data = await responce.json();

        return data;
    }
    function displayWeather(data) {
        const {name, main, weather, wind} = data;

        location.textContent = name;
        temperature.textContent = `Temperature: ${main.temp}`;
        humidity.textContent = `Humidity: ${main.humidity}`;
        windSpeed.textContent = `Wind Speed: ${(wind.speed * 3.6).toFixed(3)} km/h`;
    }
    function noInputError() {
        weatherCard.classList.add("hidden");
        error.innerText = "Please enter a city name.";
        error.classList.remove("hidden");
    }
    function cityNameError() {
        weatherCard.classList.add("hidden");
        error.textContent = "Please enter a vaild city name.";
        error.classList.remove("hidden");
    }
});
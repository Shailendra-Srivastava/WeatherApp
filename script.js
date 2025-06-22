const fetchWeatherData = async (cityname) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityname},in&lang=hi&units=metric&appid=79fa9241c77d9c51d25a2f60b0c532b1`
  );
  const weatherData = await response.json();
  console.log(weatherData);

  let weatherContainer = document.querySelector("#weather-data");
  weatherContainer.innerHTML = `<div class="icon">
          <img
            src="https://openweathermap.org/img/wn/${
              weatherData.weather[0].icon
            }@4x.png"
            alt="Weather Icon"
          />
        </div>
        <div class="temperature">${Math.round(
          weatherData.main.temp
        )}<sup>o</sup>C</div>
        <div class="description">${weatherData.weather[0].description}</div>
        <div class="details">
          <div>Feels like: ${Math.round(weatherData.main.feels_like)}°C</div>
          <div>Humidity: ${weatherData.main.humidity}%</div>
          <div>Wind speed: ${weatherData.wind.speed} m/s</div>
        </div>`;
};

let weatherForm = document.querySelector("#weather-form");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = document.querySelector("#city-input").value;
  fetchWeatherData(cityName);
});
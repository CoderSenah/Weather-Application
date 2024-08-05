function updateWeather(response) {
  let temperatureElement = document.querySelector("#weather-temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let city = document.querySelector("#weather-app-city");
  city.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "409of717057a0ce5t4fdc2f2b69b384a";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function searchForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormEmelent = document.querySelector("#search-form");
searchFormEmelent.addEventListener("submit", searchForm);
searchCity("Paris");

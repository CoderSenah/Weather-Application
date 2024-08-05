function updateWeather(response) {
  let temperatureElement = document.querySelector("#weather-temperature");
  let descriptionElement = document.querySelector("#discription");
  let city = document.querySelector("#weather-app-city");
  let humidity = document.querySelector("#humidity");
  let windElement = document.querySelector("#windSpeed");
  let timeElement = document.querySelector("#currentTime");
  let iconImage = document.querySelector("#icon");
  let date = new Date(response.data.time * 1000);
  city.innerHTML = response.data.city;
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  iconImage.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon"/>`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
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

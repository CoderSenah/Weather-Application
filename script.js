function searchForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let city = document.querySelector("#weather-app-city");
  city.innerHTML = searchInput.value;
}

let searchFormEmelent = document.querySelector("#search-form");
searchFormEmelent.addEventListener("submit", searchForm);

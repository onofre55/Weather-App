//Getting html elements

const userInput = document.querySelector(".input");
const searchButton = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".weather-icon img");
const temp = document.querySelector(".temp");
const userCity = document.querySelector(".city");
const description = document.querySelector(".desc");
const error = document.querySelector(".not-found");
const tempContainer = document.querySelector(".weather-temp");
const descContainer = document.querySelector(".weather-description");
const cityContainer = document.querySelector(".weather-city");

const API_KEY = 'copy-your-api-key-here';

//Getting weather info 

const fetchWeather = async () => {

    try {

    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=${API_KEY}&units=metric`;

    let response = await fetch(api_url);

    let data = await response.json();

   //If city doesnt exit or invalid input is enter

   if(!response.ok) {

    console.error(data.message);
    error.style.display = "block";

   } else {

    weatherDisplay(data);

   }

    } catch(error) {
        console.error(error);
    }
}

const weatherDisplay = (data) => {

    //Hide error message

    error.style.display ="none";

    //Updating weather data 

    temp.innerText = data.main.temp + " °C";
    userCity.innerText = data.name;
    description.innerText = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const urlIcon = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.src = urlIcon;

    //Making weather icon and weather information visible

    weatherIcon.style.display = "block";
    tempContainer.style.display = "block";
    descContainer.style.display = "block";
    cityContainer.style.display = "block";

    console.log(data);
}

const searchCity = () => {
    fetchWeather();
}

searchButton.addEventListener("click", searchCity);


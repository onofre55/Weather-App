# Weather-App
A weather app built with HTML, CSS and JavaScript. The app lets users search for any city and displays the current weather (temperature, description,  and location). The weather icon also updates based on the API data.

# What I learned

* How to make API calls using fetch() and handle asynchronous operations with async and await.
* Updating the page based on API responses (temperature, description, location, and icon).
* Basic error handling for invalid user input or failed API responses.
* Integrating OpenWeather API to fetch real time weather data.

# How to Use

1. **Get your API Key:**
   - Sign up on OpenWeather: https://openweathermap.org/
   - Copy your API key from the "My API keys" section in your account settings.

2. **Configure the API Key:**
   - Open the `weather.js` file.
   - Find the line:
     ```const API_KEY = 'copy-your-api-key-here';``` and replace it with your own API key.

3. **Run the App:**
   - After configuring the API key, open `index.html` in your browser, and you can start searching for the weather in any city of the world!

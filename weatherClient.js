class WeatherClient {
    constructor() {
        this.apiKey = require('./apiKey');
    }

    fetchWeatherData(city) {
        const apiURL = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`;
        return fetch(apiURL)
            .then((response) => response.json())
            
    }
}

const client = new WeatherClient();

client.fetchWeatherData('London').then((weatherData) => {
    console.log(`Weather data for ${weatherData.name}:`)
    console.log(weatherData);
});

const axios = require('axios');

class Forecast {
  constructor(weatherData) {
    this.forecast = weatherData.weather.description;
    this.low = weatherData.low_temp;
    this.high = weatherData.high_temp;
    this.date = weatherData.datetime;
  }
}

async function getWeather(request, response) {
  try {
    const { lat, lon } = request.query;

    if (!lat || !lon) {
      return response
        .status(400)
        .json({ error: 'Latitude and Longitude are required parameters' });
    }

    const weatherApiKey = process.env.WEATHER_API_KEY;

    const apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${weatherApiKey}`;

    const apiResponse = await axios.get(apiUrl);

    const forecastArray = apiResponse.data.data.map(dayData => new Forecast(dayData));

    response.status(200).json(forecastArray);

  } catch (error) {
    response.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = getWeather;

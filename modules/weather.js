const axios = require('axios');

const weatherCache = {};

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
    const cacheKey = `${lat},${lon}`;

    if (weatherCache[cacheKey] && isCacheValid(weatherCache[cacheKey])) {
      response.status(200).json(weatherCache[cacheKey]);
      return;
    }

    const apiUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${weatherApiKey}`;

    const apiResponse = await axios.get(apiUrl);

    const forecastArray = apiResponse.data.data.map(dayData => new Forecast(dayData));

    weatherCache[cacheKey] = {
      data: forecastArray,
      timestamp: Date.now()
    };
    console.log('weatherCache ', weatherCache);
    response.status(200).json(forecastArray);

  } catch (error) {
    response.status(500).json({ error: 'Internal server error' });
  }
}

function isCacheValid(cacheEntry) {
  const CACHE_DURATION = 60 * 60 * 1000;
  const currentTime = Date.now();

  return currentTime - cacheEntry.timestamp <= CACHE_DURATION;
}

module.exports = getWeather;

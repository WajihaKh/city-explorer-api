'use strict';

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (request, response) => {
  response.send('Hello from Express Server!');
});

class Forecast {
  constructor(weatherData) {
    this.forecast = weatherData.weather.description;
    this.low = weatherData.low_temp;
    this.high = weatherData.high_temp;
    this.date = weatherData.datetime;
  }
}

app.get('/weather', async (request, response) => {
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
    console.log('forecastArray ', forecastArray);

    response.status(200).json(forecastArray);

  } catch (error) {
    response.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);

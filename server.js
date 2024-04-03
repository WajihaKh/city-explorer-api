'use strict';

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const weatherData = require('./data/weather.json');
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (request, response) => {
  response.send('Hello from Express Server!');
});

class Forecast {
  constructor(dayData) {
    this.date = dayData.datetime;
    this.description = dayData.weather.description;
  }
}

app.get('/weather', (request, response) => {
  try {
    const { lat, lon } = request.query;

    // if (!lat || !lon) {
    //   return response
    //     .status(400)
    //     .json({ error: 'Latitude and Longitude are required parameters' });
    // }
    const foundWeather = weatherData.find((weather) => {
      return weather.lat === lat && weather.lon === lon;
    });

    if (foundWeather) {
      //   response.status(200).json(foundWeather);
      // } else {
      //   response
      //     .status(400)
      //     .json({ error: 'Latitude and Longitude are required parameters' });
      // }
      const forecastArray = foundWeather.data.map(
        (dayData) => new Forecast(dayData)
      );

      response.status(200).json(forecastArray);
    }
  } catch (error) {
    response.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);

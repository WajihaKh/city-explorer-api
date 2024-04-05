'use strict';

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const getMovies = require('./modules/movies');
const getWeather = require('./modules/weather');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (request, response) => {
  response.send('Hello from Express Server!');
});


app.get('/weather', getWeather);

app.get('/movies', getMovies);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);

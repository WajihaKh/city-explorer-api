const axios = require('axios');

class Movie {
  constructor(movieData) {
    this.title = movieData.title;
    this.overview = movieData.overview;
    this.release_date = movieData.release_date;
  }
}

async function getMovies(request, response) {
  try {

    const{ city } = request.query;
    console.log('city', city);

    if (!city) {
      return response
        .status(400)
        .json({ error: 'City is a required parameter' });
    }

    const movieApiKey = process.env.MOVIE_API_KEY;

    const apiUrl = (`https://api.themoviedb.org/3/search/movie?api_key=${movieApiKey}&language=en-US&query=${city}&page=1&include_adult=false`);

    const apiResponse = await axios.get(apiUrl);

    const movieArray = apiResponse.data.results.map(movieData => new Movie(movieData));
    console.log('movieArray', movieArray);

    response.status(200).json(movieArray);

  } catch (error) {
    response.status(500).json({ error: 'Internal server error'});
  }
}

module.exports = getMovies;
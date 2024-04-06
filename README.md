# City Explorer Api

**Author** Wajiha Khan

**Version**: 1.0.0

**Overview**:

- This application allows users to search for weather forecasts by city. It combines frontend and backend elements to fetch location coordinates using a third-party API and then retrieves weather forecast data from a local JSON file. The goal is to provide users with quick access to weather information for planning or general knowledge purposes.

**Getting Started**:

- Create a repository on GitHub and clone it locally.
- Run the command npm init to initialize a new Node.js project.
- Install the necessary dependencies (express, dotenv, cors) using npm.
- Manually add a .gitignore file to exclude node_modules and other unnecessary files from version control.
- Create a weather.json file or copy the contents of an existing one into your project directory.
- Set up a .env file to store environment variables such as the port number, ensuring that it is listed in the .gitignore file to keep sensitive information secure.

**Architecture**:

- Language: Javascript
- Framework: Express.js
- Data Storage: JSON file
- Dependencies: express, dotenv, cors

**Change Log**:

04/02/2024 10:30 pm

- Estimate of time needed to complete: 3 hours
- Start time: 5:30 pm
- Finish time: 10:30
- Actual time needed to complete: 5 hours

**Version**: 2.0.0

**Overview**:

- This application combines weather forecast and movie search functionalities into one platform. Users can obtain weather forecasts based on their location and search for movies related to a specific city. It aims to provide convenience for users interested in planning activities based on weather conditions and exploring movie options for entertainment purposes.

**Getting Started on Weather**:

- Obtain API key from the weather API provider
- Set up an environment variable for weather API key
- Parse query parameters from the cilent request to identify the location
- Update the weather route to make an Axios request to the weather API with latitude and longitude
- Shape the API results using a class and respond with an array of objects corresponding to each day's forecast

**Getting Started on Movie**:

- Obtain API key from the movie API provider
- Set up an environment variable for movie API key
- Create a route for movies to make an Axios request to The Movie Databse API using the provided location
- Ensure the movie search includes movies containing the entered location name.
- Define a class for movie results and respond with an array of objects corresponding to each movie in the API data

**Architecture**:

- Language: Javascript
- Framework: Express.js
- Data Storage: JSON file
- Dependencies: express, dotenv, cors, axios

**Change Log**:

04/04/2024 12:30 am

- Estimate of time needed to complete: 4 hours
- Start time: 7:00 pm --break at 9:00-- 11:35 pm
- Finish time: 12:30 am
- Actual time needed to complete: 3 hours

**Version**: 3.0.0

**Overview**:

- This application focuses on providing weather and movie data through HTTP requests. It's designed to separate these functionalities into distinct modules within the server-side code. This approach enhances code organization, readability, and scalability. By modularizing these features, the server can handle requests more efficiently, improving overall performance and maintainability. The goal is to offer users a seamless experience when querying weather or movie information, enchancing the application's usability and versatility.

**Getting Started on Weather**:

- Implement weather module
- Move weather-related functionality from the main entry point. Ensure that the module exports the necessary functions to handle weather-related requests.
- Integrate weather module and configure the weather endpoint to use this function for handling weather requests.

**Getting Started on Movie**:

- Implement movie module
- Move movie-related functionality from the main entry point. Ensure that the module exports the necessary functions to handle movie-related requests.
- Integrate weather module and configure the movie endpoint to use this function for handling movie requests

**Architecture**:

- Language: Javascript
- Framework: Express.js
- Data Storage: JSON file
- Dependencies: express, dotenv, cors, axios

**Change Log**:

04/05/2024 6:20 pm

- Estimate of time needed to complete: 2 hours
- Start time: 6:00 pm
- Finish time: 6:20 pm
- Actual time needed to complete: 20 minutes

**Version**: 3.0.0

**Overview**:

- This application is a backend server designed to provide weather and movie data based on user requests. The primary problem domain is to efficiently retrieve and deliver weather forecasts and movie information to client applications, minimizing external API calls by implementing an in-memory caching mechanism.

**Getting Started**:

- Understanding starter code
- Integrate the start code into the modules and debug any issues to ensure both modules run smoothly.
- Implement separate objects in their respective modules and to store cached data.
- Within each module, require the cache object to enable caching functionality.
- Modify the functions in each modules to check for recent data before making API requests.
- Implement a cache validation function to determine the validity of cached data based on a specified timespan.
- Update the corresponding endpoints in the main entry point.

**Architecture**:

- Language: Javascript
- Framework: Express.js
- Data Storage: JSON file
- Dependencies: express, dotenv, cors, axios

**Change Log**:

04/05/2024 9:40 pm

- Estimate of time needed to complete: 2 hours
- Start time: 8:00 pm
- Finish time: 9:40 pm
- Actual time needed to complete: An hour and 40 minutes

[!IMPORTANT]

In summary, the design of this project showcases fundamental principles of backend development, including modularity, API integration, caching, error handling, security best practices, and adherence to RESTful design principles. The focus on optimizing performance through caching aligns with real-world scenarios where minimizing external API calls is crucial for efficiency and scalability.

## Credits

![WEATHERBIT API](https://www.weatherbit.io/api)
![THE MOVIE DB API](https://developer.themoviedb.org/docs/getting-started)
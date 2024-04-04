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

**Getting started on weather**:

- Obtain API key from the weather API provider
- Set up an environment variable for weather API key
- Parse query parameters from the cilent request to identify the location
- Update the weather route to make an Axios request to the weather API with latitude and longitude
- Shape the API results using a class and respond with an array of objects corresponding to each day's forecast

**Getting started on movie**:

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

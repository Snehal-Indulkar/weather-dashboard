# Weather Dashboard

## Project Overview

A simple, responsive weather dashboard application that allows users to search for cities and view real-time weather data. The app uses the OpenWeatherMap API to fetch weather information, displays temperature, humidity, weather conditions, and wind speed, and allows users to save and view previously searched cities.

## Features

- City Search: Search for a city and view its current weather, including temperature, weather conditions, humidity, and wind speed.
- Save Cities: The app allows users to save the cities they've searched for, and view them in a list for quick access.
- Responsive Design: The app is fully responsive and looks good on various screen sizes, making it suitable for both desktop and mobile usage.
- Real-time Data: Weather information is fetched in real-time using the OpenWeatherMap API.
- Local Storage: Cities that users search for are saved in the browser's local storage, ensuring that the city list is persisted across sessions.

## Technologies Used

### Frontend:
 - HTML
 - CSS
 - JavaScript
 - Material Icons (via Google Fonts)
### Backend:
 - Node.js
 - Fetch API (to request weather data from OpenWeatherMap)
 - dotenv (to manage API keys securely)

## Setup Instructions

### Prerequisites
To run this project locally, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)

1. Clone the repository:
- git clone https://github.com/your-username/weather-dashboard.git

2. Navigate to the project directory:
- cd weather-dashboard

3. Install the required dependencies:
- npm install

4. Create an account at OpenWeatherMap and generate an API key.
   Create a .env file in the root of the project and add your OpenWeatherMap API key:
- API_KEY=your_openweathermap_api_key

6. Start the server:
- npm start

7. Open your browser and go to http://localhost:3000 to view the application.

## API Documentation

The application uses the OpenWeather API to fetch real-time weather data. The server acts as a proxy to handle API requests securely using an API key stored in environment variables.

### Endpoint

GET /weather
Fetches weather information for a specific city.

Request Parameters:

| Parameter	| Type | Required |	Description |
|-----------|------|----------|-------------|
|city	|string	|Yes |	The name of the city to search for. |

## Design Desicions

1. #### Frontend Framework
 - Used HTML, CSS, and JavaScript for simplicity and lightweight structure.

2. #### Weather API
 - Chose OpenWeatherMap API for detailed weather data and ease of use.

3. #### Backend
 - Node.js with Express for efficient API handling and serving static files.

4. #### Styling
 - Modern, responsive UI using CSS and Google Material Symbols.

5. #### City Search & Caching
 - Search input with localStorage for saving recent searches to enhance user experience.

6. #### Error Handling
 - Simple alerts for invalid input or API errors to improve usability.

7. #### Environment Variables
 - Stored API keys securely in a .env file for better security.

8. #### Saved Cities Popup
 - Modal-style design to keep the interface clean and organized.

## Future Improvements

1. #### Enhanced Weather Data

  - Add extended forecasts (e.g., 7-day weather trends).
  - Include hourly weather updates for more precise data.

2. #### Geolocation Support

  - Automatically detect the user’s location to display local weather by default.

3. #### User Authentication

  - Allow users to create accounts and save personalized city lists across devices.

4. #### Customizable Themes

  - Introduce light/dark mode and custom themes for a personalized experience.

5. #### Graphical Weather Visualization

  - Include interactive charts and graphs for temperature, humidity, and wind speed trends.

6. #### API Alternatives

  - Implement fallback support for additional weather APIs to ensure consistent service.

## Notes About Platform Limitations

1. #### Cold Starts
 - Initial server response may take longer if deployed on platforms by shutting down or "sleeping" during inactivity.

2. #### API Rate Limits

 - OpenWeatherMap API has a limited number of requests per minute based on the selected plan, which may affect high-traffic usage.

3. #### LocalStorage Limits

 - Storing too many cities in localStorage may hit browser-specific size limitations.

4. #### Browser Compatibility

 - Performance may vary across older browser versions or non-standard browsers.



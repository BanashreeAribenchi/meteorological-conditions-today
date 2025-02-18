# Weather App - React with TypeScript

A simple weather application that allows users to check the current weather conditions for any city. Built using React, TypeScript, and integrated with the OpenWeather API.
This app allows users to search for a city, view the temperature, weather description, and weather icons in a user-friendly card layout.

## Features

* Weather information display: Shows the temperature and weather description (clear sky, clouds, rain, etc.).
* Search functionality: Search for any city to view its weather.
* Responsive UI: A simple yet responsive design that adapts to various screen sizes.
* Icons for weather conditions: Displays appropriate weather icons based on the weather data.
* Caching: Caches weather data locally for faster subsequent requests.

## Tech Stack
* Frontend:
  * React
  * TypeScript
* Weather API: OpenWeatherMap API
* Build Tool: Parcel bundler

## Getting Started
### Prerequisites
Before you begin, ensure that you have the following installed:
* Node.js and npm (Node Package Manager) - Install Node.js
* Parcel - Install Parcel (or use the npx command directly)

### Installation
1. Clone the repository to your local machine:
 ```git clone https://github.com/your-username/weather-app.git```
2. Navigate to the project directory: ```cd weather-app```
3. Install the dependencies: ```npm install```
4. Set up the OpenWeather API:
   * Create an account on OpenWeatherMap if you don't have one.
   * Get your API key from [OpenWeatherMap API keys page](https://openweathermap.org/api).
   * Add your API key to the code where the API is called (usually inside ```src``` directory in ```index.tsx``` or wherever the API request is made). Replace ```YOUR_API_KEY``` in the URL.
  
  #### Example API call:
```
const API_KEY = "YOUR_API_KEY";
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
```
5. Run the app in development mode:
```
npm start
```
6. Open your browser and go to http://localhost:1234 to see the weather app in action.

## How to Use
1. Type the name of the city in the search bar at the top.
2. The app will display the current weather information for the entered city, including:
* City Name
* Temperature (in Celsius)
* Weather Description (clear sky, clouds, rain, etc.)
* Weather Icon
3. The weather data will be cached locally for subsequent requests.


## Folder Structure
```
/weather-app
  ├── /src
  │   ├── index.tsx        # Entry point (React component)
  │   ├── App.tsx          # Main App component
  │   ├── styles.css       # Custom CSS
  ├── index.html           # Root HTML file
  ├── package.json         # Project dependencies and scripts
  └── tsconfig.json        # TypeScript configuration
```

## Technologies Used
* React: JavaScript library for building user interfaces.
* TypeScript: Type-safe version of JavaScript to enhance development experience.
* CSS: Utility-first CSS framework to build responsive, customizable UIs.
* Parcel: Web application bundler to bundle your JavaScript files, images, and styles.
* OpenWeather API: A third-party weather data provider for current weather information.

## Contributing
If you have suggestions, bug fixes, or enhancements, please follow these steps:

1. Fork the repository.
2. Create your feature branch (git checkout -b feature-name).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to the branch (git push origin feature-name).
5. Open a Pull Request.

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const API_KEY = "52d672399b4ec9666a42abc5874f3411"; // API key from OpenWeather

const App: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="container">
      <h1>Meteorological Conditions Today</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
        />
      </div>

      {/* Weather Card */}
      {weather ? (
        <div className="weather-card">
          <h2>{weather.name}</h2>

          {/* Weather Icon */}
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="weather-icon"
          />

          <p className="temperature">{weather.main.temp}°C</p>
          <p className="description">{weather.weather[0].description}</p>
        </div>
      ) : (
        <p className="loading">Loading weather data...</p>
      )}
    </div>
  );
};
export default App;

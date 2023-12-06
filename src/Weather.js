import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      <ul>
        <li>Temperature:{weather.temperature}°C</li>
        <li>Description:{weather.description}</li>
        <li>Humidity:{weather.humidity}%</li>
        <li>Wind:{weather.wind}km/h</li>
        <li>
          <img src={weather.icon} alt="Weather Icon"></img>
        </li>
      </ul>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2daf65f0cdaa917f11026e8a128ce271&units=metric`;

  axios.get(url).then(showWeather);

  return (
    <div className="weatherSearch">
      <form onSubmit={handleSubmit} className="Weather">
        <input type="search" onChange={updateCity} placeholder="Type a city" />
        <input type="submit" value="Search" />
      </form>
      <h2>{message}</h2>
    </div>
  );
}

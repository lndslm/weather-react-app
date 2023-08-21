import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import WeatherInfo from "./WeatherInfo";

export default function Current() {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let iconImage = `https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

  function handleSubmit(event) {
    event.preventDefault();
    setReady(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayWeatherData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Current">
        <form onSubmit={handleSubmit}>
          <div className="search-engine">
            <div className="card-body">
              <div className="row">
                <div className="col-10">
                  <input
                    type="text"
                    name="city"
                    className="city-name"
                    placeholder="Enter city name"
                    autoComplete="off"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-2">
                  <button type="button" className="btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                  <button type="button" className="btn">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    let apiKey = `86a9ba8a3f6c64c4f7dcbf5d435a1c77`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeatherData);

    return "loading...";
  }
}

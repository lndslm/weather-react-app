import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function searchCity() {
    let apiKey = `86a9ba8a3f6c64c4f7dcbf5d435a1c77`;
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(displayWeatherData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "86a9ba8a3f6c64c4f7dcbf5d435a1c77";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}
&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(displayWeatherData);
  }

  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
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
                  <button type="button" className="btn" onClick={handleSubmit}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                  <button type="button" className="btn" onClick={getPosition}>
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
    searchCity();
    return "Loading...";
  }
}

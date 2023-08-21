import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
      date: "Friday 12:12PM",
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
        <Card className="card current-datas">
          <Card.Body className="card-body">
            {" "}
            <Row className="row">
              <Col className="col-8">
                <h1>{weatherData.city}</h1>
                <p className="date">{weatherData.date}</p>
                <h2>
                  <img src={iconImage} alt={weatherData.description} />
                  <span className="sky">{weatherData.description}</span>
                </h2>
              </Col>
              <Col className="col-4">
                <h3>
                  <span className="current-temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="units">
                    <small>°C | F</small>
                  </span>
                </h3>
                <p className="weather-datas">
                  wind : {weatherData.wind} km/h
                  <br />
                  humidity : {weatherData.humidity}%
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    let apiKey = `86a9ba8a3f6c64c4f7dcbf5d435a1c77`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeatherData);

    return "loading...";
  }
}

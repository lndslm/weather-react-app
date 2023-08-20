import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Current() {
  let [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `86a9ba8a3f6c64c4f7dcbf5d435a1c77`;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(displayWeatherData);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState(null);
  let iconImage = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  function displayWeatherData(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
  }

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
              <h1>{city}</h1>
              <p className="date">Friday 12:12 PM</p>
              <h2>
                <img src={iconImage} alt={description} />
                <span className="sky">{description}</span>
              </h2>
            </Col>
            <Col className="col-4">
              <h3>
                <span className="current-temperature">
                  {Math.round(temperature)}
                </span>
                <span className="units">
                  <small>°C | F</small>
                </span>
              </h3>
              <p className="weather-datas">
                wind : {wind} km/h
                <br />
                humidity : {humidity}%
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

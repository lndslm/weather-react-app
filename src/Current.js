import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import city from "./Search";

export default function Current() {
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState(null);

  function displayWeatherData(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(response.data.weather[0].icon);
  }

  let apiKey = `86a9ba8a3f6c64c4f7dcbf5d435a1c77`;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeatherData);

  return (
    <div className="Current">
      <Card className="card current-datas">
        <Card.Body className="card-body">
          {" "}
          <Row className="row">
            <Col className="col-8">
              <h1>Lyon</h1>
              <p className="date">Friday 12:12 PM</p>
              <h2>
                <img
                  src="https://openweathermap.org/img/wn/01n@2x.png"
                  alt={description}
                />
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

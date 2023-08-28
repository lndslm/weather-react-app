import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <Card className="card">
          <Card.Body className="card-body">
            <Row className="row">
              <Col className="col">
                <div className="weather-forecast-date">{forecast[0].dt}</div>
                <div className="weather-forecast-icon">
                  <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
                </div>
                <div className="weather-forecast-temperature">
                  <span className="weather-forecast-temperature-max">
                    {forecast[0].temp.max}°
                  </span>
                  <span className="weather-forecast-temperature-min">
                    {forecast[0].temp.min}°
                  </span>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiKey = "86a9ba8a3f6c64c4f7dcbf5d435a1c77";
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={minutely,hourly}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

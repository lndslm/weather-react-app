import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let units = "metric";
    let apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <Card className="card">
          <Card.Body className="card-body">
            <Row className="row">
              {forecast.map(function(dailyForecast, index) {
                if (index < 5) {
                  return (
                    <Col className="col" key={index}>
                      <WeatherForecastDay data={dailyForecast} />
                    </Col>
                  );
                } else {
                  return null;
                }
              })}
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  } else {
    load();
    return null;
  }
}

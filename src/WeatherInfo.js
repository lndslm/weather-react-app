import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function weatherInfo(props) {
  return (
    <div>
      <Card className="card current-datas">
        <Card.Body className="card-body">
          {" "}
          <Row className="row">
            <Col className="col-8">
              <h1>{props.data.city}</h1>
              <p className="date">
                <FormattedDate date={props.data.date} />
              </p>
              <h2>
                <WeatherIcon code={props.data.icon} className="weatherIcon" />
                <span className="sky">{props.data.description}</span>
              </h2>
            </Col>
            <Col className="col-4">
              <h3>
                <span className="current-temperature">
                  {Math.round(props.data.temperature)}
                </span>
                <span className="units">
                  <small>°C | F</small>
                </span>
              </h3>
              <p className="weather-datas">
                wind : {props.data.wind} km/h
                <br />
                humidity : {props.data.humidity}%
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

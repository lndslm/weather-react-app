import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormattedDate from "./FormattedDate";

export default function weatherInfo(props) {
  return (
    <div>
      <Card className="card current-datas">
        <Card.Body className="card-body">
          {" "}
          <Row className="row">
            <Col className="col-8">
              <h1>{props.city.city}</h1>
              <p className="date">
                <FormattedDate date={props.city.date} />
              </p>
              <h2>
                <img src={iconImage} alt={props.city.description} />
                <span className="sky">{props.city.description}</span>
              </h2>
            </Col>
            <Col className="col-4">
              <h3>
                <span className="current-temperature">
                  {Math.round(props.city.temperature)}
                </span>
                <span className="units">
                  <small>°C | F</small>
                </span>
              </h3>
              <p className="weather-datas">
                wind : {props.city.wind} km/h
                <br />
                humidity : {props.city.humidity}%
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

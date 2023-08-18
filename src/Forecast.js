import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Forecast() {
  return (
    <div className="Forecast">
      <Card className="card">
        <Card.Body className="card-body" id="forecast">
          <Row className="row">
            <Col className="col">
              <div className="weather-forecast-date">Mon</div>
              <div className="weather-forecast-icon">
                <span role="img" aria-label="cloudy">
                  ⛅
                </span>
              </div>
              <div className="weather-forecast-temperature">
                <span className="weather-forecast-temperature-max">6°</span>
                <span className="weather-forecast-temperature-min">-3°</span>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

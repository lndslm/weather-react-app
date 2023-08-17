import React from "react";

/*import "./Forecast.css";*/

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="card">
        <div className="card-body" id="forecast">
          <div className="row">
            <div className="col">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

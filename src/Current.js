import React from "react";

/*import "./Current.css";*/

export default function Search() {
  let weatherData = {
    city: "Honolulu",
    date: "Friday 12:12 PM",
    imgURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    description: "scattered clouds",
    temperature: 14,
    wind: 12,
    humidity: 45,
  };
  return (
    <div className="Current">
      <div className="card current-datas">
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <h1>{weatherData.city}</h1>
              <p className="date">{weatherData.date}</p>
              <h2>
                <img src={weatherData.imgURL} alt={weatherData.description} />
                <span className="sky">{weatherData.description}</span>
              </h2>
            </div>
            <div className="col-4">
              <h3>
                <span className="current-temperature">
                  {weatherData.temperature}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

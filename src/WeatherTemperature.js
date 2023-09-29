import React, { useState } from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <h3>
        <span className="current-temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <small>°C</small>
        </span>
      </h3>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";

const Location = ({ city, weather }) => {
  const units = useSelector((state) => state.units);
  const unitSymbol = units === "metric" ? "°C" : "°F";

  if (!weather) {
    return "Loading...";
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-light">
        Current temperature in{" "}
        <span className="text-sky-700 font-semibold">{city}</span>:
      </p>
      <p className="text-6xl py-10">
        {Math.round(weather.main.temp)}
        {unitSymbol}
      </p>
    </div>
  );
};

export default Location;

import React from "react";
import { useSelector } from "react-redux";

const WeatherData = ({ weather, extraData }) => {
  const units = useSelector((state) => state.units);
  const unitSymbol = units === "metric" ? "°C" : "°F";
  const speedUnit = units === "metric" ? "m/s" : "mph";

  if (!weather) {
    return "Loading...";
  }

  const iconCode = weather.weather[0]?.icon || "";
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const rain = weather.rain?.["1h"] || 0;
  const snow = weather.snow?.["1h"] || 0;

  const weatherId = weather.weather[0].id;
  const isRainExpected = weatherId >= 200 && weatherId < 600;

  const windDirection = (deg) => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return directions[Math.round(deg / 22.5) % 16];
  };

  return (
    <div className="flex flex-col">
      <p className="ml-10 text-2xl leading-relaxed tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-950 to-sky-600 font-semibold">
        Conditions:
      </p>
      <div className="flex justify-around w-full font-light p-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-xl mb-10">
        <p className="text-3xl">
          Humidity:{" "}
          <span className="text-sky-950 font-normal">
            {Math.round(weather.main.humidity)}%
          </span>
        </p>
        <p className="text-3xl">
          Feels like:{" "}
          <span className="text-sky-950 font-normal">
            {Math.round(weather.main.feels_like)}

            {unitSymbol}
          </span>
        </p>
        <p className="text-3xl">
          Pressure:{" "}
          <span className="text-sky-950 font-normal">
            {Math.round(weather.main.pressure)}
            <span className="text-2xl"> hPa</span>
          </span>
        </p>
      </div>
      <p className="ml-10 text-2xl leading-relaxed tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-950 to-sky-600 font-semibold">
        Wind:
      </p>
      <div className="flex justify-around w-full font-light p-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-xl mb-10">
        <p className="text-3xl">
          Cloudiness:{" "}
          <span className="text-sky-950 font-normal">
            {weather.clouds.all}%
          </span>
        </p>
        <p className="text-3xl">
          Direction:{" "}
          <span className="text-sky-950 font-normal">
            {windDirection(weather.wind.deg)} ({weather.wind.deg}°)
          </span>
        </p>
        <p className="text-3xl">
          Speed:{" "}
          <span className="text-sky-950 font-normal">
            {weather.wind.speed} {speedUnit}
          </span>
        </p>
      </div>
      <p className="ml-10 text-2xl leading-relaxed tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-950 to-sky-600 font-semibold">
        Rain / Snow:
      </p>
      <div className="flex justify-around w-full font-light p-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-xl mb-10">
        {rain ? (
          <p className="text-3xl">
            Rain: <span className="text-sky-950 font-normal">{rain} mm</span>
          </p>
        ) : (
          <p className="text-3xl">No rain right now</p>
        )}

        {isRainExpected ? (
          <p className="text-3xl">{weather.weather[0].description}</p>
        ) : (
          <p className="text-3xl">Small rain chance</p>
        )}

        {snow ? (
          <p className="text-3xl">
            Snow: <span className="text-sky-950 font-normal">{snow} mm </span>
          </p>
        ) : (
          <p className="text-3xl">No snow</p>
        )}
      </div>
    </div>
  );
};

export default WeatherData;

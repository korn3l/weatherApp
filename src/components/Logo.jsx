import React from "react";
import { TiWeatherCloudy } from "react-icons/ti";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <TiWeatherCloudy className="text-yellow-400 text-7xl drop-shadow-2xl" />
      <p className="text-7xl font-semibold drop-shadow-2xl">
        <span className="text-blue-600">My</span>WeatherApp
      </p>
    </div>
  );
};

export default Logo;

import { useEffect, useState, useCallback } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CityList from "./components/CityList";
import Input from "./components/Input";
import Logo from "./components/Logo";
import Location from "./components/Location";
import WeatherData from "./components/WeatherData";
import Navigation from "./components/Navigation";
import Favourites from "./pages/Favourites";
import FavButton from "./components/FavButton";
import { useSelector, useDispatch } from "react-redux";
import { setUnits } from "./redux/actions";

function App() {
  const apiKey = "c39f5dc59e2d7e56db7bb9d9edaf7993";
  const [city, setCity] = useState(localStorage.getItem("city") || "");
  const [weather, setWeather] = useState(null);
  const [extraData, setExtraData] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const dispatch = useDispatch();
  const units = useSelector((state) => state.units);

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    } else {
      fetchWeather("Wroclaw");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  //wyswietlanie ostatniego miasta po odswiezeniu
  useEffect(() => {
    if (city) {
      localStorage.setItem("city", city);
    }
  }, [city]);

  const fetchWeather = useCallback(
    async (cityName, unit = units) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&APPID=${apiKey}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          if (response.status === 404) {
            alert("City not found. Try again.");
          } else {
            alert("Error!!!. Please try again.");
          }
          throw new Error("City not found");
        }
        const data = await response.json();
        setCity(data.name);
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
      console.log("Fetching: ", cityName);
    },
    [units, city]
  );

  const handleUnitChange = useCallback(
    (newUnit) => {
      if (newUnit !== units) {
        dispatch(setUnits(newUnit));
        if (city) {
          fetchWeather(city, newUnit);
        }
      }
    },
    [units, city, fetchWeather, dispatch]
  );

  const handleAddToFavorites = useCallback(() => {
    if (city && !favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  }, [city, favorites]);

  const handleRemoveFromFavorites = useCallback(
    (cityToRemove) => {
      setFavorites(favorites.filter((city) => city !== cityToRemove));
    },
    [favorites]
  );

  const handleCitySelect = useCallback(
    (cityName) => {
      setCity(cityName);
      fetchWeather(cityName);
    },
    [fetchWeather]
  );

  return (
    <Router>
      <div className="mx-auto max-w-screen-2xl my-8 py-5 px-32 bg-gradient-to-bl from-orange-400 to-orange-600 shadow-xl shadow-gray-300 rounded-3xl">
        <Logo />
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CityList onCitySelect={fetchWeather} />
                <Input
                  onSearch={fetchWeather}
                  onUnitChange={handleUnitChange}
                />
                <Location city={city} weather={weather} />
                <FavButton
                  city={city}
                  favorites={favorites}
                  onAddToFavorites={handleAddToFavorites}
                />
                <WeatherData weather={weather} extraData={extraData} />
              </>
            }
          />
          <Route
            path="/Favourites"
            element={
              <Favourites
                favorites={favorites}
                onCitySelect={handleCitySelect}
                onRemove={handleRemoveFromFavorites}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

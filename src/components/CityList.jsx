import React from "react";

const CityList = ({ onCitySelect }) => {
  const cities = [
    {
      id: 1,
      name: "Warsaw",
    },
    {
      id: 2,
      name: "Vienna",
    },
    {
      id: 3,
      name: "Seoul",
    },
    {
      id: 4,
      name: "Chicago",
    },
    {
      id: 5,
      name: "Athens",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 border border-orange-800 rounded-3xl shadow-md shadow-orange-600 ">
      {cities.map((city) => (
        <button
          key={city.id}
          onClick={() => onCitySelect(city.name)}
          className="text-lg  font-light transition ease-in hover:bg-gray-600/20 px-3 py-1 my-1 rounded-xl  active:bg-gray-600/30"
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default CityList;

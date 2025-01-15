import React from "react";

const Favorites = ({ favorites, onCitySelect, onRemove }) => {
  return (
    <div className="...">
      <h2 className="text-2xl font-light mb-4 text-center">Favourite cities</h2>
      {favorites.length === 0 ? (
        <p className="text-2xl">You don't have any favourite cities yet!</p>
      ) : (
        <ul>
          {favorites.map((city, index) => (
            <li
              key={index}
              className="flex items-center justify-between m-2 bg-gradient-to-r from-sky-400 to-sky-600 rounded-xl shadow-xl p-4"
            >
              <button
                onClick={() => onCitySelect(city)}
                className="text-5xl text-yellow-300 px-2 py-1 font-thin mx-4"
              >
                {city}
              </button>

              <button
                onClick={() => onRemove(city)}
                className="text-base text-white font-normal mx-4 bg-red-600 rounded-full px-6 py-2 hover:bg-red-700 transition ease-in active:bg-red-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;

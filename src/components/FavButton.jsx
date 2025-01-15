import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const AddToFavoritesButton = ({ city, favorites, onAddToFavorites }) => {
  const isFavorite = favorites.includes(city);

  return (
    <div className="flex justify-center">
      <button
        onClick={onAddToFavorites}
        className="text-xl px-4 py-2 rounded my-4"
        disabled={isFavorite}
      >
        {isFavorite ? (
          <FaHeart className="text-red-600 text-5xl" />
        ) : (
          <FaRegHeart className="text-red-600 text-5xl" />
        )}
      </button>
    </div>
  );
};

export default AddToFavoritesButton;

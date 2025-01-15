import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-center space-x-4 my-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : "text-gray-700"
        }
      >
        Strona główna
      </NavLink>
      <NavLink
        to="/Favourites"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold" : "text-gray-700"
        }
      >
        Ulubione
      </NavLink>
    </nav>
  );
};

export default Navigation;

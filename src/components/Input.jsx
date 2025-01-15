import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Input = ({ onSearch, onUnitChange }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      onSearch(input);
      setInput("");
    }
    console.log("Searching for: ", input);
  };

  return (
    <div className="flex flex-row justify-center my-5">
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-row border border-orange-800 shadow-md shadow-orange-600 rounded-3xl items-center justify-around">
          <input
            type="text"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="focus:outline-none py-1 px-1 font-light   capitalize text-xl bg-transparent placeholder-custom-gray w-3/4"
          />
          <AiOutlineSearch
            size={30}
            className="cursor-pointer transition ease-out hover:scale-125 "
            onClick={handleSearch}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={() => onUnitChange("metric")}
            className="text-2xl font-light transition ease-out hover:scale-110"
          >
            °C
          </button>
          <p className="text-2xl font-light mx-1">|</p>
          <button
            onClick={() => onUnitChange("imperial")}
            className="text-2xl font-light transition ease-out hover:scale-110"
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;

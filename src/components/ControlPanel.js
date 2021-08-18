import React, { useState, useRef } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import axios from "axios";

const ControlPanel = (props) => {
  const [cities, setCities] = useState([]);
  const [cityPrefix, setCityPrefix] = useState('');
  const [searchContent, setSearchContent] = useState("");
  const cityInput = useRef();

  const searchForCity = async () => {
    if (cityInput.current.value.length < 3) return;
    const cityPrefix = cityInput.current.value;
    const matchingCities = await axios(
      `http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=8&offset=0&namePrefix=${cityPrefix}`
    )
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
      });
    setCities(matchingCities.data);
    fillSearchContent(cities);
  };

  const fillSearchContent = () => {
    // cities.length > 1 &&
      setSearchContent(
        <ul className="citiesList w-56 shadow-lg absolute top-full left-0 flex flex-col">
          {cities.map((city) => (
            <li
              className="city w-56 h-10 cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center pl-3 font-semibold"
              data-lat={city.latitude}
              data-lon={city.longitude}
              key={city.id}
              onClick={chooseCity}
            >
              {city.name}
            </li>
          ))}
        </ul>
      );
  }

  const chooseCity = (e) => {
    const city = {
      name: e.target.innerText,
      lat: e.target.dataset.lat, 
      lon: e.target.dataset.lon
    }
    props.onCityChange(city);
    document.querySelector('.searchInput').value = '';
    setSearchContent("");
  };

  return (
    <div className="controlPanel h-20 mx-10 flex items-center place-content-between">
      <div className="controlPanel__search relative flex p-2 bg-white bg-opacity-20 border-b-2 border-white shadow-md w-3/4">
        <SearchIcon className="w-6 text-gray-600" />
        <input
          type="text"
          className="searchInput outline-none bg-transparent placeholder-gray-600 text-3xl pl-2 w-full"
          placeholder="Search for a city..."
          onKeyUp={searchForCity}
          ref={cityInput}
        />
        {cities && searchContent}
      </div>
      <div className="controlPanel__tempFormat bg-white bg-opacity-20 shadow-md h-10 w-48 rounded-full flex items-center">
        <button className="font-semibold text-xl text-blue-900 hover:text-blue-600 ml-auto">
          C
        </button>
        <span className="text-blue-600 px-2 cursor-default">/</span>
        <button className="font-semibold text-xl text-blue-900 hover:text-blue-600 mr-auto">
          F
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;

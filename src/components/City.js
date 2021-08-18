import React from "react";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { SunIcon } from "@heroicons/react/solid";

const City = ({ city, timezone, temp }) => {
  const tempInC = Math.round(+temp - 273);
  const date = new Date();
  let dateToDisplay;
  if (timezone) {
    dateToDisplay = date.toLocaleString("pl-PL", {
      timeZone: timezone,
    });
  }

  if (!city.hasOwnProperty('name')) return <div/> 
  return (
    <div className="city w-1/3 h-full flex flex-col items-center place-content-center">
      <div className="group flex">
        <div className="group text-center pr-2">
          <p className="text-white font-semibold text-2xl">Today</p>
          <p className="text-white ">
            {dateToDisplay ? dateToDisplay.slice(0, 10) : ""}
          </p>
        </div>
        <SunIcon className="w-12 text-white pl-2" />
      </div>
      <span className="font-semibold text-8xl text-white">
        {!isNaN(tempInC) && `${tempInC}`}&deg;
      </span>
      <div className="group flex items-center place-content-center">
        <LocationMarkerIcon className="w-6 text-white" />
        <h1 className="text-2xl font-light text-white pl-2">{city.name}</h1>
      </div>
    </div>
  );
};

export default City;

import React, { useEffect, useState } from "react";
import { SunIcon } from "@heroicons/react/solid";

const Weather = ({ data }) => {
  const nextHours = data;
//   console.log(nextHours);

  return (
    <ul className="flex flex-grow h-3/4 my-auto p-3">
      {nextHours.map((hour, index) => (
        <li
          key={hour.dt}
          className="card flex flex-col items-center place-content-center w-1/6 h-full p-4 mx-3"
        >
          <span className="hour text-white text-xl font-light">
            In {index + 1} {index === 0 ? "hour" : "hours"}
          </span>
          <div className="forecast text-center shadow-xl mt-2 rounded-full bg-opacity-5 bg-gradient-to-br from-blue-800 via-indigo-700 to-purple-700 p-4">
            <SunIcon className="w-16 text-white" />
            <span className="font-semibold text-4xl text-white">
              {Math.round(hour.temp - 272)}&deg;
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Weather;

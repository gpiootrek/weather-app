import React from "react";
import City from "./City";
import Weather from "./Weather";

const ForecastInfo = (props) => {
  const { forecast } = props.data;
//   console.log(forecast);
  return (
    <div className="forecastInfo flex w-full h-1/3 border-b-2 border-white">
      <City
        city={props.data.city}
        timezone={forecast.timezone}
        temp={forecast.current?.temp}
      />
      {forecast.hasOwnProperty("hourly") && <Weather data={forecast.hourly.slice(0,6)} />}
    </div>
  );
};

export default ForecastInfo;

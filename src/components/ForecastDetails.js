import React from "react";
import Card from "./Card";

const ForecastDetails = ({ weather }) => {
  if (!weather) return <div />;
  const sunrise = new Date(weather.sunrise * 1000);
  const sunriseTime = `${sunrise.getHours()}:${sunrise.getMinutes() >= 10 ? sunrise.getMinutes() : `0${sunrise.getMinutes()}`}`;
  const sunset = new Date(weather.sunset * 1000);
  const sunsetTime = `${sunset.getHours()}:${sunset.getMinutes() >= 10 ? sunset.getMinutes() : `0${sunset.getMinutes()}`}`;

  return (
    <div className="forecastDetails w-full flex-grow flex place-content-center flex-wrap p-5">
      <Card label="sunrise" data={sunriseTime} />
      <Card label="sunset" data={sunsetTime} />
      <Card label="pressure" data={weather.pressure} unit="hPa"/>
      <Card label="feels like" data={weather["feels_like"]} unit="&deg;"/>
      <Card label="wind" data={weather["wind_speed"]} unit="km/h"/>
      <Card label="humidity" data={weather.humidity} unit="%"/>
      <Card label="lorem" data={weather["wind_gust"]} />
      <Card label="ipsum" data={weather["wind_deg"]} />
    </div>
  );
};

export default ForecastDetails;

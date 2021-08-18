import "./App.css";
import ControlPanel from "./components/ControlPanel";
import ForecastInfo from "./components/ForecastInfo";
import ForecastDetails from "./components/ForecastDetails";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
const API_KEY = "41c71400c0a3406b770df818d7256250"; // weather api key

function App() {
  const [city, setCity] = useState({});
  const [forecast, setForecast] = useState({});
  const isFirstRender = useRef(true);

  const setCurrentCity = async (enteredCity) => {
    setCity(
      {
        name: enteredCity.name,
        lat: enteredCity.lat,
        lon: enteredCity.lon,
      }
    );
  };

  useEffect(() => {
    if (!isFirstRender.current) {
      // do something after state has updated
      const fetchForecast = async () => {
        setForecast(
          await axios(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${city?.lat}&lon=${city?.lon}&exclude=minutely&appid=${API_KEY}`
          ).then((res) => res.data)
        );
      };
      fetchForecast();
    }
  }, [city]);

  useEffect(() => {
    // toggle flag after first render/mounting
    isFirstRender.current = false; 
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen bg-gradient-to-br p-12 from-green-300 via-blue-500 to-indigo-500">
      <ControlPanel onCityChange={setCurrentCity} />
      <ForecastInfo data={{city, forecast}} />
      <ForecastDetails weather={forecast.current} />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Search from "./Search";
import Weather from "./Weather";
import get from "../utils/api";

const App = () => {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState("");

  const handleCity = (newCity) => {
    if (newCity !== city) {
      setCity(newCity);
      setWeatherData({});
      setError("");
    }
  };

  

  useEffect(() => {
    
    const fetchData = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      try {
        const data = await get(URL);
        const temp = data["main"].temp;
        const iconSrc = `https://openweathermap.org/img/w/${data["weather"][0].icon}.png`;
        const humidity = data["main"].humidity;
        const newWeatherData = {
          temp,
          iconSrc,
          humidity,
        };
        console.log(newWeatherData);
        setWeatherData(newWeatherData);
      } catch (error) {
        console.log(error);
        if (error.response.status < 500) {
          setError("This city isn't exist, please enter valid city");
        } else {
          setError("there is internal error");
        }
      }
  
    };
    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <div>
      <Search passDataFunc={handleCity} />
      { Object.keys(weatherData).length !== 0 && (
        <Weather city={city} weatherData={weatherData} />
      )}
      <h1>{error && <div>{error}</div>}</h1>
    </div>
  );
};
export default App;

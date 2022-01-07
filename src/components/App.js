import { useState, useEffect } from "react";
import Search from "./Search";
import Weather from "./Weather";
import get from "../utils/api";
import ErrorMessage from "./ErrorMessage";

const App = () => {
  const [city, setCity] = useState("barcelona");
  const [weatherData, setWeatherData] = useState({});
  const [errors, setErrors] = useState([]);

  // gets user input and array of input errors
  const handleCity = (newCity, inputValidationErrors) => {
    if (newCity !== city) {
      setCity(newCity);
      setErrors(inputValidationErrors);
      setWeatherData({});
    }
  };

  useEffect(() => {

    const fetchData = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
      try {
        const data = await get(URL);
        const temp = data["main"].temp;
        const iconSrc = `https://openweathermap.org/img/w/${data["weather"][0].icon}.png`;
        const description = data["weather"].description;
        const newWeatherData = {
          temp,
          iconSrc,
          description,
        };

        setWeatherData(newWeatherData);
      } catch (error) {
        if (error.response.status < 500) {
          setErrors([{
            id: 0,
            message: "This city isn't exist, please enter valid city"
          }]);
        } else {
          setErrors([{
            id: 0,
            message: "there is internal error"
          }]);
        }
      }
    };

    if (errors.length === 0) {
      fetchData();
    }
  }, [city, errors]);

  return (
    <div>
      <Search passDataFunc={handleCity} />
      {Object.keys(weatherData).length > 0 ? (
        <Weather city={city} weatherData={weatherData} />
      ) : (
        <></>
      )}
      {errors.length > 0 ? (
        <div>
          <ul>
            {errors.map((error) => (
              <ErrorMessage key={error.id} message={error.message} />
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;

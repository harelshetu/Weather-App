import { useState, useEffect } from 'react';
import Search from './Search';
import Weather from './Weather';
import ErrorMessage from './ErrorMessage';
import fetchData from '../utils/fetchData';

const App = () => {

  const [city, setCity] = useState('barcelona');
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
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    const updateWeatherData = async () => {
      const { data, fetchErrors } = await fetchData(URL);
      fetchErrors.length === 0 ? setWeatherData(data) : setErrors(fetchErrors);
    };

    if (errors.length === 0) {
      updateWeatherData();
    }

  }, [city, errors]);

  const appStyles = {
    width: "30rem",
    height: "30rem",
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="card text-white bg-secondary" style={appStyles}>
        <Search passDataFunc={handleCity} />
        {Object.keys(weatherData).length > 0 ? (<Weather city={city} weatherData={weatherData} />) 
        : (<></>)}
        {errors.length > 0 ? (
          <div>
            <ul>
              {errors.map((error) => (
                <ErrorMessage key={error.id} message={error.message} />
              ))}
            </ul>
          </div>) 
          : (<></>)}
      </div>
    </div>
  );
};

export default App;

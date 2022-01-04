const Weather = (props) => {
 
  const {
    city,
    weatherData: { temp, humidity, iconSrc },
  } = props;

  return (
    <>
      <h2> city:{city}</h2>
      <h4>Date:</h4>
      <h4>Hour:</h4>
      <img src={iconSrc} alt="failed to load img" />
      <h2> temp:{temp}</h2>
      <h2> humidity:{humidity}</h2>
    </>
  );
};

export default Weather;

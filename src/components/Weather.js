const Weather = (props) => {
  const {
    city,
    weatherData: { temp, description, iconSrc },
  } = props;

  const hourAndTempStyles = {
    marginLeft: "30%",
  };

  const imageStyles = {
    width: "40%",
    height: "35%",
    marginLeft: "auto",
    marginRight: "auto",
    objectFit: "fill",
  };

  const capitalizeFirstLetter = (city) => {
    return city.charAt(0).toUpperCase() + city.slice(1);
  };

  return (
    <>
      <div className="mx-auto mt-3">
        <h3>{capitalizeFirstLetter(city)}</h3>
        <h6>{new Date().toDateString()}</h6>
        <h6 style={hourAndTempStyles}>
          <p>{new Date().toLocaleTimeString().slice(0, 5)}</p>
        </h6>
      </div>
      <img src={iconSrc} alt="weather pic" style={imageStyles} />
      <div className="mx-auto">
        <h1 style={hourAndTempStyles}>{Math.round(temp)}°C</h1>
        <h2>{description}</h2>
      </div>
    </>
  );
};


export default Weather;
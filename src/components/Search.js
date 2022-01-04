import { useState } from "react";

const Search = (props) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props);
    if (city) {
      props.passDataFunc(city);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;

import react, { useState, useEffect, useRef } from "react";
import Search from "./Search";
import Weather from "./Weather";

const App = () => {
  const [city, setCity] = useState("");

  const handleCity = (newCity) => {
    if(newCity !== city){
        setCity(newCity);
    }
  };

  const count = useRef(0);

  useEffect(()=>{
    console.log(`count render: ${++count.current}`);
    console.log(`city: ${city}`);
  },[city])

  return (
    <div>
        <Search  passDataFunc={handleCity}/>
        <Weather />
    </div>
  );
};
export default App;

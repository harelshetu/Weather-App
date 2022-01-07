import { useState,useEffect} from 'react';
import validateInput from '../utils/validation';

const Search = ({passDataFunc}) => {
  
  const [city, setCity] = useState('');
  const [isUserSumbit, setIsUserSumbit] = useState(false);
  const [inputValidationErrors,setInputValidationErrors] = useState([]);
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValidationErrors(validateInput(city));
    setIsUserSumbit(true);
  };

  useEffect(() => {

    if (isUserSumbit) {
      passDataFunc(city, inputValidationErrors);
    }
  }, [inputValidationErrors]);

  return (
    <>
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
    </>
  );
};

export default Search;

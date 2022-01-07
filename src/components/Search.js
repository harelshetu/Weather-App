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
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
          <div className="input-group-append">
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Search;

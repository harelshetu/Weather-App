import axios from "axios";

const get = async (url) => {
  const response = await axios.get(url);
  const data = await response.data;
  return data;
};

export default get;

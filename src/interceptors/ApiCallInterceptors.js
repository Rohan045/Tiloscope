import axios from "axios";

const postApiCall = async (path, payload) => {
  return await axios.post(
    process.env.REACT_APP_SERVICE_BASE_URL + path,
    payload
  );
};

const getApiCall = async (path) => {
  return await axios.get(process.env.REACT_APP_SERVICE_BASE_URL + path);
};

export { getApiCall, postApiCall };

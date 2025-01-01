import axios from "axios";

const postApiCall = async (path, payload, isAuthRequired) => {
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: token ? `Bearer ${token}` : "",
  };

  try {
    const response =
      isAuthRequired || isAuthRequired !== undefined
        ? await axios.post(
            process.env.REACT_APP_SERVICE_BASE_URL + path,
            payload,
            { headers }
          )
        : await axios.post(
            process.env.REACT_APP_SERVICE_BASE_URL + path,
            payload
          );
    return response.data;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};

const putApiCall = async (path, payload, isAuthRequired) => {
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: token ? `Bearer ${token}` : "",
  };

  try {
    const response =
      isAuthRequired || isAuthRequired !== undefined
        ? await axios.put(
            process.env.REACT_APP_SERVICE_BASE_URL + path,
            payload,
            { headers }
          )
        : await axios.put(
            process.env.REACT_APP_SERVICE_BASE_URL + path,
            payload
          );
    return response.data;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};

const getApiCall = async (path) => {
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: token ? `Bearer ${token}` : "",
  };
  try {
    const response = await axios.get(
      process.env.REACT_APP_SERVICE_BASE_URL + path,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error during API call:", error);
    throw error;
  }
};

export { getApiCall, postApiCall, putApiCall };

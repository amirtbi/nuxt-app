import axios from "axios";

// create an axios instance
const axiosClient = axios.create();

axiosClient.defaults.baseURL =
  "https://nuxt-2-cc469-default-rtdb.firebaseio.com";

axiosClient.defaults.headers = {
  "Content-type": "application/json",
  Accept: "application/json",
};
// axiosClient.defaults.timeout = 200;
// intercepotors

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const status = error.response?.status || 500;
    switch (status) {
      // not found
      case 404: {
        return Promise.reject(new Error(error.message, 404));
      }
      case 400: {
        return Promise.reject(new Error(error.message, 400));
      }
    }
  }
);

export default axiosClient;

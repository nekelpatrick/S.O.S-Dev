import axios from "axios";

export const axiosConfig = () => {
  axios.defaults.baseURL = "http://localhost:3001";
};

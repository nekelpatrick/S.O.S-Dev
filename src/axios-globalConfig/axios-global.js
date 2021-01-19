import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-space-open-source.herokuapp.com/",
});

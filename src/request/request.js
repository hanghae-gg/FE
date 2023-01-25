import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});
axiosInstance.defaults.withCredentials = true;

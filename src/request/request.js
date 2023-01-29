import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://3.35.176.35",
});
axiosInstance.defaults.withCredentials = true;

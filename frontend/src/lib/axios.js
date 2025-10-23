import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true, // CRUCIAL for cookies
});
export { axiosInstance };
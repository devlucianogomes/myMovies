// https://api.themoviedb.org/3/

// Configure baseURL and apiKey
import axios from "axios";
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;

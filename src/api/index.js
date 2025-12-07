import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://rinspeed-car-server.onrender.com/",
});

export default fetcher;

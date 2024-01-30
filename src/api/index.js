import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://rinspeed-car-server.vercel.app",
});

export default fetcher;

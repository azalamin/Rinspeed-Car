import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://rinspeed-car.herokuapp.com",
});

export default fetcher;

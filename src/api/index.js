import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://localhost:5001/",
});

export default fetcher;

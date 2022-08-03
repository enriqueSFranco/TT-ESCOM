import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  // timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
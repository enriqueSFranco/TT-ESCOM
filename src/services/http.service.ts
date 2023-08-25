import axios from "axios"

export default axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND,
  timeout: 4000,
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  }
})
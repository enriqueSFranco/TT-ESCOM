import axios from "axios"

// axios.defaults.headers.common['Accept'] = 'application/json'
// axios.defaults.baseURL = process.env.REACT_APP_URL_BACKEND
// axios.defaults.headers.post['Content-Type'] = 'application/x-ww-form-urlencoded'

export default axios.create({
  baseURL: process.env.REACT_APP_URL_BACKEND,
  timeout: 4000,
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  }
})
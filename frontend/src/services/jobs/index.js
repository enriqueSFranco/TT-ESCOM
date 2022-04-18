import axios from "axios";
import { toast } from "react-hot-toast";
import { API_JOBS } from "../settings";

export const getAllJobs = async() => {
  try {
    const response = await axios.get(API_JOBS);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }
};

export const getJob = (id) => {
  return axios.get(`${API_JOBS}${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.log(error));
};

export const postJob = (body) => {
  return axios.post(API_JOBS, body, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    }
  })
  .then(response => {
    const { data } = response;
    return data;
  })
  .catch(error => error);
}

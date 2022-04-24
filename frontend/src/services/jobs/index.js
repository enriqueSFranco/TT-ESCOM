import axios from "axios";
import { API_JOBS } from "../settings";

export const getAllJobs = async(page) => {
  try {
    const response = await axios.get(`/api/Vacants/?page=${page}`);
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

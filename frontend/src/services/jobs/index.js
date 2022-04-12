import axios from "axios";
import { API_JOBS } from "../settings";

export const getAllJobs = () => {
  return axios.get(API_JOBS)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};

export const getJob = (id) => {
  return axios.get(`${API_JOBS}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.log(error));
};

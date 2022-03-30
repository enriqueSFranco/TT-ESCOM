import axios from "axios";
import { API_JOBS } from "../settings";

export const getJob = (id) => {
  return axios.get(`${API_JOBS}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.log(error));
};

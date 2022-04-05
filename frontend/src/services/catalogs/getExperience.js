import axios from "axios";
import { API_CATALOGUE_EXPERIENCE } from "../settings";

export const getExperience = (id) => {
  return axios.get(`${API_CATALOGUE_EXPERIENCE}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.error(error));
};

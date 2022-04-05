import axios from "axios";
import { API_COMPANY } from "../settings";

export const getBusiness = (id) => {
  return axios.get(`${API_COMPANY}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};

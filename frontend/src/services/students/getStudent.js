import axios from "axios";
import { API_STUDENT } from "../settings";

export const getStuent = id => {
  return axios.get(`${API_STUDENT}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};

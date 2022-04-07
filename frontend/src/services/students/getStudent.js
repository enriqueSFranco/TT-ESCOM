import axios from "axios";
import { API_STUDENT } from "../settings";

export const getStudent = id => {
  return axios.get(`${API_STUDENT}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};

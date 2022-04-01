import axios from "axios";
import { API_STUDENT } from "../settings";

export const createAccountStudent = ({t100_name, t100_boleta, t100_email, t100_password} = {}) => {
  return axios.post(API_STUDENT, {t100_name, t100_boleta, t100_email, t100_password}, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(response => {
      const { data } = response;
      return data;
    })
};

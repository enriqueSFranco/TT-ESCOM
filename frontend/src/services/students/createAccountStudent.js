import axios from "axios";
import { API_STUDENT } from "../settings";

export const createAccountStudent = ({
  t100_boleta,
  t100_name,
  t100_email,
  password,
} = {}) => {
  return axios
    .post(
      API_STUDENT,
      { t100_boleta, t100_name, t100_email, password },
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    )
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error.response);
};

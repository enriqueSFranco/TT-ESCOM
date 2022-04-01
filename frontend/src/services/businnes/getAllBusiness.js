import axios from "axios";
import { API_COMPANY } from "../settings";

export const getAllBusiness = async () => {
  return axios.get(API_COMPANY)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.error(error));
};

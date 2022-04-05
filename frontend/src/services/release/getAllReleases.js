import axios from "axios";
import { API_RELEASE } from "../settings";

export const getAllReleases = () => {
  return axios.get(API_RELEASE)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};

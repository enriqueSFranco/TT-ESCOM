import axios from "axios";
import { API_SOCIAL_NETWORK } from "../settings";

export const getSocialNetwork = id => {
  return axios.get(`${API_SOCIAL_NETWORK}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => {
      if (error.response) {
        return error.response.status;
      }
    });
};

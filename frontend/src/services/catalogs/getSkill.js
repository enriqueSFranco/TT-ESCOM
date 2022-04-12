import axios from "axios";
import { API_SKILLS } from "../settings";

export const getSkill = id => {
  return axios.get(API_SKILLS)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => {
      if (error.response) {
        return error.response.data;
      }
    })
};
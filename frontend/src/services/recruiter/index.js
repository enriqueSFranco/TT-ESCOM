import axios from "axios";
import { API_RECRUITER } from "../settings";

export const postRecruiter = async (payload = {}) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    };
    const response = await axios.post(`${API_RECRUITER}`, payload, config);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response.data.errors;
    }
  }
};
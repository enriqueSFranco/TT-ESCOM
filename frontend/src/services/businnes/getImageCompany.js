import axios from "axios";
import { API_PHOTO_COMPANY } from "../settings";

export const getImageCompany = async (id) => {
  try {
    const response = await axios.get(`${API_PHOTO_COMPANY}/${id}/`);
    if (!response.status) {
      let error = {
        err: true,
        status: response.status,
        statusText: response.statusText
      }
      throw error;
    }
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  };
};

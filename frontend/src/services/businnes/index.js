import axios from "axios";
import { API_COMPANY, API_PHOTO_COMPANY } from "../settings";

export const getImageBusiness = async (id) => {
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

export const getAllBusiness = async () => {
  return axios.get(API_COMPANY)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.error(error));
};

export const getBusiness = (id) => {
  return axios.get(`${API_COMPANY}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};


export const createBusiness = (payload = {}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  };

  return axios.post(API_COMPANY, payload, config)
    .then((response) => {
      return response;
    })
    .catch(error => {
      if (error.response) return error.response;
    })
};

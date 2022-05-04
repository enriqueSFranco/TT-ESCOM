import axios from "axios";
import { API_RECRUITER, APIT_RECRUITERVACANTS } from "../settings";

/**
 * @param {Number} t301_id_recruiter
 * @return {Promise}
 **/
export const getJobsForRecruiter = async (t301_id_recruiter) => {
  return axios.get(`${APIT_RECRUITERVACANTS}${t301_id_recruiter}/`)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    })
};


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

export const getRecruiterInfo = async (id) => {
  return axios.get(`${API_RECRUITER}${id}/`)
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
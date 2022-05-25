import axios from "axios";
import {
  API_JOBS,
  API_VACANTS_APPLICATIONS_JOB_STUDENT,
  API_VACANT_INFO,
  API_VACANTS_FILTER,
} from "../settings";

export const getAllJobs = async (page) => {
  try {
    const response = await axios.get(`/api/Vacants/?page=${page}`);
    return response;
  } catch (error) {
    if (error.response) {
      return error.response;
    }
  }
};

export const getJob = (id) => {
  return axios
    .get(`${API_JOBS}${id}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => console.log(error));
};

export const getVacantInfo = (id) => {
  return axios
    .get(`${API_VACANT_INFO}${id}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => console.log(error));
};

export const getApplicationsJobs = (id) => {
  return axios
    .get(`${API_VACANTS_APPLICATIONS_JOB_STUDENT}${id}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

export const postJob = (body) => {
  return axios
    .post(API_JOBS, body, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

export const deleteJob = async (id) => {
  return axios
    .delete(`${API_JOBS}/${id}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.status;
      }
    });
};

export const getVacantsFilter = (payload = {}) => {
  return axios.post(API_VACANTS_FILTER, payload)
    .then(response => response)
    .catch(error => error);
}

// {
//   "t300_id_company": "",  ->"1"  , "3"
//   "c206_id_profile": "", ->  "1" , "2"
//   "t200_home_ofice": ""  -> "True"/"False"
// }

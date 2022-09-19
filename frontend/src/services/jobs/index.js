import API from 'services/http.service'
import {
  API_JOBS,
  API_VACANT_INFO,
  API_VACANTS_FILTER,
  API_VACANT_REQUIREMENT
} from "../settings";

export const getAllJobs = async (numberPage = 1) => {
  const controller = new AbortController()
  const signal = controller.signal
  try {
    const {data} = await API.get(`${process.env.REACT_APP_URL_VACANTS}?page=${numberPage}`, {signal});
    return data;
  } catch (error) {
    if (error.response)
      return error.response;
  }
};

export const searchCharacter = (nameJob) => {
  return API(`/vacant/search/${nameJob}`)
    .then(res => {
      const { data } = res
      return data
    })
    .catch(error => error)
}

export const getJobRequirements = (id) => {
  return API(`${API_VACANT_REQUIREMENT}${id}/`)
    .then(response => response)
    .catch(error => error);
};

export const getJob = (id) => {
  return API(`${process.env.REACT_APP_URL_VACANTS}${id}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => console.log(error));
};

export const getVacantInfo = (id) => {
  return API(`${API_VACANT_INFO}${id}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => console.log(error));
};

export const getApplicationsJobs = (idVacant) => {
  return API(`${process.env.REACT_APP_URL_VACANT_APPLICATIONS}${idVacant}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

export const postJob = (body) => {
  return API.post(process.env.REACT_APP_URL_VACANTS, body)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

export const deleteJob = async (id) => {
  return API.delete(`${API_JOBS}/${id}/`)
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
  return API.post(API_VACANTS_FILTER, payload)
    .then(response => response)
    .catch(error => error);
}

// {
//   "t300_id_company": "",  ->"1"  , "3"
//   "c206_id_profile": "", ->  "1" , "2"
//   "t200_home_ofice": ""  -> "True"/"False"
// }

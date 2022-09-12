import axios from "axios";
import API from 'services/http.service'
import {   
  API_CATALOGUE_CANDIDATE_PROFILE, 
  API_CATALOGUE_EXPERIENCE,
  API_STUDENT_LENGUAGES,
  API_CATALOGUE_STATES,
  API_ACADEMIC_LEVEL,
  API_ACADEMIC_UNITS,
  API_ACADEMIC_STATE,
  API_INTEREST_JOBS,  
  API_CONTRACT,
  API_CP
} from "services/settings";

export const getSkill = async (id) => {
  return API(`${process.env.REACT_APP_URL_CANDIDATE_SKILLS}${id}/`)
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

export const getLenguages = async (id) => {
  return axios.get(`${API_STUDENT_LENGUAGES}${id}/`)
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

export const getAllCatalogueExperience = () => {
  return axios.get(`${API_CATALOGUE_EXPERIENCE}`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.error(error));
};

export const getAllCandidateProfile = () => {
  return axios.get(API_CATALOGUE_CANDIDATE_PROFILE)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};

// export const getAllMunicipality = () => {
  
// };

export const getAllStates = async () => {
  try {
    const { data } = await axios.get(API_CATALOGUE_STATES);
    return data;
  } catch (error) {
    if (error.response)
      return error.response.message;
  }
}

export const getLocality = cp => {
  return axios.get(`${API_CP}${cp}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => {
      if (error.response) {
        return error.response.data;
      }
    })
}

export const getAllAcademicUnits = async () => {
  try {
    const { data } = await axios.get(API_ACADEMIC_UNITS);
    return data;
  } catch (error) {
    if (error.response)
      return error.response.message;
  }
}

export const getAllJobs = async () => {
  try {
    const { data } = await axios.get(API_INTEREST_JOBS);
    return data;
  } catch (error) {
    if (error.response)
      return error.response.message;
  }
}

export const getAllContracTypes = async () => {
  try {
    const { data } = await axios.get(API_CONTRACT);
    return data;
  } catch (error) {
    if (error.response)
      return error.response.message;
  }
}

export const getAllAcademicStates = async () => {
  try {
    const { data } = await axios.get(API_ACADEMIC_STATE);
    return data;
  } catch (error) {
    if (error.response)
      return error.response.message;
  }
}


export const getAllAcademicLevels = async () => {
  try {
    const { data } = await axios.get(API_ACADEMIC_LEVEL);
    return data;
  } catch (error) {
    if (error.response)
      return error.response.message;
  }
}
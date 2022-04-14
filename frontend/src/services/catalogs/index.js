import axios from "axios";
import { 
  API_CATALOGUE_CANDIDATE_PROFILE, 
  API_CATALOGUE_EXPERIENCE,
  API_SKILLS
} from "services/settings";

export const getSkill = () => {
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
}

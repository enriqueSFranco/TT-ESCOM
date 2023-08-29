import API from 'services/http-service'

const { REACT_APP_CATALOG_LANGUAGE, REACT_APP_URL_CANDIDATE_LANGUAGE, REACT_APP_URL_CATALOG_PROFILE_CANDIDATE, REACT_APP_URL_CATALOG_EXP, REACT_APP_URL_CATALOG_CONTRACTS, REACT_APP_CATALOG_LOCALITIES, REACT_APP_URL_CATALOG_ACADEMIC_UNITS, REACT_APP_URL_CATALOGUE_JOBS, REACT_APP_URL_CATALOGUE_ACADEMIC_STATE, REACT_APP_URL_CATALOGUE_ACADEMIC_LEVEL } = process.env;

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

export const getAllLanguage = () => {
  return API(`${REACT_APP_CATALOG_LANGUAGE}`)
    .then(response => {
      const { data } = response
      return data;
    })
    .catch(error => error)
}

export const getAllSocialNetworks = () => {
  return API(`${process.env.REACT_APP_URL_CATALOG_PLATAFORM}`)
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

export const getLanguages = async (id) => {
  return API(`${REACT_APP_URL_CANDIDATE_LANGUAGE}${id}/`)
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
  return API(`${REACT_APP_URL_CATALOG_EXP}`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.error(error));
};

export const getAllCandidateProfile = () => {
  return API(REACT_APP_URL_CATALOG_PROFILE_CANDIDATE)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};

// export const getAllStates = async () => {
//   try {
//     const { data } = await API(API_CATALOGUE_STATES);
//     return data;
//   } catch (error) {
//     if (error.response)
//       return error.response.message;
//   }
// }

export const getLocality = cp => {
  let regex = /^[0-9]+$/

  if (!regex.test(cp)) return

  return API(`${REACT_APP_CATALOG_LOCALITIES}${cp}/`)
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
    const { data } = await API(REACT_APP_URL_CATALOG_ACADEMIC_UNITS);
    return data;
  } catch (error) {
    if (error.response)
      return error.response.message;
  }
}

export const getIntrestJobs = async () => {
  try {
    const { data } = await API(REACT_APP_URL_CATALOGUE_JOBS);
    return data;
  } catch (error) {
    if (error.response)
      return error.response.message;
  }
}

export const getAllContracTypes = async () => {
  try {
    const { data } = await API(REACT_APP_URL_CATALOG_CONTRACTS);
    return data;
  } catch (error) {
    if (error.response)
      return error.response.message;
  }
}

export const getAllAcademicStates = async () => {
  try {
    const { data } = await API(REACT_APP_URL_CATALOGUE_ACADEMIC_STATE);
    return data;
  } catch (error) {
    if (error.response)
      return error.response.message;
  }
}


export const getAllAcademicLevels = async () => {
  try {
    const { data } = await API(REACT_APP_URL_CATALOGUE_ACADEMIC_LEVEL);
    return data;
  } catch (error) {
    if (error.response)
      return error.response.message;
  }
}
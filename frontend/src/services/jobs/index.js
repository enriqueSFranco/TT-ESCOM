import API from "services/http.service";

const {
  REACT_APP_URL_VACANTS,
  REACT_APP_URL_VACANT_SEARCH,
  REACT_APP_URL_VACANT_REQUIREMENTS,
  REACT_APP_URL_VACANT_VACANT_INFO,
  REACT_APP_URL_VACANT_APPLICATIONS,
  REACT_APP_URL_FILTER_VACANTS
} = process.env;

export const getAllJobs = async (numberPage = 1) => {
  const controller = new AbortController()
  const signal = controller.signal
  try {
    const {data} = await API.get(`${REACT_APP_URL_VACANTS}?page=${numberPage}`, {signal});
    return data;
  } catch (error) {
    if (error.response)
      return error.response;
  }
};

export const searchCharacter = (nameJob) => {
  return API(`${REACT_APP_URL_VACANT_SEARCH}${nameJob}`)
    .then((res) => {
      const { data } = res;
      return data;
    })
    .catch((error) => error);
};

export const getJobRequirements = (id) => {
  return API(`${REACT_APP_URL_VACANT_REQUIREMENTS}${id}/`)
    .then((response) => response)
    .catch((error) => error);
};

export const getJob = (id) => {
  return API(`${REACT_APP_URL_VACANTS}${id}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => console.log(error));
};

export const getVacantInfo = (id) => {
  return API(`${REACT_APP_URL_VACANT_VACANT_INFO}${id}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => console.log(error));
};

export const getApplicationsJobs = (idVacant) => {
  return API(`${REACT_APP_URL_VACANT_APPLICATIONS}${idVacant}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

export const postJob = (body) => {
  return API.post(REACT_APP_URL_VACANTS, body)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

export const updateVacant = (id, payload = {}) => {
  return API.put(`${REACT_APP_URL_VACANTS}${id}/`, payload)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

export const getObjectUpdateVacant = (id) => {
  return API.patch(`${REACT_APP_URL_VACANTS}${id}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

export const searchJob = async (payload = {}) => {
  return API.post(`${REACT_APP_URL_FILTER_VACANTS}`, payload)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      return error
    });
};

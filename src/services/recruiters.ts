import API from "services/http-service";

const {
  REACT_APP_URL_VACANT_RECRUITER,
  REACT_APP_URL_VACANT_APPLICATION,
  REACT_APP_URL_COMPANY_SEND_COMMENT,
  REACT_APP_URL_RECRUITERS
} = process.env;

/**
 * @param {Number} t301_id_recruiter
 * @return {Promise}
 **/
export const getJobsForRecruiter = async (t301_id_recruiter) => {
  return API(`${REACT_APP_URL_VACANT_RECRUITER}${t301_id_recruiter}/`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

/**
 * @param {Object} payload informacion que enviara el usuario
 * @return {Promise}
 **/
export const sendCommentRecruiter = (payload = {}) => {
  return API.post(REACT_APP_URL_COMPANY_SEND_COMMENT, payload)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      return error;
    });
};

/**
 * @param {Object} payload informacion que enviara el usuario
 * @param {Number} pk identificador de la vacante
 * @return {Promise}
 **/
export const sendStatusApplication = (payload = {}, pk) => {
  return API.put(`${REACT_APP_URL_VACANT_APPLICATION}${pk}/`, payload)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      return error;
    });
};

/**
 * @param {Number} id identificador del reclutador
 * @return {Promise}
 **/
export const getRecruiter = (id) => {
  return API.get(`${REACT_APP_URL_RECRUITERS}${id}`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      return error;
    });
};

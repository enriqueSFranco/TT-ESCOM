import API from 'services/http.service'

const { REACT_APP_URL_VACANT_RECRUITER, REACT_APP_URL_VACANT_APPLICATION } = process.env

/**
 * @param {Number} t301_id_recruiter
 * @return {Promise}
 **/
export const getJobsForRecruiter = async (t301_id_recruiter) => {
  return API(`${REACT_APP_URL_VACANT_RECRUITER}${t301_id_recruiter}/`)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    })
};

export const sendStatusApplication = (payload = {}, pk) => {
  return API.put(`${REACT_APP_URL_VACANT_APPLICATION}${pk}/`, payload)
    .then(response => {
      const { data } = response
      return data
    })
    .catch(error => {
      return error
    })
}
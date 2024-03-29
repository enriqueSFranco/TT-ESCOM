import API from 'services/http.service'

const { REACT_APP_URL_MANAGER_ADMINISTRATORS, REACT_APP_URL_MANAGER_SEND_OBSERVATION, REACT_APP_URL_MANAGER_VALIDATE_VACANT } = process.env

export function createNewUser(payload = {}) {
  return API.post(REACT_APP_URL_MANAGER_ADMINISTRATORS, payload)
    .then(response => {
      const { data } = response
      return data
    })
    .catch(error => error)
}

export function sendComment(payload = {}) {
  return API.post(REACT_APP_URL_MANAGER_SEND_OBSERVATION, payload)
    .then(response => {
      const { data } = response
      return data
    })
    .catch(error => {
      return error
    })
}

export function stateVacant(vacantId,payload = {}) {
  return API.put(`${REACT_APP_URL_MANAGER_VALIDATE_VACANT}${vacantId}/`, payload)
    .then(response => {
      const { data } = response
      return data
    })
    .catch(error => error)
}
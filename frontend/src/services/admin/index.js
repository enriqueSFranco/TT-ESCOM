import API from 'services/http.service'

const { REACT_APP_URL_MANAGET_ADMINISTRATORS } = process.env

export function createNewUser(payload = {}) {
  return API.post(REACT_APP_URL_MANAGET_ADMINISTRATORS, payload)
    .then(response => {
      const { data } = response
      return data
    })
    .catch(error => error)
}
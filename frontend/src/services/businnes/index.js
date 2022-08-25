import API from 'services/http.service'
import { API_COMPANY } from "../settings";

export const getAllBusiness = async () => {
  return API(API_COMPANY)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.error(error));
};

export const getBusiness = (id) => {
  return API(`${API_COMPANY}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};


export const createBusiness = (payload = {}) => {
  return API.post(`${process.env.REACT_APP_URL_COMPANY}`, payload)
    .then((response) => response)
    .catch(error => error)
};

export const createBusinessRecruiter = (payload = {}) => {
  return API.post(`${process.env.REACT_APP_URL_RECRUITERS}`, payload).then(response => response)
  .catch(error => error);
}

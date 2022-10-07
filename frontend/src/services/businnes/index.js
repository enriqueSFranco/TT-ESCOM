import API from 'services/http.service'

export const getAllBusiness = async () => {
  return API(process.env.REACT_APP_URL_COMPANY)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.error(error));
};

export const getBusiness = (id) => {
  return API(`${process.env.REACT_APP_URL_COMPANY}${id}/`)
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

import API from 'services/http.service'

export const getAllBusiness = async () => {
  return API(process.env.REACT_APP_URL_COMPANY)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.error(error));
};

export const getAllBusinessAdmin = async () => {
  // REACT_APP_URL_MANAGER_COMPANIES
  return API(process.env.REACT_APP_URL_MANAGER_COMPANIES)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.error(error));
}

export const getBusiness = (id) => {
  return API(`${process.env.REACT_APP_URL_COMPANY}${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};

export const createAccountRecruiter = (payload = {}) => {
  return API.post(`${process.env.REACT_APP_URL_COMPANY}`, payload)
    .then((response) => response)
    .catch(error => error)
};

export const validateCompany = () => {
  return API(`${process.env.REACT_APP_URL_MANAGER_COMPANIES}`)
    .then((response) => {
      const { data } = response
      return data
    })
    .catch(error => error)
};

export const uploadDocumentValidate = (payload = {}) => {
  return API.put(`${process.env.REACT_APP_URL_COMPANY_UPLOAD_DOCUMENT_VALIDATE}`, {payload})
    .then(response => {
      const { data } = response
      return data
    })
    .catch(error => error)
}
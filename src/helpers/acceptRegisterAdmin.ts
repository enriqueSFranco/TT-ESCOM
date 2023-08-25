import API from "services/http.service";

const { REACT_APP_URL_VALIDATE_RECRUITER, REACT_APP_URL_MANAGER_VALIDATE_COMPANY } = process.env;

export const validateBusiness = async (businessID) => {
  const payload = { t400_id_admin: 1, activate: true };

  const { data } = await API.put(
    `${REACT_APP_URL_MANAGER_VALIDATE_COMPANY}${businessID}/`,
    payload
  );
  return data;
};

export const rejectBusiness = async (businessID) => {
  const payload = { t400_id_admin: 1, activate: false };

  const { data } = await API.put(
    `${REACT_APP_URL_MANAGER_VALIDATE_COMPANY}${businessID}/`,
    payload
  );
  return data;
};


export const validateRecruiter = async (recruiterID) => {
  const payload = { t400_id_admin: 1, activate: true };

  const { data } = await API.put(
    `${REACT_APP_URL_VALIDATE_RECRUITER}${recruiterID}/`,
    payload
  );
  return data;
};

export const rejectRecruiter = async (recruiterID) => {
  const payload = { t400_id_admin: 1, activate: false };

  const { data } = await API.put(
    `${REACT_APP_URL_VALIDATE_RECRUITER}${recruiterID}/`,
    payload
  );
  return data;
};


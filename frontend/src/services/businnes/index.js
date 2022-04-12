import axios from "axios";
import toast from "react-hot-toast";
import { API_COMPANY, API_PHOTO_COMPANY } from "../settings";

export const getImageCompany = async (id) => {
  try {
    const response = await axios.get(`${API_PHOTO_COMPANY}/${id}/`);
    if (!response.status) {
      let error = {
        err: true,
        status: response.status,
        statusText: response.statusText
      }
      throw error;
    }
    const { data } = response;
    return data;
  } catch (error) {
    return error;
  };
};

export const getAllBusiness = async () => {
  return axios.get(API_COMPANY)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => console.error(error));
};

export const getBusiness = (id) => {
  return axios.get(`${API_COMPANY}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};


export const createAccountCompany = ({
  t300_name,
  t300_rfc,
  t300_nss,
  t300_email,
  t300_bussiness_name,
  t300_web_page,
  t300_mision,
  t300_vision,
  t300_objective,
  t300_logo,
  t300_banner,
  t400_id_admin,
  t300_create_date,
} = {}) => {
  toast.promise(
    axios
      .post(
        API_COMPANY,
        {
          t300_name,
          t300_rfc,
          t300_nss,
          t300_email,
          t300_bussiness_name,
          t300_web_page,
          t300_mision,
          t300_vision,
          t300_objective,
          t300_logo,
          t300_banner,
          t400_id_admin,
          t300_create_date,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;
        return data;
      })
    , {
      loading: 'Enviando Pre-Registro.',
      success: 'Pre-Registro enviado.',
      error: error => error.response.data.message
    }
  );
};

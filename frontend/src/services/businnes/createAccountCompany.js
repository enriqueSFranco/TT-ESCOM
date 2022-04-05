import axios from "axios";
import { API_COMPANY } from "../settings";

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
  t300_create_date
} = {}) => {
  return axios.post(API_COMPANY, {
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
    t300_create_date}, {
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
      }
    })
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
}

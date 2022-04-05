import axios from "axios";
import { API_STUDENT } from "../settings/API_STUDENT";

export const updateStudent = (id) => {
  const body = {
    t100_boleta: "",
    t100_name: "",
    t100_last_name: "",
    t100_username: "",
    t100_password: "",
    t100_cv: null,
    t100_email: "",
    t100_gender: "",
    t100_date_of_birth: "",
    t100_personal_objectives: null,
    t100_speciality: null,
    t100_phonenumber: null,
    t100_residence: null,
    t100_modalities: null,
    t100_target_salary: null,
    t100_travel: false,
    t100_profile_picture: null,
    is_active: true,
  };

  return axios.put(`${API_STUDENT}/${id}/`, body, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    }
  })
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};

// @ts-check

import axios from "axios";
import dayjs from "dayjs";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import {
  API_STUDENT,
  API_SOCIAL_NETWORK,
  API_PHOTO_STUDENT,
} from "../settings";

// let token = window.sessionStorage.getItem('token') ? JSON.parse(window.sessionStorage.getItem('token')) : null;

// const refreshToken = (newToken = {}) => {
//   console.log(newToken)
//   return axios.post('/api/token/refresh-token/', JSON.stringify({'refresh': newToken}), {
//     headers: {
//       'Content-Type': 'application/json',
//       'Accept': 'application/json',
//     }
//   })
//     .then(response => {
//       const { data } = response;
//       window.sessionStorage.setItem('token', JSON.stringify(data));
//       return data;
//     })
//     .catch(error => {
//       if (error.response) return error.reposne.data.message;
//     });
// };

export const getStudent = async (id) => {
  // const student = jwt_decode(token.access);
  // const isExpired = dayjs.unix(student?.exp).diff(dayjs()) < 1;
  // console.log(token)
  // if (isExpired) {
  //   token = await refreshToken(token?.refresh);
  // }

  const config = {
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token?.access}`,
      'Accept': 'application/json',
    },
  };
  return axios
    .get(`${API_STUDENT}${id}/`, config)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data.errors;
      }
    }
    );
};


export const getSocialNetwork = async (id) => {
  return axios
    .get(`${API_SOCIAL_NETWORK}/${id}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.status;
      }
    });
};

/**
 * @param {Object} payload objeto que contiene la informacion que se enviara para crear la cuenta de un alumno
 * @param {Number} id identificador de un alumno
 * @return {Promise}
 **/
export const updateStudent = (id, payload = {}) => {
  return toast.promise(
    axios
      .put(`${API_STUDENT}${id}/`, payload, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((error) => {
        if (error.response) {
          return error.response.data;
        }
      }),
    {
      loading: "Actualizando Perfil",
      success: "Tu perfil se ha actualizado correctamente",
      error: "Hubo erro en la actualizacion",
    }
  );
};

/**
 * @param {Object} payload objeto que contiene la informacion que se enviara para crear la cuenta de un alumno
 * @returns {Promise}
 **/
export const createAccountStudent = async (payload) => {
  try {
    const response = await axios.post(API_STUDENT, payload, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    return response;
  } catch (error) {
    if (error.response) {
      return error.response.data.errors;
    }
  }
};

/**
 * @param {Object} payload
 * @return {Promise}
 **/
export const loginStudent = async (payload) => {};

export const uploadPhotoStudent = (id, img) => {
  const formData = new FormData();

  formData.append("photo", img);

  return axios
    .put(`${API_PHOTO_STUDENT}/${id}/`, formData)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

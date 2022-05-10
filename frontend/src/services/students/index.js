// @ts-check

import axios from "axios";
import toast from "react-hot-toast";
import {
  API_STUDENT,
  API_SOCIAL_NETWORK,
  API_PHOTO_STUDENT,
  API_PROJECT_STUDENT,
} from "../settings";

/**
 * @param {Number} id identificador para obtner un alumno en especifico
 * @returns {Promise}
 **/
export const getStudent = async (id) => {

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
      console.log(data);
      return data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data.errors;
      }
    }
    );
};

/**
 * @param {Number} id identificador de un alumno para obtener sus skills
 * @returns {Promise}
 **/
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

// TODO:terminar la funcion para subir una imagen
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

/**
 * @param {Object} payload
 * @return {Promise}
 **/
export const applyJob = (payload) => {
  return axios.post(`/api/Applications/`, payload, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      if (error.response) return error.response;
    })
};

/**
 * @param {Number} id identificador de un alumno
 * @returns {Promise}
 **/
export const getProjects = (id) => {
  return axios.get(`${API_PROJECT_STUDENT}${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => {
      return error;
    })
};

/**
 * @param {Number} id identificador de un alumno
 * @param {Object} payload objeto con los campos a enviar
 **/
// export const addProject = (id, payload = {}) => {
//   return axios.post(API_PROJECT_STUDENT)
// };

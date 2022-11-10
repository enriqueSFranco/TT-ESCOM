// @ts-check
import API from "services/http.service";
import { CODE_201, CODE_200, CODE_400, CODE_404 } from "services/http.code";
import {
  API_CATALOGUE_PLATAFORM,
  API_ACADEMIC_HISTORIAL,
  API_JOB_APPLICATIONS,
} from "../settings";

const { REACT_APP_URL_CANDIDATE_LANGUAGE, REACT_APP_URL_CANDIDATE, REACT_APP_URL_CANDIDATE_SKILLS, REACT_APP_URL_CANDIDATE_SOCIAL_NETWORKS, REACT_APP_URL_CANDIDATE_ACADEMIC_HISTORIAL, REACT_APP_URL_CANDIDATE_PROJECTS, REACT_APP_URL_CANDIDATE_CERTIFICATIONS, REACT_APP_URL_CANDIDATE_UPLOAD_CV, REACT_APP_URL_CANDIDATE_UPLOAD_IMAGE} = process.env

/**
 * @param {Number} id identificador para obtner un alumno en especifico
 * @returns {Promise}
 **/
export const getStudent = async (id) => {
  let controller = new AbortController()
  let signal = controller.signal

  return API(`${REACT_APP_URL_CANDIDATE}${id}/`, {signal})
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error
    );
};

export const getSkills = () => {
  const controller = new AbortController()
  const signal = controller.signal

  return API.post(`${REACT_APP_URL_CANDIDATE_SKILLS}`, {signal})
    .then(response => {
      const { data } = response
      return data
    })
    .catch(error => error)
}


export const addSkill = (payload = {}) => {
  return API.post(`${REACT_APP_URL_CANDIDATE_SKILLS}`, {payload, headers: {
    accept: 'application/json',
    'Content-Type': 'application/json'
  }})
    .then(response => {
      const { data } = response
      return data
    })
    .catch(error => error)
}

/**
 * @param {Number} id identificador de un alumno para obtener sus redes sociales
 * @returns {Promise}
 **/
export const getSocialNetwork = async (id) => {
  return API(`${REACT_APP_URL_CANDIDATE_SOCIAL_NETWORKS}${id}/`)
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
 * @param {Object} payload informacion que llevara la petcion
 * @returns {Promise}
 **/
export const postSocialNetwork = (payload = {}) => {
  return API.post(
    `${REACT_APP_URL_CANDIDATE_SOCIAL_NETWORKS}`,
    payload,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  )
    .then((response) => response)
    .catch((error) => error);
};

export const getLinks = () => {
  return API(API_CATALOGUE_PLATAFORM)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

/**
 * @param {Object} payload objeto que contiene la informacion que se enviara para crear la cuenta de un alumno
 * @param {Number} id identificador de un alumno
 * @return {Promise}
 **/
export const updateStudent = (id, payload = {}) => {
  return API.put(`${REACT_APP_URL_CANDIDATE}${id}/`, payload)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      }
    })
};

/**
 * @param {Object} payload objeto que contiene la informacion que se enviara para crear la cuenta de un alumno
 * @returns {Promise}
 **/
export const createAccountStudent = async (payload) => {
  try {
    const controller = new AbortController();
    const signal = controller.signal;
    const response = await API.post(
      `${REACT_APP_URL_CANDIDATE}`,
      payload,
      { signal }
    );
    if (response.status === CODE_200 || response.status === CODE_201)
      return response;
    else if (response.status === CODE_400 || response.status === CODE_404) {
      let error = {
        err: true,
        status: response.status || "00",
        statusText: response.statusText || "Opppps, ha ocurrido un error",
      };
      throw error;
    }
  } catch (error) {
    return error;
  }
};


export const uploadPhotoStudent = (id, payload) => {
  
  return API.put(`${REACT_APP_URL_CANDIDATE_UPLOAD_IMAGE}${id}/`, payload)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

export const uploadCVStudent = (id, payload) => {
  
  return API.put(`${REACT_APP_URL_CANDIDATE_UPLOAD_CV}${id}/`, payload)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
};

export const addLanguage = (payload) => {
  return API.post(`${REACT_APP_URL_CANDIDATE_LANGUAGE}`, payload)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
}

export const getLanguageUser = (id) => {
  return API(`${REACT_APP_URL_CANDIDATE_LANGUAGE}${id}/`,)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => error);
}

/**
 * @param {Object} payload
 * @return {Promise}
 **/
export const applyJob = (payload) => {
  return API.post(
    `${process.env.REACT_APP_URL_VACANT_APPLICATION_FOR_JOB}`,
    payload
  )
    .then((response) => response)
    .catch((error) => error.message);
};

export const changeApplyState = (id, payload) => {
  return API.put(`${API_JOB_APPLICATIONS}${id}/`, payload, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      if (error.response) return error.response;
    });
};

/**
 * @param {Number} id identificador de un alumno
 * @returns {Promise}
 **/
export const getProjects = (id) => {
  return API(`${REACT_APP_URL_CANDIDATE_PROJECTS}${id}/`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error) => {
      return error;
    });
};

/**
 * @param {Number} id identificador de un proyecto
 * @returns {Promise}
 **/
export const deleteProject = (id) => {
  return API.delete(`${REACT_APP_URL_CANDIDATE_PROJECTS}${id}/`)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * @param {Object} payload objeto con los campos a enviar
 **/
export const addProject = (payload = {}) => {
  return API.post(REACT_APP_URL_CANDIDATE_PROJECTS, payload)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

/**
 * @param {Number} id identificador de un usuario para obtener su historial academico
 * @returns {Promise}
 **/
export const getAcademicHistorial = (id) => {
  return API(`${REACT_APP_URL_CANDIDATE_ACADEMIC_HISTORIAL}${id}/`)
    .then((response) => response)
    .catch((error) => error);
};

export const postAcademicHistorial = (payload = {}) => {
  return API.post(REACT_APP_URL_CANDIDATE_ACADEMIC_HISTORIAL, payload)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * @param {Number} id identificador de una unidad academica
 * @returns {Promise}
 **/
export const deleteAcademicHistorial = (id) => {
  return API.delete(`${REACT_APP_URL_CANDIDATE_ACADEMIC_HISTORIAL}${id}/`)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * @param {Number} id identificador de un estudiante para obtener sus certificaciones
 * @returns {Promise}
 **/
export const getStudentCertifications = (id) => {
  return API(`${REACT_APP_URL_CANDIDATE_CERTIFICATIONS}${id}/`)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * @param {Number} id identificador de un registro para eliminarlo
 * @returns {Promise}
 **/
export const deleteStudentCertification = (id) => {
  return API.delete(`${REACT_APP_URL_CANDIDATE_CERTIFICATIONS}${id}/`)
    .then((response) => response)
    .catch((error) => error);
};

/**
 * @param {Object} payload informacion que llevara el cuerpo de la peticion
 * @returns {Promise}
 **/
export const postCertification = (payload = {}) => {
  return API.post(REACT_APP_URL_CANDIDATE_CERTIFICATIONS, payload)
    .then((response) => response)
    .catch((error) => error);
};

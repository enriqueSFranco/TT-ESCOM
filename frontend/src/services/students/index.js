import axios from "axios";
import toast from "react-hot-toast";
import { API_STUDENT, API_SOCIAL_NETWORK, API_PHOTO_STUDENT } from "../settings";


export const getStudent = id => {
  return axios.get(`${API_STUDENT}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};


export const getSocialNetwork = id => {
  return axios.get(`${API_SOCIAL_NETWORK}/${id}/`)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => {
      if (error.response) {
        return error.response.status;
      }
    });
};

export const updateStudent = (id, body = {}) => {
  return toast.promise(
    axios
      .put(`${API_STUDENT}${id}/`, body, {
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
      })
    , {
      loading: "Actualizando Perfil",
      success: "Tu perfil se ha actualizado correctamente",
      error: "Hubo erro en la actualizacion"
    }
  );
};


export const createAccountStudent = ({
  t100_boleta,
  t100_name,
  t100_email,
  password,
} = {}) => {
  return toast.promise(
    axios
      .post(
        API_STUDENT,
        { t100_boleta, t100_name, t100_email, password },
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((error) => error.response)
    , {
      loading: "Validando Datos",
      success: "Cuenta creada con exito",
      error: error => error.response.data.message,
    }
  )
};


export const uploadPhotoStudent = (id, img) => {
  const formData = new FormData();

  formData.append("photo", img);

  return axios.put(`${API_PHOTO_STUDENT}/${id}/`, formData)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};

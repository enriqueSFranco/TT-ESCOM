import axios from "axios";
import { API_PHOTO_STUDENT } from "../settings/API_PHOTO_STUDENT";

export const uploadPhotoStudent = (id, img) => {
  const formData = new FormData();

  formData.append("photo", img);

  return axios.post(`${API_PHOTO_STUDENT}/${id}/`, formData)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => error);
};

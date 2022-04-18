import axios from "axios";
import React, { useState } from "react";
import styles from "./Avatar.module.css";

// ruta para subir la imagen de perfil para un alumno: /images/StudentPic/2017/

const Avatar = ({ student }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  const onChange = (e) => setProfilePicture(e.target.files[0]);

  const upload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      const id = student[0]?.t100_boleta;
      
      formData.append("profile_picture", profilePicture, profilePicture.name);
      const { data } = await axios.put(`/images/StudentPic/${id}/`, formData);
  
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (student.length > 0) {
    const name = student[0]?.t100_name;
    const lastName = student[0]?.t100_last_name;

    return (
      <div className={styles.wrapperAvatar}>
        <form onSubmit={upload} className={styles.form}>
          <input
            accept="image/*"
            type="file"
            id="avatar"
            name="avatar"
            onChange={onChange}
            className={styles.uploadImage}
          />
        </form>
        <div className={styles.avatar}>
          {!profilePicture ? (
            <div className={styles.noImage}>
              {name.slice(0, 1)}{lastName && lastName.slice(0, 1)}
            </div>
          ) : (
            // <img src={} alt={}>
            <div className={styles.image}>con foto</div>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export default Avatar;

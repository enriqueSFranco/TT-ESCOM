import axios from "axios";
import React, { useState } from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ student }) => {
  const [image, setImage] = useState(null);

  const onChange = e => setImage(e.target.files[0]);

  const upload = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('file', image);

    const { data } = await axios.put(`/images/StudentPic/2014/`, formData);
    console.log(data);
  }

  console.log(image); 

  return (
    <div className={styles.wrapperAvatar}>
      <form onSubmit={upload}>
        <input type="file" id="avatar" name="avatar" onChange={onChange} className={styles.uploadImage} />
      </form>
      <div className={styles.avatar}>
        {
          !image ? (
            <div className={styles.noImage}>
              {student[0]?.t100_name.slice(0,1)}{student[0]?.t100_last_name.slice(0,1)}
            </div>
          ) : (
            <div className={styles.image}>con foto</div>
          )
        }
      </div>
    </div>
  );
};

export default Avatar;

import React, { useState } from "react";
import styles from "./Avatar.module.css";

const Avatar = ({ student }) => {
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   updateStudent("2014")
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => console.log(error));
  // }, []);
  
  const onChange = (e) => {
  
  };

  return (
    <div className={styles.wrapperAvatar}>
      <input type="file" id="avatar" name="avatar" onChange={onChange} className={styles.uploadImage} />
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

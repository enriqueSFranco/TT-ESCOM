import React from "react";
import styles from "./Interests.module.css";
import * as BsIcon from "react-icons/bs";

const Interests = () => {
  return (
    <div className={styles.CompOne}>
      <h4>Intereses</h4>
      <div className={styles.content}>
        <div className={styles.areas}>
          <BsIcon.BsCircleFill className={styles.icon} />
          <span className={styles.tex}>Areas de interes</span>
        </div>

        <div className={styles.areas}>
          <BsIcon.BsCircleFill className={styles.icon} />
          <span className={styles.tex}>Posiciones buscadas</span>
        </div>
      </div>
      <div className={styles.content}>
          <div className={styles.areas}>
            <BsIcon.BsCircleFill className={styles.icon} />
            <span className={styles.tex}>Hard Skills</span>
          </div>

          <div className={styles.areas}>
            <BsIcon.BsCircleFill className={styles.icon} />
            <span className={styles.tex}>Soft Skills</span>
          </div>
			  </div>
    </div>
  );
};
export default Interests;

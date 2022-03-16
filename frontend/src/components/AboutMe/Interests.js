import React from "react";
import styles from "./Interests.module.css";
import * as BsIcon from "react-icons/bs";

const Interests = () => {
  return (
    <div className={styles.CompOne}>
      <h5>Intereses</h5>
      <div className={styles.content}>
        <div className={styles.areas}>
          <BsIcon.BsCircleFill className={styles.icon} />
          <span className={styles.tex}>Areas de interes</span>
        </div>

        <div className={styles.jobs}>
          <BsIcon.BsCircleFill className={styles.icon} />
          <span className={styles.tex}>Posiciones buscadas</span>
        </div>
      </div>
    </div>
  );
};
export default Interests;

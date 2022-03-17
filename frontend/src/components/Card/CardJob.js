import React from "react";
import styles from "./CardJob.module.css";

const JobCard = ({ job }) => {
  return (
    <article className={`${styles.card}`}>
      <header className={styles.cardHeader}>
        <h3 className={`${styles.nameCompany}`}>
          {job?.company}
        </h3>
      </header>
      <main>
        <p className={`${styles.lineClamp}`}>
          {job?.descriptionJob}
        </p>
        <p className={`${styles.timeWork}`}>
          Tiempo: {job?.full_time ? "Tiempo Completo" : "Medio Tiempo"}
        </p>
        <p className={`${styles.location}`}>
          Ubicacion: {job?.locationJob}
        </p>
        <p className={`${styles.publicationTime}`}>
          Publicada hace: 1min
        </p>
      </main>
    </article>
  );
};

export default JobCard;

import React from "react";
import styles from "./CardJob.module.css";

const JobCard = ({
  company,
  type_vacancy,
  descriptionJob,
  min_salary,
  maxSalary,
  full_time,
  locationJob,
}) => {

  return (
    <article className={`${styles.card}`}>
      <header className={styles.cardHeader}>
          <h3 className={`${styles.nameCompany} ${styles.placeholder}`}>
            {company}
          </h3>
          <h3 className={`${styles.title} ${styles.placeholder}`}>
            {type_vacancy}
          </h3>
      </header>
      <main>
        <p className={`${styles.lineClamp}  ${styles.placeholder}`}>
        {descriptionJob}
        </p>
        <p className={`${styles.placeholder} ${styles.timeWork}`}>
          Tiempo: {full_time ? "Tiempo Completo" : "Medio Tiempo"}
        </p>
        <p className={`${styles.placeholder} ${styles.location}`}>
          Ubicacion: {locationJob}
        </p>
        <p className={`${styles.placeholder} ${styles.publicationTime}`}>
          Publicada hace: 1min
        </p>
      </main>
    </article>
  );
};

export default JobCard;

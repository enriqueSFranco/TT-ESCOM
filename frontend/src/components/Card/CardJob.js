import React from "react";
import styles from "./CardJob.module.css";

const JobCard = ({
  company,
  type_vacancy,
  min_salary,
  max_salary,
  full_time,
  locationJob,
}) => {

  return (
    <article className={styles.card}>
      <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <h3 className={`${styles.nameCompany} ${styles.placeholder}`}>
              {company}
            </h3>
            <h3 className={`${styles.titleJob} ${styles.placeholder}`}>
              {type_vacancy}
            </h3>
          </div>
          <div className={styles.cardContent}>
            <div className={`${styles.descriptionJob} ${styles.placeholder}`}>
              <p>Descripcion de la vacante</p>
            </div>
            <div className={`${styles.tag} ${styles.placeholder}`}>
              <span className={`${styles.tagSalary} ${styles.placeholder}`}>
                Sueldo: ${min_salary} - ${max_salary}
              </span>
              <br />
              <span className={`${styles.tagTime} ${styles.placeholder}`}>
                Horario:{full_time ? "Tiempo Completo" : "Medio Tiempo"}
              </span>
              <br />
              <span className={`${styles.tagLocation} ${styles.placeholder}`}>Ubicacion:{locationJob}</span>
            </div>
          </div>
        </div>
    </article>
  );
};

export default JobCard;

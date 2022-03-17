import React from "react";
import { useFetch } from "../../hooks/useFetch";
import styles from "./CardJob.module.css";

const JobCard = ({
  company,
  type_vacancy,
  min_salary,
  max_salary,
  full_time,
  locationJob,
}) => {
  const { data, loading } = useFetch("../../api/db.js");
  console.log(data);
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
        Análisis y mapeo de los procesos de negocio, para apoyar la visión de la organización “AS-IS” to "To-Be", la verificación de que se están cumpliendo los objetivos de negocio. Desarrollo de políticas, procedimientos, diagramas de flujo, objetivos de control, reportes ejecutivos, presentaciones ejecutivas y materiales de capacitación (prevencion de antilavado de dinero, terrorismo)
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

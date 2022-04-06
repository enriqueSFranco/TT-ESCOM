import styles from "./CardJob.module.css";

const JobCard = ({ job }) => {

  if (!job) return null;

  return (
    <article className={`${styles.card}`}>
      <header className={styles.cardHeader}>
        <h3 className={`${styles.nameCompany}`}>
          {job?.t200_job}
        </h3>
      </header>
      <div>
        <div className={styles.summary}>
          <p className={`${styles.lineClamp}`}>
            {job?.t200_description}
          </p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.wrapperTags}>
            <p className={`${styles.timeWork} ${styles.tag}`}>
              Tiempo: {job?.t200_home_ofice ? "Remoto" : "Presencial"}
            </p>
            <p className={`${styles.timeWork} ${styles.tag}`}>
              Perfil: {job?.c206_id_profile?.c206_description}
            </p>
            <p className={`${styles.salary} ${styles.tag}`}>
              Sueldo: ${job?.t200_min_salary} a ${job?.t200_max_salary}
            </p>
            <p className={`${styles.location} ${styles.tag}`}>
              Ubicacion: {job?.locationJob}
            </p>
            <p className={`${styles.publicationTime} ${styles.tag}`}>
              Fecha de publicacion: {job?.t200_publish_date}
            </p>
          </div>
          <div className={styles.logoBusiness}>
            <p>{job?.t300_id_company}</p>
            {/* <img src={job?.t300_id_company} alt={job?.t300_name} /> */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobCard;

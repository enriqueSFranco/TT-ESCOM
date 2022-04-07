import * as GiIcon from "react-icons/gi";
import * as BsIcon from "react-icons/bs";
import * as MdIcon from "react-icons/md";
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
              <MdIcon.MdBusinessCenter />
              Modalidad: {job?.t200_home_ofice ? "Remoto" : "Presencial"}
            </p>
            {/* <p className={`${styles.profile} ${styles.tag}`}>
              Perfil: {job?.c206_id_profile?.c206_description}
            </p> */}
            <p className={`${styles.salary} ${styles.tag}`}>
              <GiIcon.GiMoneyStack />
              Sueldo: ${job?.t200_min_salary} a ${job?.t200_max_salary}
            </p>
            {/* <p className={`${styles.location} ${styles.tag}`}>
              Ubicacion: {job?.locationJob}
            </p> */}
            <p className={`${styles.publicationTime} ${styles.tag}`}>
              <BsIcon.BsCalendarDate />
              Fecha de publicacion: {job?.t200_publish_date}
            </p>
          </div>
          <div className={styles.logoBusiness}>
            <img src={job?.t300_id_company?.t300_logo} alt={job?.t300_id_company?.t300_name} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobCard;

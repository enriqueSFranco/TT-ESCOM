import React from "react";
import Chip from "@mui/material/Chip";
import { numberFormat } from "utils/numberFormat";
import * as GiIcon from "react-icons/gi";
import * as BsIcon from "react-icons/bs";
import * as MdIcon from "react-icons/md";
import * as IoIcon from "react-icons/io";
import styles from "./CardJob.module.css";


const JobCard = ({ job }) => {

  if (!job) return null;

  return (
    <article className={`${styles.card}`}>
      <header className={styles.cardHeader}>
        <h3 className={`${styles.nameCompany}`}>{job?.t200_job}</h3>
      </header>
      <div>
        <div className={styles.summary}>
          <p className={`${styles.lineClamp}`}>{job?.t200_description}</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.wrapperTags}>
            <Chip label={`Modalidad: ${job?.t200_home_ofice ? "Remoto" : "Presencial"}`} size="small" icon={<MdIcon.MdBusinessCenter />} />

            <Chip label={`Sueldo: ${numberFormat(job?.t200_min_salary).slice(4,)}MXN a ${numberFormat(job?.t200_max_salary).slice(4,)}MXN al mes`} size="small" icon={<GiIcon.GiMoneyStack />} />

            <Chip label={`Fecha de publicacion: ${job?.t200_publish_date}`} size="small" icon={<BsIcon.BsCalendarDate />} />
          </div>
          <div className={styles.logoBusiness}>
            {job?.t300_id_company?.t300_logo ? (
              <img
                src={job?.t300_id_company?.t300_logo}
                alt={job?.t300_id_company?.t300_name}
              />
            ) : (
              <IoIcon.IoMdBusiness className={styles.notLogo} />
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobCard;

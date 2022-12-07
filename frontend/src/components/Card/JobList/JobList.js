import { memo } from "react";
import 'moment/locale/es-mx'
import CardJob from "../CardJob/CardJob";
import styles from "./JobList.module.css";

const ListEmptyJobs = () => {

  return (
    <article className={`${styles.notJobs}`}>
      <h2>¡Upps, no tenemos vacantes registradas!</h2>
    </article>
  );
};

const JobList = ({ jobs, setVacantId }) => {



  if (!jobs || jobs === undefined) return null;


  if (jobs?.length < 0) return <ListEmptyJobs />

  const handleClick = (e, vacantId) => {
    e.preventDefault()
    setVacantId(vacantId)
    console.log(`click ${vacantId}`)
  }

  return (
    <>
      {jobs
        .filter((el) => el?.c204_id_vacant_status.c204_id_status === 2)
        .map((el) => (
          <CardJob key={`card-job-id_${crypto.randomUUID()}`} job={el} onClick={(e) => handleClick(e, el?.t200_id_vacant)} />
        ))}
    </>
  );
};

export default memo(JobList);

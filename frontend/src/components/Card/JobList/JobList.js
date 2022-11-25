import { memo, useEffect } from "react";
import CardJob from "../CardJob/CardJob";
// import Skeleton from "components/Skeleton/Skeleton";
import styles from "./JobList.module.css";

const ListEmptyJobs = () => {
  // const cardRef = useRef(null)

  return (
    <article className={`${styles.notJobs}`}>
      <h2>¡Upps, no tenemos vacantes registradas!</h2>
    </article>
  );
};

const JobList = ({ jobs, loading }) => {

  useEffect(() => {
    const $cards = document.querySelectorAll('[data-close-date]')
    $cards.forEach(card => {
      // TODO: Remover la card con fecha mayor a un mes a partir de su publicacion
      console.log(card)
    })
  }, [jobs.length])

  if (!jobs) return null;

  if (jobs.result?.length < 0) return <ListEmptyJobs />

  return (
    <>
      {jobs
        .filter((el) => el?.c204_id_vacant_status.c204_id_status === 2)
        .map((el) => (
          <CardJob key={`card-job-id_${crypto.randomUUID()}`} job={el} />
        ))}
    </>
  );
};

export default memo(JobList);

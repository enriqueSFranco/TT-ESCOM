import { memo, useEffect } from "react";
import moment from "moment";
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

const JobList = ({ jobs, loading }) => {
  var date2 = new Date('2020-10-22');
  useEffect(() => {
    const $cards = document.querySelectorAll('[data-close-date]')
    $cards.forEach(card => {
      
      // TODO: Remover la card con fecha mayor a un mes a partir de su publicacion
      // if (card.getAttribute())
      // console.log(card.getAttribute("data-close-date"))
    })
  }, [jobs.length])

  if (!jobs || jobs === undefined) return null;


  if (jobs?.length < 0) return <ListEmptyJobs />

  console.log(moment("20221028", "YYYYMMDD").fromNow())

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

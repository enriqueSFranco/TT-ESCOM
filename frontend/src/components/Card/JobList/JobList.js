import { memo } from "react";
import 'moment/locale/es-mx'
import CardJob from "../CardJob/CardJob";
import styles from "./JobList.module.css";

// var fechaInicio = new Date('2022-10-23').getTime();
// const now = new Date()
// let dateCurrent = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`

// console.log(typeof (diff/(1000*60*60*24)));

const ListEmptyJobs = () => {

  return (
    <article className={`${styles.notJobs}`}>
      <h2>¡Upps, no tenemos vacantes registradas!</h2>
    </article>
  );
};

const JobList = ({ jobs, loading }) => {

  // useEffect(() => {
  //   const $cards = document.querySelectorAll('[data-close-date]')
  //   if (!$cards.length) return;
    
  //   $cards.forEach((card, index) => {
  //     if (Boolean(card.getAttribute("data-close-date"))) {
  //       let publicDateJob = new Date(card.getAttribute("data-close-date"))
  //       let diff = Math.floor((now - publicDateJob) / (1000 * 60 * 60 * 24))
  //       let semilla = {
  //         diff,
  //         idPublicDate: card
  //       }
  //     }
  //   })
  // }, [])

  if (!jobs || jobs === undefined) return null;


  if (jobs?.length < 0) return <ListEmptyJobs />

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

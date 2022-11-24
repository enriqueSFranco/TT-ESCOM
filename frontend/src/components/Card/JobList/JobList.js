import { memo, useRef } from "react";
import CardJob from "../CardJob/CardJob";
// import Skeleton from "components/Skeleton/Skeleton";
import styles from "./JobList.module.css";

const ListEmptyJobs = () => {
  const cardRef = useRef(null)

  return (
    <article className={`${styles.notJobs}`}>
      <h2>¡Upps, no tenemos vacantes registradas!</h2>
    </article>
  );
};

const JobList = ({ jobs, loading }) => {
  if (!jobs) return null;

  // if (loading) return <Skeleton type="feed" />;

  if (jobs.result?.length < 0) return <ListEmptyJobs />

  return (
    <>
      {jobs
        .filter((el) => el?.c204_id_vacant_status.c204_id_status === 2)
        .map((el) => (
          <CardJob key={`card-job-id_${el.t200_id_vacant}`} job={el} />
        ))}
    </>
  );
};

export default memo(JobList);

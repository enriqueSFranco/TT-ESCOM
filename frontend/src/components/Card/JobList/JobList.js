import { memo } from "react";
import CardJob from "../CardJob/CardJob";
import Skeleton from "components/Skeleton/Skeleton"
import styles from "./JobList.module.css";

const ListEmptyJobs = () => {
  return (
    <article className={`${styles.notJobs}`}>
      <h2>¡Upps, no tenemos vacantes registradas!</h2>
    </article>
  );
};

const JobList = ({ jobs, loading }) => {

  if (!jobs) return null;

  if (loading) {
    return (
      <Skeleton type='feed' />
    )
  }

  if (jobs.result?.length < 0) {
    return <ListEmptyJobs />
  }

  return (
    <>
      {jobs?.map((job) => <CardJob key={crypto.randomUUID()} job={job} />)}
    </>
  );
};

export default memo(JobList);

import CardJob from "../CardJob/CardJob";
import { getRandomColor } from "utils/generateColors";
import styles from "./JobList.module.css";

const ListEmptyJobs = () => {
  return (
    <article className={`${styles.notJobs}`}>
      <h2>¡Upps, no tenemos vacantes registradas!</h2>
    </article>
  );
};

const JobList = ({ jobs, loading }) => {
  console.log(jobs)
  
  if (jobs?.length > 0) {
    return (
      <>
        {jobs?.map((job) => <CardJob key={job?.t200_id_vacant} randomColor={getRandomColor()} job={job} />)}
      </>
    );
  }
  return <ListEmptyJobs />;
};

export default JobList;

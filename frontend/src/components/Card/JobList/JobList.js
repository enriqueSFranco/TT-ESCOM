import { Link, Outlet } from "react-router-dom";
import { useJobs } from "hooks/useJobs";
// import Pagination from '@mui/material/Pagination';
import Skeleton from "../../Skeleton/Skeleton";
import CardJob from "../CardJob/CardJob";
import styles from "./JobList.module.css";

const JobList = () => {
  const { loading, jobs, setPage } = useJobs();

  const nextPage = () => {
    setPage(prevState => prevState + 1);
  }

  const prevPage = () => {
    setPage(prevState => prevState - 1)
  };

  return (
    <>
      <article className={`${styles.wrapper} ${styles.grid}`}>
        <div style={{ width: "500px" }}>
          {loading ? (
            <Skeleton type="feed" />
          ) : jobs.length > 0 ? (
            jobs.map((job) => (
              <Link
                to={`vacante/${job?.t200_id_vacant}`}
                key={job?.t200_id_vacant}
              >
                <CardJob job={job} />
              </Link>
            ))
          ) : (
            <h3>Sin vacantes</h3>
          )}
        </div>
        <Outlet />
      </article>
    </>
  );
};

export default JobList;

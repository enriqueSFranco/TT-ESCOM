import { useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Skeleton from "../../Skeleton/Skeleton";
import CardJob from "../CardJob/CardJob";
import styles from "./JobList.module.css";

const JobList = ({jobs, loading, page, setPage, maxLenPage}) => {
  

  const handlePagination = (e, value) => {
    setPage(value)
  };
  
  // if (jobs.length < 0) return null;
  
  console.log(jobs)
  return (
    <>
      <article className={`${styles.wrapper} ${styles.grid}`}>
        <div style={{ width: "500px" }}>
          {loading ? (
            <Skeleton type="feed" />
          ) : jobs?.map((job) => (
            <Link
              to={`vacante/${job?.t200_id_vacant}`}
              key={job?.t200_id_vacant}
            >
              <CardJob job={job} />
            </Link>
          )
          )}
        </div>
        <Outlet />
      </article>
      <div className={styles.pagination}>
        {/* <button onClick={prev}>prev</button>
        <button onClick={next}>next</button> */}
        <Pagination count={isNaN(maxLenPage) ? 1 : maxLenPage} color="primary" page={page} onChange={handlePagination} />
      </div>
    </>
  );
};

export default JobList;

import { useMemo } from "react";
import { Link, Outlet } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Skeleton from "../../Skeleton/Skeleton";
import CardJob from "../CardJob/CardJob";
import styles from "./JobList.module.css";

const JobList = ({jobs, loading, page, setPage}) => {
  
  let maxLenPage = useMemo(() => Math.ceil(jobs?.count / jobs?.page_size), [jobs?.count, jobs?.page_size]);
  // const next = () => setPage((currentPage) => Math.min(currentPage + 1, maxLenPage));
  // const prev = () => setPage((currentPage) => Math.max(currentPage - 1, 1));
  
  const handlePagination = (e, value) => {
    setPage(value)
  };
  
  if (Object.keys(jobs).length < 0) return null;
  
  
  return (
    <>
      <article className={`${styles.wrapper} ${styles.grid}`}>
        <div style={{ width: "500px" }}>
          {loading ? (
            <Skeleton type="feed" />
          ) : Object.keys(jobs).length > 0 ? (
            jobs?.result?.map((job) => (
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
      <div className={styles.pagination}>
        {/* <button onClick={prev}>prev</button>
        <button onClick={next}>next</button> */}
        <Pagination count={isNaN(maxLenPage) ? 1 : maxLenPage} color="primary" page={page} onChange={handlePagination} />
      </div>
    </>
  );
};

export default JobList;

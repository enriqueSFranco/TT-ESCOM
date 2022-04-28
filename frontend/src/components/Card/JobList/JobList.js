import { Link, Outlet } from "react-router-dom";
import Skeleton from "../../Skeleton/Skeleton";
import CardJob from "../CardJob/CardJob";
import styles from "./JobList.module.css";

const JobList = ({jobs, loading, setPage, maxLenPage}) => {

  const prevPage = () => {
    setPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const nextPage = () => {
    setPage((currentPage) => Math.min(currentPage + 1, maxLenPage));
  };

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
        <button onClick={prevPage}>prev</button>
        <button onClick={nextPage}>next</button>
        {/* <Pagination count={isNaN(maxLenPage) ? 1 : maxLenPage} color="primary" page={page} onChange={handlePagination} /> */}
      </div>
    </>
  );
};

export default JobList;

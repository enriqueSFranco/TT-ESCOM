import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Skeleton from "../../Skeleton/Skeleton";
import CardJob from "../CardJob/CardJob";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import burrito from "images/emoji_angustiado.jpg"
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
    {jobs?.length > 0 ? (
      <>
        <article className={`${styles.wrapper} ${styles.grid}`}>
          <div style={{ width: "550px" }}>
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
          <button onClick={prevPage}><GrFormPreviousLink className={styles.icon} />Anterior</button>
          <button onClick={nextPage}>Siguiente <GrFormNextLink className={styles.icon} /></button>
        </div>
      </>
    ) : (
      <article className={`container ${styles.notJobs}`}>
        <div className={styles.bodyNotJobs}>
          <h2>¡Upps, no tenemos vacantes registradas!</h2>
          <img src={burrito} alt="burrito_ipn" />
        </div>
      </article>
    )}
    </>
  );
};

export default JobList;

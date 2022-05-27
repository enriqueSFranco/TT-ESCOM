import { useCallback, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Skeleton from "../../Skeleton/Skeleton";
import CardJob from "../CardJob/CardJob";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import burrito from "images/emoji_angustiado.jpg"
import styles from "./JobList.module.css";

const JobList = ({jobs, loading, page, setPage, maxLenPage}) => {

  const prevPage = useCallback(() => {
    setPage(prevState => {

      if ((prevState - 1) > 0) {
        return prevState - 1;
      }
      return prevState;
    })
  }, [setPage]);

  const  nextPage = useCallback(() => {
    // console.log("next: ",page)
    setPage((prevState) => {
      if (prevState < maxLenPage) {
        return prevState + 1;
      }
      return prevState;
    });
  },[setPage, maxLenPage]);
  // console.log(page)
  return (
    <>
    {jobs?.length > 0 ? (
      <>
        <article className={`${styles.wrapper} ${styles.grid}`}>
          <div style={{ width: "550px" }}>
            {loading ? (
              <Skeleton type="feed" />
            ) : jobs?.filter(job => job?.c204_id_vacant_status?.c204_description === "Abierta")
              .map(job => (
                <Link
                to={`vacante/${job?.t200_id_vacant}`}
                key={job?.t200_id_vacant}
              >
                <CardJob job={job} />
              </Link>
              ))
            }
          </div>
          <Outlet />
        </article>
        <div className={styles.pagination}>
          <button disabled={page <= 1} onClick={prevPage}><GrFormPreviousLink className={styles.icon} />Anterior</button>
          <button disabled={page === maxLenPage} onClick={nextPage}>Siguiente <GrFormNextLink className={styles.icon} /></button>
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

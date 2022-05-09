import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Skeleton from "../../Skeleton/Skeleton";
import CardJob from "../CardJob/CardJob";
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import burrito from "images/emoji_angustiado.jpg"
import styles from "./JobList.module.css";

const JobList = ({jobs, loading, setPage, maxLenPage}) => {

  const [showContent, setShowContent] = useState(JSON.parse(window.localStorage.getItem("showContent")));

  const prevPage = () => {
    setPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const nextPage = () => {
    setPage((currentPage) => Math.min(currentPage + 1, maxLenPage));
  };
  
  
  const handleClick = () => {
    try {
      setShowContent(true);
      window.localStorage.setItem("showContent", JSON.stringify(true));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(showContent)

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
                onClick={handleClick}
              >
                <CardJob job={job} />
              </Link>
            )
            )}
          </div>
          {
            !showContent ? (<h1>Contenido inicial</h1>) : <Outlet />
          }
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

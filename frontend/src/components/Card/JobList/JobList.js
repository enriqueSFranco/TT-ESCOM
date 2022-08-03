import { Link } from "react-router-dom";
import Skeleton from "../../Skeleton/Skeleton";
import CardJob from "../CardJob/CardJob";
import styles from "./JobList.module.css";

const ListEmptyJobs = () => {
  return (
    <article className={`${styles.notJobs}`}>
      <h2>¡Upps, no tenemos vacantes registradas!</h2>
    </article>
  );
};

const JobList = ({ jobs, loading }) => {
  return (
    <>
      {jobs?.length > 0 ? (
        <>
          <article className={`${styles.wrapper} ${styles.grid}`}>
            <div style={{ width: "550px" }}>
              {loading ? (
                <Skeleton type="feed" />
              ) : (
                jobs
                  ?.filter(
                    (job) =>
                      job?.c204_id_vacant_status?.c204_description === "Abierta"
                  )
                  .map((job) => (
                    <Link
                      to={`vacante/${job?.t200_id_vacant}`}
                      key={job?.t200_id_vacant}
                    >
                      <CardJob job={job} />
                    </Link>
                  ))
              )}
            </div>
          </article>
        </>
      ) : (
        <ListEmptyJobs />
      )}
    </>
  );
};

export default JobList;

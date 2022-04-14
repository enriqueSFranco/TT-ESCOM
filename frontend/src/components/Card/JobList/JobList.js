import { Link, Outlet } from "react-router-dom";
import Skeleton from "../../Skeleton/Skeleton";
import CardJob from "../CardJob/CardJob";
import styles from "./JobList.module.css";

const JobList = ({ jobs = [], loading }) => {

  return (
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
  );
};

export default JobList;

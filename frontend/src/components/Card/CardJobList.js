import { Link, Outlet } from "react-router-dom";
import Skeleton from "../Skeleton/Skeleton";
import JobCard from "./CardJob";
import styles from "./CardJobList.module.css";

const JobList = ({ jobs = [], loading }) => {
  console.log(jobs)
  return (
    <article className={`${styles.wrapper} ${styles.grid}`}>
      <div style={{width: "500px"}}>
        {
          loading ? (
            <Skeleton type="feed" />
          ) : (

            jobs && jobs.map((job) => (
              <Link to={`/${job?.t200_id_vacant}`} key={job?.t200_id_vacant}>
                <JobCard job={job} />
              </Link>
            ))
          )
        }
      </div>
      <Outlet />
    </article>
  );
};

export default JobList;

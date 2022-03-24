import React from "react"

import { Link, Outlet } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Skeleton from "../Skeleton/Skeleton";
import JobCard from "./CardJob";
import styles from "./CardJob.module.css";

const JobList = () => {
  const { data, loading } = useFetch("/api/Vacants/");
  // console.log(data)
  if (!data) return null;

  return (
    <div className={styles.grid}>
      <div className={`${styles.wrapper}`}>
        {
          loading ? (
            <Skeleton type="feed" />
          ) : (
            data.map((job) => (
              <Link to={`/${job?.t200_id_vacant}`} key={job?.t200_id_vacant}>
                <JobCard job={job} />
              </Link>
            ))
          )
        }
      </div>
      <Outlet />
    </div>
  );
};

export default JobList;

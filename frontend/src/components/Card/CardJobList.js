import React from "react"

import { Link, Outlet } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import JobCard from "./CardJob";
import styles from "./CardJob.module.css";

const JobList = () => {
  const { data } = useFetch("/empleos");


  console.log(data)

  if (!data) return null;

  return (
    <div className={styles.grid}>
      <div className={`${styles.wrapper}`}>
        {data.map(
          ({
            id,
            company,
            img_company,
            type_vacancy,
            descriptionJob,
            min_salary,
            max_salary,
            full_time,
            location,
          }) => (
            <Link to={id.toString()} key={id}>
              <JobCard
                company={company}
                type_vacancy={type_vacancy}
                descriptionJob={descriptionJob}
                min_salary={min_salary}
                max_salary={max_salary}
                full_time={full_time}
                location={location}
              />
            </Link>
          )
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default JobList;

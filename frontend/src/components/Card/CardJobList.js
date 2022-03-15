import { Link, Outlet } from "react-router-dom";
import JobCard from "./CardJob";
import db from "../../api/db";
import styles from "./CardJob.module.css";

const JobList = () => {
  return (
    <div className={styles.grid}>
      <div className={`${styles.wrapper}`}>
        {db.map(
          ({
            id,
            company,
            img_company,
            type_vacancy,
            min_salary,
            max_salary,
            full_time,
            location,
          }) => (
            <Link to={id.toString()} key={id}>
              <JobCard
                company={company}
                type_vacancy={type_vacancy}
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

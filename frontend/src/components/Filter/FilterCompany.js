import React, { useEffect, useState } from 'react';
import { getAllBusiness } from '../../services/businnes/getAllBusiness';
import { getAllJobs } from '../../services/jobs/getAllJobs';
import styles from './Filter.module.css';

const FilterCompany = () => {
  const [value, setValue] = useState("");
  const [jobs, setJobs] = useState([]);
  const [business, setBusiness] = useState([]);

  const businnesFilter = (e, option) => {
    
  };

  useEffect(() => {
    const fetchData = async () => {
      const [jobsRes, businessRes] = await Promise.all([
        getAllJobs(),
        getAllBusiness()
      ]);
      setJobs(jobsRes);
      setBusiness(businessRes)
    };
    fetchData();
  }, []);
  console.log(business)
  return (
    <div className={styles.select}>
      <select name="profile" id="profile" onChange={businnesFilter}>
        {business && business.map(company => (
          <option key={company?.t300_id_company}>{company?.t300_name}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterCompany;
import React, { useEffect, useState } from 'react';
import { getAllBusiness } from '../../services/businnes/getAllBusiness';
import styles from './Filter.module.css';

const FilterCompany = ({ filterBusiness }) => {
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    getAllBusiness()
      .then(response => {
        setBusiness(response);
      })
      .catch(error => console.error(error))
  }, []);

  return (
    <div className={styles.select}>
      <select name="profile" id="profile" defaultValue="" onChange={filterBusiness}>
        <option value="">Empresas</option>
        {business && business.map(company => (
          <option key={company?.t300_id_company} value={company?.t300_name}>{company?.t300_name}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterCompany;
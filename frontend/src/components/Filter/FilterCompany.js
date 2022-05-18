import React, { useEffect, useState } from 'react';
import { getAllBusiness } from 'services/businnes/index';
import styles from './Filter.module.css';

const FilterCompany = ({ onChange }) => {
  const [business, setBusiness] = useState(null);

  console.log(business)

  useEffect(() => {
    getAllBusiness()
      .then(response => {
        setBusiness(response);
      })
      .catch(error => console.error(error))
    return () => null;
  }, []);

  return (
    <div className={styles.select}>
      <select name="business" id="business" onChange={onChange}>
        <option value="allBusiness">Empresas</option>
        {business && business.map(({t300_id_company, t300_name}) => (
          <option key={t300_id_company} value={t300_name}>{t300_name}</option>
        ))}
      </select>
    </div>
  )
}

export default FilterCompany;
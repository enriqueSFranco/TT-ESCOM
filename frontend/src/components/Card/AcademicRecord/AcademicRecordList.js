import React, { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { openModalHistoryRecord } from 'utils/openModal'
import { uuid } from 'utils/uuid';
import { getAcademicHistorial } from 'services/students';
import AcademicRecord from './AcademicRecord';
import { MdAdd } from "react-icons/md";
import styles from './AcademicRecord.module.css';

const AcademicRecordList = () => {
  const [data, setData] = useState(null);
  const { token } = useAuth();

  let id = token?.user?.user_id;

  function handleOpenModal() {
    openModalHistoryRecord()
  }

  useEffect(() => {
    getAcademicHistorial(id)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          const { data } = response;
          setData(data);
        } else {
          setData(null);
        }
      })
      .catch(error => {
        console.log(error);
      })  
  }, [id]);

  return (
    <article className={styles.wrapper}>
      {
        data && data?.map(el => (
          <AcademicRecord
            key={uuid()}
            data={data}
            setData={setData}
            id={el?.t104_id_registrer}
            academicUnit={el?.t104_academic_unit}
            carrer={el?.t104_carreer}
            startDate={el?.t104_start_date}
            endDate={el?.t104_end_date}
            idStudent={el?.t100_id_student?.t100_id_student}
          />
        ))
      }
      <button
        onClick={handleOpenModal}
        className={styles.btnAddProject}
      >
        <MdAdd />
      </button>
    </article>
  )
}

export default AcademicRecordList;
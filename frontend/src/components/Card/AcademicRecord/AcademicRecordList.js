import React, { useEffect, useState } from 'react';
import { useAuth } from 'context/AuthContext';
import { useModal } from "hooks/useModal";
import ModalPortal from "components/Modal/ModalPortal";
import FormAddAcademicRecord from "components/Form/AcademicRecord/FormAddAcademicRecord";
import { getAcademicHistorial } from 'services/students';
import AcademicRecord from './AcademicRecord';
import { MdAdd } from "react-icons/md";
import styles from './AcademicRecord.module.css';

const AcademicRecordList = () => {
  const [data, setData] = useState(null);
  const { token } = useAuth();
  const [isOpenModal, openModal, closeModal] = useModal(false);

  let id = token?.user?.user_id;


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
            key={el?.t100_id_student?.t100_id_studentv}
            academicUnit={el?.t104_academic_unit}
            carrer={el?.t104_carreer}
            startDate={el?.t104_start_date}
            endDate={el?.t104_end_date}
            idStudent={el?.t100_id_student?.t100_id_student}
          />
        ))
      }
      <button
        onClick={openModal}
        className={styles.btnAddProject}
      >
        <MdAdd />
      </button>
      <ModalPortal
        isOpen={isOpenModal}
        closeModal={closeModal}
      >
        <FormAddAcademicRecord />
      </ModalPortal>
    </article>
  )
}

export default AcademicRecordList;
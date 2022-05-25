import React, { useEffect, useContext, useState } from 'react';
import AuthContext from 'context/AuthContext';
import { useModal } from "hooks/useModal";
import { uuid } from 'utils/uuid';
import Modal from "components/Modal/Modal";
import FormAddAcademicRecord from "components/Form/AcademicRecord/FormAddAcademicRecord";
import { getAcademicHistorial } from 'services/students';
import AcademicRecord from './AcademicRecord';
import { MdAdd } from "react-icons/md";
import styles from './AcademicRecord.module.css';

const AcademicRecordList = () => {
  const [data, setData] = useState(null);
  const { token } = useContext(AuthContext);
  const [
    isOpenModalAcademicRecord,
    openModalAcademicRecord,
    closeModalAcademicRecord,
  ] = useModal();

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
        onClick={openModalAcademicRecord}
        className={styles.btnAddProject}
      >
        <MdAdd />
      </button>
      <Modal
        isOpen={isOpenModalAcademicRecord}
        closeModal={closeModalAcademicRecord}
      >
        <FormAddAcademicRecord />
      </Modal>
    </article>
  )
}

export default AcademicRecordList;
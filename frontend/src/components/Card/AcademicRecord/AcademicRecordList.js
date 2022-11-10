import React, { useEffect, useState } from "react";
import { useAuth } from "context/AuthContext";
import { useModal } from "hooks/useModal";
import ModalPortal from "components/Modal/ModalPortal";
import FormAddAcademicRecord from "components/Form/AcademicRecord/FormAddAcademicRecord";
import { getAcademicHistorial } from "services/students";
import AcademicRecord from "./AcademicRecord";
import { MdAdd } from "react-icons/md";
import styles from "./AcademicRecord.module.css";
import Tooltip from "components/Tooltip/Tooltip";

const AcademicRecordList = () => {
  const [data, setData] = useState(null);
  const { token } = useAuth();
  const [isOpenModal, openModal, closeModal] = useModal(false);

  let id = token?.user?.id;

  useEffect(() => {
    getAcademicHistorial(id)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const { data } = response;
          setData(data);
        } else {
          setData(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <article className={styles.wrapper}>
      <div className={styles.container_botton}>
        <Tooltip title="Agregar historial academico">
          <button onClick={openModal} className={styles.btnAddProject}>
            <MdAdd />
          </button>
        </Tooltip>
      </div>
      {data &&
        data?.map((el) => (
          <AcademicRecord
            key={`academic-item${el?.t100_id_student?.t100_id_studentv}`}
            academicUnit={el?.t104_academic_unit}
            carrer={el?.t104_carreer}
            id={el?.t104_id_registrer}
            startDate={el?.t104_start_date}
            endDate={el?.t104_end_date}
            setData={setData}
            idStudent={el?.t100_id_student?.t100_id_student}
          />
        ))}
      <ModalPortal isOpen={isOpenModal} closeModal={closeModal}>
        <FormAddAcademicRecord />
      </ModalPortal>
    </article>
  );
};

export default AcademicRecordList;

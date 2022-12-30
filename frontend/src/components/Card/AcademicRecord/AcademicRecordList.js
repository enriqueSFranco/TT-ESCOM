import React, { useEffect, useState } from "react";
import { useAuth } from "context/AuthContext";
import { useModal, useAcademicHistorial } from "hooks";
import ModalPortal from "components/Modal/ModalPortal";
import FormAddAcademicRecord from "components/Form/AcademicRecord/FormAddAcademicRecord";
import AcademicRecord from "./AcademicRecord";
import Tooltip from "components/Tooltip/TooltipText";
import { MdAdd } from "react-icons/md";
import styles from "./AcademicRecord.module.css";

const AcademicRecordList = () => {
  const [data, setData] = useState(null);
  const { token } = useAuth();
  const { historial } = useAcademicHistorial(token?.user?.id)
  const [isOpenModal, openModal, closeModal] = useModal(false);

  useEffect(() => {
    setData(historial);
  }, [historial]);

  return (
    <article className={styles.wrapper}>
      <div className={styles.container_botton}>
        <Tooltip title="Agregar historial academico">
          <button onClick={openModal} className={styles.btnAddProject}>
            <MdAdd />
          </button>
        </Tooltip>
      </div>
      <div className={styles.listAcademicRecord}>
        {
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
      </div>
      <ModalPortal isOpen={isOpenModal} closeModal={closeModal} minWidth="550px" minHeight="450px">
        <FormAddAcademicRecord />
      </ModalPortal>
    </article>
  );
};

export default AcademicRecordList;
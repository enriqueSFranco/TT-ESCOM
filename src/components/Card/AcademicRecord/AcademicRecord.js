import React from "react";
import { useModal } from "hooks";
import { formatDate } from "utils";
import { deleteAcademicHistorial } from "services/students/index";
import ModalPortal from "components/Modal/ModalPortal";
import { GoTrashcan } from "react-icons/go";
import gifTrash from 'assets/icons/trash.gif'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { MdEdit } from "react-icons/md";
import { FcGraduationCap } from 'react-icons/fc'
import styles from "./AcademicRecord.module.css";

const AcademicRecord = ({
  data,
  setData,
  id,
  academicUnit,
  carrer,
  startDate,
  endDate,
}) => {
  const [
    isOpenModalDeleteAcademicRecord,
    openModalDeleteAcademicRecord,
    closeModalDeleteAcademicRecord,
  ] = useModal();
  const [
    isOpenModalEditAcademicRecord,
    openModalEditAcademicRecord,
    closeModalEditAcademicRecord,
  ] = useModal();

  const deleteData = (id) => {
    deleteAcademicHistorial(id).then((response) => {
      if (response !== null) {
        let newData = data?.filter((el) => el?.t104_id_registrer !== id);
        setData(newData);
      }
    });
  };

  return (
    <>
      <div className={styles.body}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: ".5rem 1rem",
          }}
        >
          <FcGraduationCap className={styles.icon} />
          <div className={styles.history}>
            <span className={styles.carrer}>{carrer}</span>
            <span>{academicUnit}</span>
            <span className={styles.date}>
              {formatDate(startDate)} {" - "} {formatDate(endDate)}
            </span>
          </div>
        </div>
        <div className={styles.actions}>
          <button
            className={`${styles.btnTrash}`}
            onClick={openModalDeleteAcademicRecord}
          >
            <GoTrashcan className={styles.deleteAction} />
          </button>
          <button onClick={openModalEditAcademicRecord}>
            <MdEdit className={styles.editAction} />
          </button>
        </div>
      </div>
      <ModalPortal
        isOpen={isOpenModalDeleteAcademicRecord}
        closeModal={closeModalDeleteAcademicRecord}
        minWidth="500px"
        minHeight="400px"
      >
        <>
          <div className={styles.wrapperCircle}>
            <img src={gifTrash} alt="trash" />
          </div>
          <h3 className={styles.tittleProjectExperience}>
            <AiOutlineExclamationCircle />Estas seguro de eliminar la Unidad Academica{" "}
            <span>"{academicUnit}"</span> de tu historial Academico ?
          </h3>
          <button
            className={styles.btnDeleteExperience}
            onClick={() => deleteData(id)}
          >
            Si, Eliminar
          </button>
        </>
      </ModalPortal>
      <ModalPortal
        isOpen={isOpenModalEditAcademicRecord}
        closeModal={closeModalEditAcademicRecord}
      >
        <h2>Editar</h2>
      </ModalPortal>
    </>
  );
};

export default AcademicRecord;

import React from "react";
import { useModal } from "hooks/useModal";
import Modal from "components/Modal/Modal";
import { formatDate } from "utils/formatDate";
import { GoTrashcan } from "react-icons/go";
import { MdSchool, MdEdit } from "react-icons/md";
import styles from "./AcademicRecord.module.css";

const AcademicRecord = ({
  academicUnit,
  carrer,
  startDate,
  endDate,
  idStudent,
  idAcademicLevel,
  idAcademicState,
}) => {
  const [isOpenModalDeleteAcademicRecord, openModalDeleteAcademicRecord, closeModalDeleteAcademicRecord] = useModal();
  const [isOpenModalEditAcademicRecord, openModalEditAcademicRecord, closeModalEditAcademicRecord] = useModal();

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
          <MdSchool className={styles.icon} />
          <div className={styles.history}>
            <p>{carrer}</p>
            <p>{academicUnit}</p>
            <p className={styles.date}>
              {formatDate(startDate)} {" - "} {formatDate(endDate)}
            </p>
          </div>
        </div>
        <div className={styles.actions}>
          <button className={`${styles.btnTrash}`} onClick={openModalDeleteAcademicRecord}>
            <GoTrashcan className={styles.deleteAction} />
          </button>
          <button onClick={openModalEditAcademicRecord}>
            <MdEdit className={styles.editAction} />
          </button>
        </div>
      </div>
      <Modal isOpen={isOpenModalDeleteAcademicRecord} closeModal={closeModalDeleteAcademicRecord}>
          <h1>eliminar</h1>
      </Modal>
      <Modal isOpen={isOpenModalEditAcademicRecord} closeModal={closeModalEditAcademicRecord}>
          <h2>Editar</h2>
      </Modal>
    </>
  );
};

export default AcademicRecord;

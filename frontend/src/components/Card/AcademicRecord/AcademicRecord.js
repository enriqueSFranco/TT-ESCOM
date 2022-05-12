import React from "react";
import { useModal } from "hooks/useModal";
import Modal from "components/Modal/Modal";
import FormAddAcademicRecord from "components/Form/AcademicRecord/FormAddAcademicRecord"
import { GoTrashcan } from "react-icons/go";
import { MdSchool, MdEdit, MdAdd } from "react-icons/md";
import styles from "./AcademicRecord.module.css";

const AcademicRecord = () => {
  const [isOpenModalAcademicRecord, openModalAcademicRecord, closeModalAcademicRecord] = useModal();
  return (
    <>
      <article className={styles.wrapper}>
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
              <p>Ingenieria en Sistemas Computacionales</p>
              <p>ESCOM IPN</p>
              <p>Enero 2015-Diciembre 2021</p>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={`${styles.btnTrash}`}>
              <GoTrashcan className={styles.deleteAction} />
            </button>
            <button>
              <MdEdit className={styles.editAction} />
            </button>
          </div>
        </div>
        <button onClick={openModalAcademicRecord} className={styles.btnAddProject}><MdAdd /></button>
      </article>
      <Modal isOpen={isOpenModalAcademicRecord} closeModal={closeModalAcademicRecord}>
        <FormAddAcademicRecord />
      </Modal>
    </>
  );
};

export default AcademicRecord;

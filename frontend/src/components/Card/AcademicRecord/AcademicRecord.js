import React from "react";
import { useModal } from "hooks";
import { formatDate } from "utils/formatDate";
import { deleteAcademicHistorial } from "services/students/index";
import { GoTrashcan } from "react-icons/go";
import { MdSchool, MdEdit } from "react-icons/md";
import styles from "./AcademicRecord.module.css";
import ModalPortal from "components/Modal/ModalPortal";

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
      >
        <div className={styles.mainWrapper}>
          <div className={styles.wrapperCircle}>
            <div className={styles.circleDelete}></div>
            <GoTrashcan />
          </div>
          <h3 className={styles.tittleProjectExperience}>
            Estas seguro de eliminar la Unidad Academica{" "}
            <span>"{academicUnit}"</span> de tu historial Academico ?
          </h3>
          <button
            className={styles.btnDeleteExperience}
            onClick={() => deleteData(id)}
          >
            Si, Eliminar
          </button>
        </div>
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

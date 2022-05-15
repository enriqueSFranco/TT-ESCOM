import React from "react";
import { useModal } from "hooks/useModal";
import { formatDate } from "utils/formatDate";
import Modal from "components/Modal/Modal";
import logoCertification from "images/certification.jpg";
import { GoTrashcan } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import styles from "./Certifications.module.css";

const CertificationItem = ({
  idCertification,
  idStudent,
  title,
  partnership,
  endDate,
  link,
}) => {
  const [
    isOpenModalDeleteCertification,
    openModalDeleteCertification,
    closeModalDeleteCertification,
  ] = useModal();
  const [
    isOpenModalEditCertification,
    openModalEditCertification,
    closeModalEditCertification,
  ] = useModal();

  const deleteData = (id) => {
  };

  return (
    <>
      <div className={styles.detailsCertification}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: ".5rem 0",
          }}
        >
          <img
            className={styles.logo}
            src={logoCertification}
            alt="projectLogo"
          />
          <div className={styles.descriptionCertification}>
            <div className={styles.groupDetails}>
              <h3>{title}</h3>
              <span className={styles.speciality}>{partnership}</span>
              <br />
              {/* <span>{formatDate(startDate)} -</span>{" "} */}
              <span>{formatDate(endDate)}</span>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
              ver proyecto
            </a>
          </div>
        </div>
        <div className={styles.actions}>
          <button
            className={`${styles.btnTrash}`}
            onClick={openModalDeleteCertification}
          >
            <GoTrashcan className={styles.deleteAction} />
          </button>
          <button onClick={openModalEditCertification}>
            <MdEdit className={styles.editAction} />
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpenModalDeleteCertification}
        closeModal={closeModalDeleteCertification}
      >
        <h1>{title}</h1>
        <button onClick={() => deleteData(idCertification)}>Eliminar</button>
      </Modal>

      <Modal
        isOpen={isOpenModalEditCertification}
        closeModal={closeModalEditCertification}
      >
        <h1>Editar proyecto</h1>
      </Modal>
    </>
  );
};

export default CertificationItem;

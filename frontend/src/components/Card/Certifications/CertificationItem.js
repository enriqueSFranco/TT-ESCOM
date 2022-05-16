import React, { useState } from "react";
import { useModal } from "hooks/useModal";
import { formatDate } from "utils/formatDate";
import FormCertification from "components/Form/Certification/FormCertification";
import Modal from "components/Modal/Modal";
import logoCertification from "images/certification.jpg";
import { GoTrashcan } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import styles from "./Certifications.module.css";

const CertificationItem = ({
  data,
  setData,
  idCertification,
  title,
  partnership,
  endDate,
  link,
}) => {
  const[dataToEdit, setDataToEdit] = useState(null);
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
    if (data !== null) {
      let newData = data?.filter(certification => certification?.t119_id_registrer !== id);
      setData(newData);
    }
  };

  const updateData = (id) => {
    
  }

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
            <div className={`${link.length > 0 ? `${styles.groupDetails}` : `${styles.noLink}`}`}>
              <h3 className={styles.titleCertification}>{title}</h3>
              <span className={styles.partnership}>{partnership}</span>
              <br />
              <p className={styles.dateEnd}>Finalizada en: <span>{formatDate(endDate)}</span></p>
            </div>
            {
              link.length > 0 ? (
                <a href={link} target="_blank" rel="noreferrer">
                  ver proyecto
                </a>
              ) : null
            }
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
        <div className={styles.mainWrapper}>
          <div className={styles.wrapperCircle}>
            <div className={styles.circleDelete}></div>
            <GoTrashcan />
          </div>
          <h3 className={styles.tittleProjectCertification}>
            Estas seguro de eliminar la certificacion <span>"{title}"</span> de tu historial de certificaciones ?
          </h3>
          <button className={styles.btnDeleteExperience} onClick={() => deleteData(idCertification)}>Si, Eliminar</button>
        </div>
      </Modal>

      <Modal
        isOpen={isOpenModalEditCertification}
        closeModal={closeModalEditCertification}
      >
        <h1>Editar proyecto</h1>
        <FormCertification
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
      </Modal>
    </>
  );
};

export default CertificationItem;

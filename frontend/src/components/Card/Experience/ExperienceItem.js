import React from "react";
import { useModal } from "hooks/useModal";
import { formatDate } from "utils/formatDate";
import { deleteProject } from "services/students/index";
import Modal from "components/Modal/Modal";
import logoProject from "images/project.svg";
import { GoTrashcan } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import styles from "./Experience.module.css";

const ExperenceItem = ({
  data,
  setListProjects,
  id,
  idStudent,
  typeProject,
  nameProject,
  company = "",
  description,
  startDate = null,
  endDate = null,
  link,
  specialty,
}) => {
  const [
    isOpenModalDeleteProject,
    openModalDeleteProject,
    closeModalDeleteProject,
  ] = useModal();

  const [isOpenModalEditProject, openModalEditProject, closeModalEditProject] =
    useModal();

  const deleteData = (id) => {
    console.log("id:", id);
    deleteProject(id).then((response) => {
      if (data !== null) {
        let newData = data.filter((el) => el?.t117_id_registrer !== id);
        setListProjects(newData);
      }
    });
  };

  return (
    <>
      <div className={styles.detailsProject}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: ".5rem 0",
          }}
        >
          <img
            className={styles.logoProject}
            src={logoProject}
            alt="projectLogo"
          />
          <div className={styles.descriptionProject}>
            <div className={styles.groupDetails}>
              {typeProject === 1 ? (
                // proyecto personal
                <>
                  <h3>{nameProject}</h3>
                  <span className={styles.speciality}>{idStudent}</span>
                  <br />
                </>
              ) : (
                // proyecto laboral
                <>
                  <h3>{company}</h3>
                  <span className={styles.speciality}>{specialty}</span>
                  <br />
                  <span>{formatDate(startDate)} -</span>{" "}
                  <span>{formatDate(endDate)}</span>
                </>
              )}
            </div>
            <div className={styles.desription}>
              <p>{description}</p>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
              ver proyecto
            </a>
          </div>
        </div>
        <div className={styles.actions}>
          <button
            className={`${styles.btnTrash}`}
            onClick={openModalDeleteProject}
          >
            <GoTrashcan className={styles.deleteAction} />
          </button>
          <button onClick={openModalEditProject}>
            <MdEdit className={styles.editAction} />
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpenModalDeleteProject}
        closeModal={closeModalDeleteProject}
      >
        <h1>{nameProject}</h1>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </Modal>

      <Modal isOpen={isOpenModalEditProject} closeModal={closeModalEditProject}>
        <h1>Editar proyecto</h1>
      </Modal>
    </>
  );
};

export default ExperenceItem;

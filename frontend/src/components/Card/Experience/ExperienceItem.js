import React from "react";
import { useModal } from "hooks/useModal";
import { formatDate } from "utils/formatDate";
import { deleteProject } from "services/students/index";
import ModalPortal from "components/Modal/ModalPortal";
import TypeExperience from "./TypeExperience";
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
    deleteProject(id).then((response) => {
      if (data !== null) {
        let newData = data.filter((el) => el?.t117_id_registrer !== id);
        setListProjects(newData);
      }
    });
  };

  if (!data) return null

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
                  <p>{nameProject}</p>
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
            {
              typeProject === 1 ? (
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
            onClick={openModalDeleteProject}
          >
            <GoTrashcan className={styles.deleteAction} />
          </button>
          <button onClick={openModalEditProject}>
            <MdEdit className={styles.editAction} />
          </button>
        </div>
      </div>

      
      <ModalPortal
        isOpen={isOpenModalDeleteProject}
        closeModal={closeModalDeleteProject}
        minWidth="500px"
        minHeight="450px"
      >
        <div className={styles.mainWrapper}>
          <div className={styles.wrapperCircle}>
            <div className={styles.circleDelete}></div>
            <GoTrashcan />
          </div>
          <h3 className={styles.tittleProjectExperience}>
            Estas seguro de eliminar el proyecto <span style={{fontWeight: '700', fontSize: '1rem'}}>"{nameProject}"</span> de tu historial de experiencia ?
          </h3>
          <button className={styles.btnDeleteExperience} onClick={() => deleteData(id)}>Si, Eliminar</button>
        </div>
      </ModalPortal>

      <ModalPortal isOpen={isOpenModalEditProject} closeModal={closeModalEditProject}>
        <TypeExperience />
      </ModalPortal>
    </>
  );
};

export default ExperenceItem;

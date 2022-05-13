import React, { useContext, useEffect, useState } from "react";
import { useModal } from "hooks/useModal";
import { uuid } from "utils/uuid";
import { getProjects } from "services/students/index";
import AuthContext from "context/AuthContext";
import ModalForm from "components/Modal/ModalForm";
import TypeExperience from "./TypeExperience";
import logoProject from "images/project.svg";
import notProjects from "images/projects.png";
import { GoTrashcan } from "react-icons/go";
import { MdAdd, MdEdit } from "react-icons/md";
import styles from "./Experience.module.css";

const Experence = () => {
  const [listProjects, setListProjects] = useState(null);
  const { token } = useContext(AuthContext);
  const [isOpenModalAddProject, openModalAddProject, closeModalAddProject] =
    useModal();

  let idUser = token?.user?.user_id;

  useEffect(() => {
    getProjects(idUser).then((response) => {
      console.log(response);
      setListProjects(response);
    });
  }, [idUser]);

  return (
    <>
      <article className={styles.wrapper}>
        {listProjects === null ? (
          <div className={styles.notProjects}>
            <h3>Sin Proyectos</h3>
            <img src={notProjects} alt="sin proyectos" />
          </div>
        ) : (
          <>
            {listProjects?.map((project) => (
              <div className={styles.detailsProject} key={uuid()}>
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
                      <h3>{project?.t117_group}</h3>
                      <span className={styles.speciality}>
                        {project?.t117_job}
                      </span>
                      <br />
                      <span>{project?.t117_start_date} -</span>{" "}
                      <span>{project?.t117_end_date}</span>
                    </div>
                    <div className={styles.desription}>
                      <p>{project?.t117_description}</p>
                    </div>
                    <a
                      href={project?.t117_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      ver proyecto
                    </a>
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
            ))}
          </>
        )}
        <button className={styles.btnAddProject} onClick={openModalAddProject}>
          <MdAdd />
        </button>
      </article>
      <ModalForm
        isOpen={isOpenModalAddProject}
        closeModal={closeModalAddProject}
        width={600}
        height={670}
      >
        <TypeExperience />
      </ModalForm>
    </>
  );
};

export default Experence;

import React, { useEffect, useState } from "react";
import { getProjects } from "services/students/index";
import { useAuth } from "context/AuthContext";
import { useModal } from "hooks";
import { uuid } from "utils";
import ModalPortal from "components/Modal/ModalPortal";
import ExperenceItem from "./ExperienceItem";
import TypeExperience from "./TypeExperience";
import Tooltip from "components/Tooltip/TooltipText";
import { MdAdd } from "react-icons/md";
import backgroundNoProject from "assets/images/no-project.png";
import styles from "./Experience.module.css";

const ExperenceList = () => {
  const [listProjects, setListProjects] = useState(null);
  const [isOpen, openModal, closeModal] = useModal(false);
  const { token } = useAuth();

  let idUser = token?.user?.id;

  useEffect(() => {
    getProjects(idUser)
      .then((response) => {
        setListProjects(response);
      })
      .catch((error) => console.error(error));
  }, [idUser]);

  if (!listProjects) return null;

  return (
    <>
      <article className={styles.wrapper}>
        <div className={styles.wrapperButton}>
          <Tooltip title={`Agregar un nuevo proyecto`}>
            <button className={styles.btnAddProject} onClick={openModal}>
              <MdAdd />
            </button>
          </Tooltip>
        </div>
        {listProjects && listProjects?.length === 0 ? (
          <figure className={styles.notProjects}>
            <img src={backgroundNoProject} alt="sin proyectos" width={`200px`} />
            <figcaption>
              <h3 className={styles.title}>No tienes ningún proyecto registrado</h3>
            </figcaption>
          </figure>
        ) : (
          <div className={styles.wrapperList}>
            {listProjects &&
              listProjects?.map((project, i) => (
                <ExperenceItem
                  key={uuid()}
                  data={listProjects}
                  setListProjects={setListProjects}
                  id={project?.t117_id_registrer}
                  idStudent={project?.t100_id_student?.t100_interest_job}
                  typeProject={project?.c118_project_type?.c118_id_type}
                  nameProject={project?.t117_project_name}
                  company={project?.t117_group}
                  description={project?.t117_description}
                  startDate={project?.t117_start_date}
                  endDate={project?.t117_end_date}
                  link={project?.t117_link}
                  specialty={project?.t117_job}
                />
              ))}
          </div>
        )}
      </article>
      <ModalPortal isOpen={isOpen} closeModal={closeModal} minHeight="700px">
        <TypeExperience />
      </ModalPortal>
    </>
  );
};

export default ExperenceList;

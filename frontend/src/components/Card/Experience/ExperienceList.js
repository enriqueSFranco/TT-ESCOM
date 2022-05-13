import React, { useContext, useEffect, useState } from "react";
import { useModal } from "hooks/useModal";
import { getProjects } from "services/students/index";
import AuthContext from "context/AuthContext";
import { uuid } from "utils/uuid";
import ExperenceItem from "./ExperienceItem";
import ModalForm from "components/Modal/ModalForm";
import TypeExperience from "./TypeExperience";
import notProjects from "images/projects.png";
import { MdAdd } from "react-icons/md";
import styles from "./Experience.module.css";

const ExperenceList = () => {
  const [listProjects, setListProjects] = useState(null);
  const { token } = useContext(AuthContext);
  const [isOpenModalAddProject, openModalAddProject, closeModalAddProject] =
    useModal();

  let idUser = token?.user?.user_id;

  useEffect(() => {
    getProjects(idUser).then((response) => {
      setListProjects(response);
    });
  }, [idUser]);

  if (!listProjects) return null;

  return (
    <article className={styles.wrapper}>
      {listProjects === null ? (
        <div className={styles.notProjects}>
          <h3>Sin Proyectos</h3>
          <img src={notProjects} alt="sin proyectos" />
        </div>
      ) : (
        <>
          {listProjects?.map((project) => (
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
        </>
      )}
      <button className={styles.btnAddProject} onClick={openModalAddProject}>
        <MdAdd />
      </button>

      <ModalForm
        isOpen={isOpenModalAddProject}
        closeModal={closeModalAddProject}
        width={600}
        height={670}
      >
        <TypeExperience />
      </ModalForm>
    </article>
  );
};

export default ExperenceList;

import React, { useEffect, useState } from "react";
import { getProjects } from "services/students/index";
import { useAuth } from "context/AuthContext";
import { uuid } from "utils/uuid";
import ExperenceItem from "./ExperienceItem";
import TypeExperience from "./TypeExperience";
import notProjects from "images/projects.png";
import { MdAdd } from "react-icons/md";
import styles from "./Experience.module.css";

const ExperenceList = () => {
  const [listProjects, setListProjects] = useState(null);
  const { token } = useAuth();

  // let idUser = token?.user?.id;

  useEffect(() => {
    getProjects(token?.user?.user_id).then((response) => {
      setListProjects(response);
    })
    .catch(error => console.error(error))
  }, [token?.user?.user_id]);

  if (!listProjects) return null;

  return (
    <article className={styles.wrapper}>
      {listProjects && listProjects?.length === 0 ? (
        <div className={styles.notProjects}>
          <h3>Sin Proyectos</h3>
        </div>
      ) : (
        <>
          {listProjects && listProjects?.map((project, i) => (
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
      <button className={styles.btnAddProject}>
        <MdAdd />
      </button>
    </article>
  );
};

export default ExperenceList;

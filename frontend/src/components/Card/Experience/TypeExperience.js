import React, { useState } from "react";
import PersonalExperience from "./PersonalExperience";
import WorkExperience from "./WorkExperience";
import image from "images/experience.png";
import styles from "./Experience.module.css";

const TypeExperience = () => {
  const [typeProject, setTypeProject] = useState(null);

  const handleClick = (type) => {
    type === "personalExperience"
      ? setTypeProject("personalExperience")
      : setTypeProject("workExperience");
  };

  return (
    <>
      {typeProject === null ? (
        <div className={styles.wrapperMain}>
          <h2 className={styles.titleModal}>
            Experiencia por proyecto personal o puesto laboral?
          </h2>
          <nav className={styles.nav}>
            <button
              className={styles.btn}
              onClick={() => handleClick("personalExperience")}
            >
              Proyecto personal
            </button>
            <button
              className={styles.btn}
              onClick={() => handleClick("workExperience")}
            >
              Puesto laboral
            </button>
          </nav>
          <img src={image} alt="experience" width={400} />
        </div>
      ) : typeProject === "personalExperience" ? (
        <PersonalExperience setTypeProject={setTypeProject} />
      ) : (
        <WorkExperience setTypeProject={setTypeProject} />
      )}
    </>
  );
};

export default TypeExperience;

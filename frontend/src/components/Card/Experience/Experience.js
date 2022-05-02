import React from "react";
import { useModal } from "hooks/useModal";
import logoProject from "images/project.svg";
import { GoTrashcan } from "react-icons/go";
import { MdAdd, MdEdit } from "react-icons/md"
import styles from "./Experience.module.css";

const Experence = () => {
  const [,openModalProject,] = useModal();

  return (
    <article className={styles.wrapper}>
      <div className={styles.detailsProject}>
        <div style={{display: "flex", alignItems: "center" ,justifyContent: "space-between", margin: ".5rem 0"}}>
          <img
            className={styles.logoProject}
            src={logoProject}
            alt="projectLogo"
          />
          <div className={styles.descriptionProject}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              perspiciatis optio, voluptatibus at hic totam sunt saepe consectetur
              cupiditate nam id iusto aliquam vero! Recusandae sit labore quisquam
              doloremque eligendi.
            </p>
            <a href="#/">ver proyecto</a>
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
      <button className={styles.btnAddProject} onClick={openModalProject}><MdAdd /></button>
    </article>
  );
};

export default Experence;

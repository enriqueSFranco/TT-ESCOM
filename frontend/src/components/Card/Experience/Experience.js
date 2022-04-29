import React from "react";
import * as GoIcon from "react-icons/go";
import * as MdIcon from "react-icons/md";
import logoProject from "images/project.svg";
import styles from "./Experience.module.css";

const Experence = ({ links }) => {
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
              <GoIcon.GoTrashcan className={styles.deleteAction} />
            </button>
            <button>
              <MdIcon.MdEdit className={styles.editAction} />
            </button>
        </div>
      </div>
    </article>
  );
};

export default Experence;

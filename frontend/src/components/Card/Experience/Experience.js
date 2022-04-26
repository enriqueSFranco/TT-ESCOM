import React from "react";
import Tooltip from "@mui/material/Tooltip";
import * as GoIcon from "react-icons/go";
import * as MdIcon from "react-icons/md";
import * as FaIcon from "react-icons/fa"
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
          <Tooltip title="Eliminar">
            <button className={`${styles.btnTrash}`}>
              <GoIcon.GoTrashcan className={styles.deleteAction} />
            </button>
          </Tooltip>
          <Tooltip title="Editar">
            <button>
              <MdIcon.MdEdit className={styles.editAction} />
            </button>
          </Tooltip>
        </div>
      </div>
    </article>
  );
};

export default Experence;

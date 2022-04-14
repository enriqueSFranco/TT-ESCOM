import React from "react";
import Tooltip from "@mui/material/Tooltip";
import * as GoIcon from "react-icons/go";
import * as MdIcon from "react-icons/md";
import * as FaIcon from "react-icons/fa"
import styles from "./Experience.module.css";

const Experence = ({ links }) => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.detailsProject}>
        <div style={{display: "flex", justifyContent: "space-between", margin: ".5rem 0"}}>
          <img
            className={styles.logoProject}
            src="https://placeimg.com/100/100/any"
            alt="any"
          />
          <a href="#/" className={styles.descriptionProject}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            perspiciatis optio, voluptatibus at hic totam sunt saepe consectetur
            cupiditate nam id iusto aliquam vero! Recusandae sit labore quisquam
            doloremque eligendi.
          </a>
        </div>
        <div className={styles.actions}>
          <Tooltip title="Ver proyecto">
            <a href="/#">
              <FaIcon.FaProjectDiagram />
            </a>
          </Tooltip>
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

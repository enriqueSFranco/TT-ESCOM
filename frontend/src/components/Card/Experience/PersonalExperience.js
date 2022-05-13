import React from "react";
import { TextField } from "@mui/material";
import { MdOutlineAdd, MdKeyboardBackspace } from "react-icons/md";
import styles from "./Experience.module.css";


const PersonalExperience = ({ setTypeProject }) => {
  const handleClick = () => setTypeProject(null);

  return (
    <div className={styles.wrapperForm}>
      <h2 className={styles.titleModal}>Experiencia por proyecto</h2>
      <form className={styles.form}>
        <div className={styles.inputGroup_1_2}>
          <TextField
            sx={{ width: "300px" }}
            label="Nombre de tu proyecto"
            id="outlined-size-small"
            size="small"
          />
          <TextField
            sx={{ width: "300px" }}
            label="Enlace de tu proyecto"
            id="outlined-size-small"
            size="small"
          />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Descripcion de tu proyecto..."
          className={styles.textArea}
        ></textarea>
        
        <button className={styles.btnSubmit} type="submit"><MdOutlineAdd /> Agregar</button>
      </form>
      <button className={styles.btnGoToMain} onClick={handleClick}><MdKeyboardBackspace /> Regresar</button>
    </div>
  );
};

export default PersonalExperience;

import { TextField } from "@mui/material";
import React from "react";
import styles from "./Experience.module.css";

const PersonalExperience = ({ setTypeProject }) => {
  const handleClick = () => setTypeProject(null);

  return (
    <div className={styles.wrapperForm}>
      <h2 className={styles.titleModal}>Experiencia por proyecto</h2>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <TextField
            sx={{ width: "200px" }}
            label="Nombre de tu proyecto"
            id="outlined-size-small"
            size="small"
          />
          <TextField
            sx={{ width: "200px" }}
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
          placeholder="descripcion de tu proyecto"
        ></textarea>
        
        <input type="submit" value="Agregar" />
      </form>
      <button onClick={handleClick}>Regresar</button>
    </div>
  );
};

export default PersonalExperience;

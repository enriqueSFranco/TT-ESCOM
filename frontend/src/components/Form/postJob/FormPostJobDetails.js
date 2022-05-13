import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import FormControlLabel from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import { MdPublish } from "react-icons/md";
import styles from "./FormPostJob.module.css";

const FormPostJobDetails = ({ form, onSubmit, handleChange, prevStep }) => {
  const [visible, setVisible] = useState(false);

  const handleChecked = (e) => {
    setVisible(e.target.checked);
  };
  console.log(visible);

  return (
    <div className={styles.wrapperFormJobDetails}>
      <form onSubmit={onSubmit}>
        <div className={styles.actions}>
          <TextareaAutosize
            className={styles.textArea}
            name="t200_description"
            id="t200_description"
            aria-label="maximum height"
            placeholder="Detalles de la vacante"
            minRows={5}
            style={{ width: "800px", height: 220 }}
            value={form.t200_description}
            onChange={handleChange}
          />
        </div>
        <div className={styles.closeJob}>
          {/* habilitar fecha de cierre */}
          <div className={styles.wrapperSwitch}>
            <label className={styles.switch}>
              <input type="checkbox" onChange={handleChecked} id="dateCloseJob" name="dateCloseJob" />
              <span className={styles.slider}></span>
            </label>
            <label>Fecha de cierre</label>
          </div>
          {
            visible && (
              <input type="date" className={styles.closeJobDate} />
            )
          }
        </div>
        <div className={styles.wrapperButtons}>
          <button type="submit" className={`${styles.btn} btn btn-primary`}>
            <MdPublish />
            Publicar Vacante
          </button>
          <button onClick={prevStep} className={styles.btn}>
            Regresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPostJobDetails;

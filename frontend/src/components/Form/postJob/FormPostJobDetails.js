import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "./FormPostJob.module.css";
import { MdPublish } from "react-icons/md";

const FormPostJobDetails = ({ form, handleChange, onSubmit, prevStep }) => {
  return (
    <div className={styles.wrapperFormJobDetails}>
      <form onSubmit={onSubmit}>
        <div className={`${styles.inputGroup} `}>
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
        <div>
          {/* habilitar fecha de cierre */}

        </div>
        <div className={styles.wrapperButtons}>
          <button type="submit" className={`${styles.btn} btn btn-primary`}>
            <MdPublish />
            Publicar Vacante
          </button>
          <button onClick={prevStep} className={styles.btn}>Regresar</button>
        </div>
      </form>
    </div>
  );
};

export default FormPostJobDetails;

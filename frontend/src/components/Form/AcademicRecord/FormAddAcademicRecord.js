import React from "react";
// import { useFetch } from "hooks/useFetch";
import { useAuth } from "context/AuthContext";
import { useForm } from "hooks/useForm";
// import { API_ACADEMIC_UNITS } from "services/settings";
import { postAcademicHistorial } from "services/students/index";
import { TextField } from "@mui/material";
import { MdSchool } from "react-icons/md";
import styles from "./FormAddAcademicRecord.module.css";

let initialForm = {
  t104_academic_unit: "",
  t104_carreer: "",
  t104_start_date: "",
  t104_end_date: "",
};

const FormAddAcademicRecord = () => {
  const { token } = useAuth();
  // const { data } = useFetch(API_ACADEMIC_UNITS);
  const { form, handleChange } = useForm(initialForm);

  
  function onSubmitAcademicHistorial(e) {
    e.preventDefault();
    let copyForm = {
      ...form,
      t100_id_student: token?.user?.user_id,
    };
    postAcademicHistorial(copyForm)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    };
    
  // if (!data) return null;

  return (
    <div className={styles.wrapperForm}>
      <h1 className={styles.title}>
        Agregar nueva carrera <MdSchool />
      </h1>
      <form onSubmit={onSubmitAcademicHistorial} className={styles.form}>
        <div className={styles.inputGroup_1_2}>
          <TextField
            size="small"
            label="Carrera"
            id="t104_carreer"
            name="t104_carreer"
            value={form?.t104_carreer}
            onChange={handleChange}
          />
          <span className={styles.separator}>En</span>
          <TextField
            size="small"
            label="Unidad Academica"
            id="t104_academic_unit"
            name="t104_academic_unit"
            value={form?.t104_academic_unit}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup_1_2}>
          <div>
            <h2 className={styles.subTitle}>Fecha en la que iniciaste</h2>
            <input
              type="date"
              id="t104_start_date"
              name="t104_start_date"
              value={form?.t104_start_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <h2 className={styles.subTitle}>
              Fecha en la terminaste/esperas concluir
            </h2>
            <input
              type="date"
              id="t104_end_date"
              name="t104_end_date"
              value={form?.t104_end_date}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className={styles.btnAdd} type="submit">
          Aceptar
        </button>
      </form>
    </div>
  );
};

export default FormAddAcademicRecord;

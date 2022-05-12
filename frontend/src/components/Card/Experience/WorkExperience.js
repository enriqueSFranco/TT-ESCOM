import React, { useContext } from "react";
import AuthContext from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { addProject } from "services/students/index";
import TextField from "@mui/material/TextField";
import styles from "./Experience.module.css";

const initialForm = {
  t117_group: "",
  t117_job: "",
  t117_start_date: "",
  t117_end_date: "",
  t117_description: "",
};

const validateForm = (form) => {
  let errors = {};
  let regex = {};

  return errors;
};

const WorkExperience = ({ setTypeProject }) => {
  const { token } = useContext(AuthContext);
  const { form, handleChange } = useForm(initialForm, validateForm);
  let idUser = token?.user?.user_id;

  console.log(idUser);

  const handleClick = () => setTypeProject(null);

  const addNewProject = (e) => {
    e.preventDefault();
    addProject(idUser, form)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.wrapperForm}>
      <h2 className={styles.titleModal}>Experiencia por experiencia laboral</h2>
      <form onSubmit={addNewProject} className={styles.formWorkExperience}>
        <TextField
          size="small"
          label="Nombre de la empresa en la que laboraste"
          id="t117_group"
          name="t117_group"
          value={form.t117_group}
          onChange={handleChange}
        />
        <TextField
          size="small"
          label="Puesto"
          id="t117_job"
          name="t117_job"
          value={form.t117_job}
          onChange={handleChange}
        />
        <div className={styles.wrapperInput}>
          <div className={styles.container}>
            <h4>Fecha en la que entraste</h4>
            <div className={styles.inputGroup_1_2}>
              <input
                type="date"
                id="t117_start_date"
                name="t117_start_date"
                value={form.t117_start_date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.container}>
            <h4>Fecha en la que saliste</h4>
            <div className={styles.inputGroup_1_2}>
              <input
                type="date"
                id="t117_end_date"
                name="t117_end_date"
                value={form.t117_end_date}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <textarea
          name="t117_description"
          id="t117_description"
          cols="30"
          rows="10"
          placeholder="Descripcion de tu proyecto"
          value={form.t117_description}
          onChange={handleChange}
        ></textarea>
        <input
          className={styles.btnSubmitWorkExperience}
          type="submit"
          value="Agregar"
        />
      </form>
      <button className={styles.btnGoBack} onClick={handleClick}>
        Regresar
      </button>
    </div>
  );
};

export default WorkExperience;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { addProject } from "services/students";
import { Input } from "components/Input/Input";
import { FcOk } from "react-icons/fc";
import styles from "./Experience.module.css";

const initialForm = {
  t117_project_name: "",
  t117_link: "",
  t117_description: "",
  c118_project_type: 1,
};

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t117_project_name: "",
  };

  return errors;
};

const PersonalExperience = ({ setTypeProject }) => {
  const navigate = useNavigate();
  const [totalChar, setTotalChar] = useState(0);
  const [message, setMessage] = useState("");
  const { token } = useAuth();
  const { form, errors, setForm, handleValidate, handleChange } = useForm(
    {
      ...initialForm,
      t100_id_student: token?.user?.id,
    },
    validateForm
  );

  const handleClick = () => setTypeProject(null);

  // Funcion para agregar un nuevo proyecto personal
  function onSubmit(e) {
    e.preventDefault();
    addProject(form)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          const { data } = response;
          setMessage(data.message);
          setTimeout(() => {
            navigate("/perfil/experiencia/");
          }, 2000);
          setTypeProject(null);
        }
      })
      .catch((error) => console.error(false));

    setForm(initialForm);
    setMessage("");
  }

  function updatTotalChar(e) {
    setTotalChar(e.target.value.length);
  }

  return (
    <div className={styles.wrapperForm}>
      <h2 className={styles.titleModal}>Experiencia por proyecto</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputGroup_1_2}>
          <Input
            label="Nombre de tu proyecto"
            id="t117_project_name"
            name="t117_project_name"
            value={form?.t117_project_name}
            onChange={handleChange}
          />
          <Input
            label="Enlace de tu proyecto"
            id="t117_link"
            name="t117_link"
            value={form?.t117_link}
            onChange={handleChange}
          />
        </div>

        <div className={styles.wraperDescriptionProject}>
          <textarea
            name="t117_description"
            id="t117_description"
            value={form?.t117_description}
            onChange={handleChange}
            onKeyUp={updatTotalChar}
            cols="20"
            rows="5"
            placeholder="Descripcion de tu proyecto..."
            className={styles.textArea}
          />
          <div className={styles.flex_1_2}>
            <p>Por favor, Escribe la descripcion de tu proyecto.</p>
            <span style={{color: '#5c5c5c', fontSize: '15px'}}>{totalChar}/255</span>
          </div>
        </div>
        <div className={styles.wrapperButtons}>
          <button className={styles.btnSubmit} type="submit">
            Agregar Experiencia
          </button>
          <button className={styles.btnGoToMain} onClick={handleClick}>
            Regresar
          </button>
        </div>
      </form>
      {message && (
        <div className={styles.alert}>
          <FcOk style={{ fontSize: "22px" }} />
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalExperience;

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { addProject } from "services/students";
import { TextField } from "@mui/material";
import { MdOutlineAdd, MdKeyboardBackspace } from "react-icons/md";
import styles from "./Experience.module.css";


const initialForm = {
  t117_project_name: "",
  t117_link: "",
  t117_description: "",
  c118_project_type: 1,
}

const PersonalExperience = ({ setTypeProject }) => {
  const navigate = useNavigate();
  const [succes, setSucces] = useState(null);
  const [message, setMessage] = useState("");
  const { token } = useContext(AuthContext);
  const { form, handleChange } = useForm({...initialForm, t100_id_student: token?.user?.user_id});

  const handleClick = () => setTypeProject(null);

  // Funcion para agregar un nuevo proyecto personal
  function onSubmit(e) {
    e.preventDefault();

    addProject(form)
      .then(response => {
        // TODO: programar mensaje de exito
        console.log(response);
        if (response.status === 201) {
          const { data } = response;
          setSucces(true);
          setMessage(data.message);
          setTimeout(() => {
            navigate("/perfil/experiencia/");
          }, 300);
          setTypeProject(null);
        }
      })
      .catch(error => setSucces(false));
  }

  return (
    <>
      {
        succes ? (
          <div className={styles.wrapperMessage}>
            {message}
          </div>
        ) : (
          <div className={styles.wrapperForm}>
        <h2 className={styles.titleModal}>Experiencia por proyecto</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.inputGroup_1_2}>
            <TextField
              sx={{ width: "300px" }}
              size="small"
              label="Nombre de tu proyecto"
              id="t117_project_name"
              name="t117_project_name"
              value={form?.t117_project_name}
              onChange={handleChange}
            />
            <TextField
              sx={{ width: "300px" }}
              size="small"
              label="Enlace de tu proyecto"
              id="t117_link"
              name="t117_link"
              value={form?.t117_link}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="t117_description"
            id="t117_description"
            value={form?.t117_description}
            onChange={handleChange}
            cols="30"
            rows="10"
            placeholder="Descripcion de tu proyecto..."
            className={styles.textArea}
          ></textarea>
          
          <button className={styles.btnSubmit} type="submit"><MdOutlineAdd /> Agregar</button>
        </form>
        <button className={styles.btnGoToMain} onClick={handleClick}><MdKeyboardBackspace /> Regresar</button>
      </div>
        )
      }
      
    </>
  );
};

export default PersonalExperience;

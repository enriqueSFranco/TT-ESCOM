import { useEffect, useContext, useState } from "react";
import AuthContext from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { useModal } from "hooks/useModal";
import { getStudent, updateStudent } from "services/students";
import { numberFormat } from "utils/numberFormat";
import ModalForm from "components/Modal/ModalForm";
import { MdEdit } from "react-icons/md";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const [student, setStudent] = useState(null);
  const [aboutMe, setAboutMe] = useState({});
  const { form, handleChange } = useForm({t100_personal_objectives: ""});
  const [isOpenModalEdit, openModalEdit, closeOpenModalEdit] = useModal();
  const { token } = useContext(AuthContext);
  let idStudent = token?.user?.user_id;

  // Efecto para obtener la ingformacion de un alumno
  useEffect(() => {
    getStudent(idStudent)
      .then((response) => {
        setAboutMe({
          personalObjective: response[0]?.t100_personal_objectives,
          salary: response[0]?.t100_target_salary,
          modality: response[0]?.t100_modalities,
        });
        setStudent(response);
      })
      .catch((error) => {
        if (error.response) return error.response.data.message;
      });
  }, [idStudent]);

  // Funcion para actualizar el objetivo profesional
  const handleSubmit = (e) => {
    e.preventDefault();
    let copyStudent = {
      ...form, 
      t100_name: student[0]?.t100_name,
      t100_last_name: student[0]?.t100_last_name,
      t100_boleta: student[0]?.t100_boleta,
      t100_email: student[0]?.t100_email
    };

    // console.log("copia: ",copyStudent)
    updateStudent(idStudent, copyStudent)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <button className={styles.btnEdit} onClick={openModalEdit}>
          <MdEdit />
        </button>
        <h1 className={styles.title}>Objetivo Profesional</h1>
        <p className={styles.professionalObjective}>
          {aboutMe.personalObjective === ""
            ? "Sin descripcion"
            : aboutMe.personalObjective}
        </p>
        <p className={styles.salary}>
          Sueldo deseado:{" "}
          {aboutMe?.salary === null
            ? "No especificado"
            : `$${numberFormat(aboutMe?.salary).slice(4)}MXN`}
        </p>
        <p className={styles.employmentModality}>
          Modalidad de trabajo:{" "}
          {aboutMe?.salary === null
            ? "No especificado"
            : `${aboutMe?.modality}`}
        </p>
      </div>
      <ModalForm isOpen={isOpenModalEdit} closeModal={closeOpenModalEdit}>
        <form onSubmit={handleSubmit} className={styles.wrapperTextEdit}>
          <textarea
            name="t100_personal_objectives"
            id="t100_personal_objectives"
            value={form?.t100_personal_objectives}
            onChange={handleChange}
            cols="30"
            rows="10"
            className={styles.textArea}
            placeholder="Escribe tu objetivo profesional."
          />
          <button type="submit" className={styles.btnSave}>
            Guardar
          </button>
        </form>
      </ModalForm>
    </>
  );
};
export default AboutMe;

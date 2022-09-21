import { useEffect, useState } from "react";
import { useAuth } from "context/AuthContext";
import { useGetCandidate, useForm, useModal } from "hooks";
import { updateStudent, getStudent } from "services/students";
import { numberFormat } from "utils/numberFormat";
import ModalForm from "components/Modal/ModalForm";
import { MdEdit } from "react-icons/md";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const { token } = useAuth()
  const [totalChar, setTotalChar] = useState(0);
  const [student, setStudent] = useState(null);
  const [aboutMe, setAboutMe] = useState({});
  const [isOpenModalEdit, openModalEdit, closeOpenModalEdit] = useModal();
  const { form, handleChange } = useForm({t100_personal_objectives: ""});
  const { candidate } = useGetCandidate(token?.user?.id)
  // let idStudent = token?.user?.id;

  // Efecto para obtener la ingformacion de un alumno
   useEffect(() => {
     getStudent(token?.user?.id)
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
   }, [token?.user?.id]);

  const updateCount = e => setTotalChar(e.target.value.length);

  console.log(aboutMe);

  // Funcion para actualizar el objetivo profesional
  const handleSubmit = (e) => {
    e.preventDefault();
    let copyStudent = {
      ...form, 
      t100_name: candidate[0]?.t100_name,
      t100_last_name: candidate[0]?.t100_last_name,
      t100_boleta: candidate[0]?.t100_boleta,
      t100_email: candidate[0]?.t100_email
    };

    // console.log("copia: ",copyStudent)
    updateStudent(token?.user?.id, copyStudent)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  if (!candidate) return null;

  return (
    <>
      <article className={styles.wrapper}>
        <button className={styles.btnEdit} onClick={openModalEdit}>
          <MdEdit />
        </button>
        <h1 className={styles.title}>Mi Objetivo Profesional es:</h1>
        <p className={styles.professionalObjective}>
          {aboutMe.personalObjectives === ""
            ? "Sin descripcion"
            : `${aboutMe.personalObjective}`}
        </p>
        <div className={`${styles.position}`}>
          <p className={styles.salary}>
            Sueldo deseado:{" "}
            {aboutMe?.t100_target_salary === null
              ? "No especificado"
              : `$${numberFormat(aboutMe?.salary).replace(".00", "")}`}
          </p>
          <p className={styles.employmentModality}>
            Modalidad de trabajo:{" "}
            {aboutMe?.t100_modalities === null
              ? "No especificado"
              : `${aboutMe?.modality}`}
          </p>
        </div>
      </article>
      {/* <ModalForm isOpen={isOpenModalEdit} closeModal={closeOpenModalEdit}>
        <form onSubmit={handleSubmit} className={styles.wrapperTextEdit}>
          <div className={styles.wrapperTextArea}>
            <textarea
              name="t100_personal_objectives"
              id="t100_personal_objectives"
              value={form?.t100_personal_objectives}
              onChange={handleChange}
              onKeyUp={updateCount}
              cols="30"
              rows="10"
              maxLength="255"
              className={styles.textArea}
              placeholder="Escribe tu objetivo profesional."
            />
            <div className={styles.flex_1_2}>
              <p className={styles.tip}>Por favor, Escribe tu objetivo profesional.</p>
              <span className={styles.totalChar}>{totalChar}/255</span>
            </div>
          </div>

          <button type="submit" className={styles.btnSave}>
            Guardar
          </button>
        </form>
      </ModalForm> */}
    </>
  );
};
export default AboutMe;

import React, { useState } from "react";
import { useAuth } from "context/AuthContext";
import { useGetCandidate, useForm, useModal } from "hooks";
import { updateStudent } from "services/students";
// import { numberFormat } from "utils/numberFormat";
import ModalPortal from "components/Modal/ModalPortal";
// import Chip from 'components/Chip/Chip'
import { MdEdit } from "react-icons/md";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const { token } = useAuth();
  const [totalChar, setTotalChar] = useState(0);
  const [isOpenModalEdit, openModalEdit, closeOpenModalEdit] = useModal();
  const { form, handleChange } = useForm({ t100_personal_objectives: "" });
  const { candidate } = useGetCandidate(token?.user?.user_id);

  const updateCount = (e) => setTotalChar(e.target.value.length);

  // Funcion para actualizar el objetivo profesional
  const handleSubmit = (e) => {
    e.preventDefault();
    let copyStudent = {
      ...form,
      t100_name: candidate[0]?.t100_name,
      t100_last_name: candidate[0]?.t100_last_name,
      t100_second_surname: candidate[0]?.t100_second_surname,
      t100_boleta: candidate[0]?.t100_boleta,
      t100_email: candidate[0]?.t100_email,
    };

    updateStudent(token?.user?.id, copyStudent)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
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
          {candidate[0]?.t100_personal_objectives === '' ? <p style={{fontFamily: 'sans-serif'}}>Aun no tienes tu objetivo profesional</p> : candidate[0]?.t100_personal_objectives}
        </p>
      </article>
      <ModalPortal isOpen={isOpenModalEdit} closeModal={closeOpenModalEdit} minWidth='550px' minHeight='440px'>
        <h2 style={{position: 'relative', top: '2rem', textAlign: 'center', fontFamily: 'sans-serif', fontSize: '1.5rem'}}>Editar mi Objetivo Profesional</h2>
        <form onSubmit={handleSubmit} className={styles.wrapperTextEdit} style={{width: '100%', position: 'relative', top: '3rem', left: '0rem'}}>
          <div className={styles.wrapperTextArea}>
            <textarea
              name="t100_personal_objectives"
              id="t100_personal_objectives"
              value={form?.t100_personal_objectives}
              onChange={handleChange}
              onKeyUp={updateCount}
              cols="30"
              rows="5"
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
      </ModalPortal>
    </>
  );
};
export default AboutMe;

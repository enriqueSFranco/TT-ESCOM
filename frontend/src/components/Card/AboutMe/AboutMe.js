import { useEffect, useContext, useState } from "react";
import { getStudent } from "services/students";
import { numberFormat } from "utils/numberFormat";
import AuthContext from "context/AuthContext";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState({});
  const { token } = useContext(AuthContext);
  let idStudent = token?.user?.user_id;
  

  useEffect(() => {
    getStudent(idStudent)
      .then(response => {
        setAboutMe({
          personalObjective: response[0]?.t100_personal_objectives,
          salary: response[0]?.t100_target_salary,
          modality: response[0]?.t100_modalities
        })
      })
      .catch(error => {
        if (error.response) return error.response.data.message;
      })
  }, [idStudent]);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Objetivo Profesional</h1>
      <p className={styles.professionalObjective}>
        {aboutMe.personalObjective === null ? "Sin descripcion" : aboutMe.personalObjective}
      </p>
      <p className={styles.salary}>Sueldo deseado: {aboutMe?.salary === null ? "No especificado" : `$${numberFormat(aboutMe?.salary).slice(4,)}MXN`}</p>
      <p className={styles.employmentModality}>Modalidad de trabajo: {aboutMe?.salary === null ? "No especificado" : `${aboutMe?.modality}`}</p>
    </div>
  );
};
export default AboutMe;

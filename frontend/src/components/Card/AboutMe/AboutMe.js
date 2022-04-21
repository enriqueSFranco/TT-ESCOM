// import { useFetch } from "hooks/useFetch";
// import { API_STUDENT } from "services/settings";
import styles from "./AboutMe.module.css";

const AboutMe = () => {

  // const { data, response } = useFetch(`${API_STUDENT}1`);
  // console.log(data);

  // if (!data) return null;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Objetivo Profesional</h1>
      <p className={styles.professionalObjective}>
        {/* {data && data[0]?.t100_personal_objectives} */}
      </p>
      <p className={styles.salary}>Sueldo deseado: $3000</p>
      <p className={styles.employmentModality}>Modalidad de trabajo: Home Office</p>
    </div>
  );
};
export default AboutMe;

// import Objects from "./Objects";
// import Interests from "./Interests";
// import Languajes from "./Languajes";
import styles from "./AboutMe.module.css";

const AboutMe = ({ student }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Objetivo Profesional</h1>
      <p className={styles.professionalObjective}>
        Mi objetivo profesional es desarrollarme dentro de una empresa nacional con perspectivas a largo plazo, aplicando mis conocimientos y aptitudes comunicativas para mejorar la experiencia de los clientes y la capacidad organizativa del local
      </p>
      <p className={styles.salary}>Sueldo deseado: $3000</p>
      <p className={styles.employmentModality}>Modalidad de trabajo: Home Office</p>
    </div>
  );
};
export default AboutMe;

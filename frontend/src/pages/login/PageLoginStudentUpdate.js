import LoginStudentUpdateInformation from "../../components/Form/FirstFormStudet/Step";
import styles from '../GlobalStyles.module.css';


const PageLoginStudent = () => {

  return (
    <>
      <section className={styles.wrapperPage}>
        <LoginStudentUpdateInformation />
      </section>
    </>
  )
}

export default PageLoginStudent;

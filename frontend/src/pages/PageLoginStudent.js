import LoginStudent from "../components/Form/LoginStudent";
import styles from './GlobalStyles.module.css';


const PageLoginStudent = () => {

  return (
    <>
      <section className={styles.wrapperPage}>
        <LoginStudent />
      </section>
    </>
  )
}

export default PageLoginStudent;

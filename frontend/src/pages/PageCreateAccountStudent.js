import CreateAccountStudent from '../components/Form/CreateAccountStudent';
import styles from "./GlobalStyles.module.css";

const PageCreateAccountStudent = () => {
  return (
    <>
      <section className={styles.wrapperLoginCompany}>
        <CreateAccountStudent />
      </section>
    </>
  )
}

export default PageCreateAccountStudent;

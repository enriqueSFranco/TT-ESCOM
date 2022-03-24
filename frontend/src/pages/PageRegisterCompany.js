import CreateAccountCompany from '../components/Form/CreateAccountCompany';
import styles from './GlobalStyles.module.css';

const PageRegisterCompany = () => {
  return (
    <section className={styles.wrapperRegisterCompany}>
      <CreateAccountCompany />
    </section>
  )
}

export default PageRegisterCompany;
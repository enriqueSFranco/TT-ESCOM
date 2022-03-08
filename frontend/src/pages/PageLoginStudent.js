import ReactDom from "react-dom";
import Modal from "../components/Modal/Modal";
import LoginStudent from "../components/Form/LoginStudent";
import styles from './PageLoginStudent.module.css';

const modalContainer = document.getElementById("modal");

const PageLoginStudent = ({ isMobile }) => {

  if (!isMobile) {
    return (
      <section className={styles.wrapper}>
        <LoginStudent />
      </section>
    )
  }

  return ReactDom.createPortal(<Modal><LoginStudent /></Modal>, modalContainer)
}

export default PageLoginStudent;


import ReactDOM from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./ModalPortal.module.css";


const ModalPortal = ({ children, isOpen, closeModal }) => {

  return ReactDOM.createPortal(
      <article
        className={`${styles.modal} ${isOpen && styles.isOpen}`}
        // onClick={closeModal}
      >
        <div className={styles.modalContainer}>
          <button className={styles.modalClose} onClick={closeModal}><AiOutlineCloseCircle /></button>
          {children}
        </div>
      </article>,
      document.getElementById("modal-portal")
  );
};

export default ModalPortal;
import ReactDOM from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./Modal.module.css";


const Modal = ({ children, isOpen, closeModal }) => {
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
      document.getElementById("modal")
  );
};

export default Modal;

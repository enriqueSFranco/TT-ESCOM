import { createPortal } from "react-dom";
import * as IoIcon from "react-icons/io";
import styles from "./Modal.module.css";

const Modal = ({ children, isOpen, closeModal }) => isOpen ? createPortal (
  <>
    <article
      className={`${styles.modal} ${isOpen && `${styles.isOpen}`} ${styles.active}`}
      onClick={closeModal}
    >
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={closeModal}>
          <IoIcon.IoMdClose />
        </button>
        {children}
      </div>
    </article>
  </>,document.getElementById("modal")
) : null;

export default Modal;

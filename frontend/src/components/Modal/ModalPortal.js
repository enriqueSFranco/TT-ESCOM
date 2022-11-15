import ReactDOM from "react-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./ModalPortal.module.css";

const ModalPortal = ({
  children,
  isOpen,
  minWidth,
  minHeight,
  bg = "#FFF",
  colorText,
  closeModal,
}) => {
  return ReactDOM.createPortal(
    <article className={`${styles.modal} ${isOpen && styles.isOpen}`}>
      <div
        style={{
          minWidth: minWidth,
          minHeight: minHeight,
          backgroundColor: bg,
          color: colorText,
        }}
        className={styles.modalContainer}
      >
        <div className={styles.wrapperModalClose}>
          <button className={styles.modalClose} onClick={closeModal}>
            <AiOutlineCloseCircle />
          </button>
        </div>
        {children}
      </div>
    </article>,
    document.getElementById("modal-portal")
  );
};

export default ModalPortal;

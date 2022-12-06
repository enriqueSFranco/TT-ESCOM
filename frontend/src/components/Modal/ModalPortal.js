import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";
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
  return (
    <>
      {ReactDOM.createPortal(
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
      )}
      <Toaster position="top-right" toastOptions={{ style: {
        fontFamily: 'sans-serif',
        padding: '1rem',
        border: '1px solid #713200'
        
      } }} />
    </>
  );
};

export default ModalPortal;

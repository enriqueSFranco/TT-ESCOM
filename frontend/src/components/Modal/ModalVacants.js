import React from "react";
import { VscError } from "react-icons/vsc";
import styles from "./ModalForm.module.css";

const ModalForm = ({ children, isOpen, closeModal, width, height }) => {
  return (
    <>
      <article className={`${styles.modal} ${isOpen && styles.isOpen}`}>
        <div className={styles.modalContainer} style={{width, height}}>
          <button className={styles.modalClose} onClick={closeModal}>
            <VscError />
          </button>
          {children}
        </div>
      </article>
    </>
  );
};

export default ModalForm;

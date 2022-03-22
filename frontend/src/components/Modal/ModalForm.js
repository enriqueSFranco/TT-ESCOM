import React from "react";
import  styles from'./ModalForm.module.css';
const ModalForm= ({children,isOpen,closeModal,title}) => {
  return (
      <>
      
      <article className={`${styles.modal} ${isOpen && styles.isOpen}`}>
        <div className={styles.modalContainer}>
          <h5>{title}</h5>
          <button className={styles.modalClose} onClick={closeModal}>Close</button>
          {children}
        </div>
      </article>
    
      </>
  );
  
};

export default ModalForm;
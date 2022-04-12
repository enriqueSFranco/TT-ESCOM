import React from "react";
import  styles from'./Modal.module.css';
const Modal= ({children,isOpen,closeModal}) => {
  return (
      <>
      
      <article className={`${styles.modal} ${isOpen && styles.isOpen}`} onClick={closeModal}>
        <div className={styles.modalContainer}>
          <button className={styles.modalClose} onClick={closeModal}>Close</button>
          {children}
        </div>
      </article>
    
      </>
  );
  
};

export default Modal;
import { useNavigate } from 'react-router-dom';
import styles from './Modal.module.css';

const Modal = (props) => {
  const navigate = useNavigate();
  
  const handleModalClick = (e) => e.stopPropagation();
  
  const closeModal = (e) => {
    e.stopPropagation();
    navigate(-1);
  };
  
  return (
    <article className={`${styles.modal}`}>
      <div className={styles.modalContainer}>
        <div className={styles.modalClose} onClick={handleModalClick}>
          <button onClick={closeModal}>
            X
          </button>
        </div>
        {props.children}
      </div>
    </article>
  );
}

export default Modal;

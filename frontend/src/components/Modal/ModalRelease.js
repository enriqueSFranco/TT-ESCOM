import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from 'hooks/useFetch';
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from './ModalRelease.module.css';

const ModalRelease = () => {
  const { t202_id_announcement } = useParams();
  const { data } = useFetch(`/api/Announcements/${t202_id_announcement}/`);
  const navigate = useNavigate();
  
  const closeModal = () => navigate("/comunicados");

  if (!data) return null; // evitamos renderizados adicionales
  
  const [release] = data; // destructuramos el arreglo de objetos

  return (
    <article 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0, duration: 1}} 
      className={styles.wrapper}
    >
      <button className={styles.btnClose} onClick={closeModal}>
        <AiOutlineCloseCircle />
      </button>
      <div className={`container ${styles.grid}`}>
        <img src={release?.t202_announcement} alt={release?.t300_id_company?.t300_name} />
        <div className={styles.details}>
          <h1>{release?.t202_description}</h1>
          <div className={styles.releaseDescription}>
            <p>
              {release?.t202_description}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deserunt in sint perspiciatis iste nemo eveniet, quasi ratione molestiae quaerat incidunt vero sit, officiis minus consectetur vitae natus nisi assumenda.
            </p>
          </div>
          <span>publicado el dia: {release?.t202_publish_date}</span>
          <a href={release?.t202_link} target="_blank" rel="noreferrer">Enlace de registro</a>
        </div>
      </div>
    </article>
  )
}

export default ModalRelease;
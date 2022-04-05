import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { motion } from 'framer-motion';
import * as AiIcon from 'react-icons/ai';
import styles from './ModalRelease.module.css';

const ModalRelease = () => {
  const { t202_id_announcement } = useParams();
  const { data } = useFetch(`/api/Announcements/${t202_id_announcement}/`);
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/comunicados");
  };
  
  if (!data) return null; // evitamos renderizados adicionales
  
  const [release] = data; // destructuramos el arreglo de objetos

  console.log(release)

  return (
    <motion.article 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0, duration: 1}} 
      className={styles.wrapper}
    >
      <button className={styles.btnClose} onClick={closeModal}>
        <AiIcon.AiOutlineCloseSquare />
      </button>
      <div className={`container ${styles.grid}`}>
        <img src={release?.t202_announcement} alt={release?.t300_id_company?.t300_name} />
        <div className={styles.details}>
          <h1>{release?.t202_description}</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deserunt in sint perspiciatis iste nemo eveniet, quasi ratione molestiae quaerat incidunt vero sit, officiis minus consectetur vitae natus nisi assumenda.
          </p>
          <span>publicado el dia: {release?.t202_publish_date}</span>
          <a href={release?.t_202_link}>Link del evento</a>
        </div>
      </div>
    </motion.article>
  )
}

export default ModalRelease;
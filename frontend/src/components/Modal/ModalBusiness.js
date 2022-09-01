import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "hooks/useFetch";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./ModalBusiness.module.css";

const ModalBusiness = () => {
  const { t301_id_company } = useParams();
  const navigate = useNavigate();
  const { data } = useFetch(`/api/Companies/${t301_id_company}/`);

  const closeModal = () => navigate("/empresas");

  if (!data) return null;
  
  return (
    <article 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay: 0, duration: 1}} 
    className={styles.wrapper}>
      <button className={styles.btnClose} onClick={closeModal}>
        <AiOutlineCloseCircle />
      </button>
      <div className={`container ${styles.grid}`}>
        <img src={data[0]?.t300_banner} alt={data[0]?.t300_name} />
        <div className={styles.body}>
            <h2>Mision</h2>
            <p>{data[0]?.t300_mision}</p>
            <h2>Vision</h2>
            <p>{data[0]?.t300_vision}</p>
        </div>
      </div>
    </article>
  );
};

export default ModalBusiness;

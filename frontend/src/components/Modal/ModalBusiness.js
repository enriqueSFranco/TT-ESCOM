import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCompany } from "hooks"
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./ModalBusiness.module.css";

const ModalBusiness = () => {
  const { t301_id_company } = useParams();
  const navigate = useNavigate();
  const [company] = useGetCompany({idCompany: t301_id_company})

  const closeModal = () => navigate("/empresas");

  if (!company) return null;

  return (
    <article className={styles.wrapper}>
      <button className={styles.btnClose} onClick={closeModal}>
        <AiOutlineCloseCircle />
      </button>
      <div className={`container ${styles.grid}`}>
        <img src={company[0]?.t300_banner} alt={company[0]?.t300_name} />
        <div className={styles.body}>
            <h2>Mision</h2>
            <p>{company[0]?.t300_mision}</p>
            <h2>Vision</h2>
            <p>{company[0]?.t300_vision}</p>
        </div>
      </div>
    </article>
  );
};

export default ModalBusiness;

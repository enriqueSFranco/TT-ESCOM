import { useModal } from "hooks/useModal";
import * as IoIcon from "react-icons/io";
import styles from "./CardCompany.module.css";

const CardNormal = ({ name, logo, totalPost }) => {
  const [,openModal,] = useModal();

  return (
    <>
      <div className={styles.card}>
          {logo ? <img src={logo} alt={name} /> : <IoIcon.IoMdBusiness />}
          <div className={styles.infoCompany}> 
            <p className={styles.nameCompany}>{name}</p>
            <p className={styles.nameCompany}>Publicaciones: {totalPost}</p>
          </div>
          <button onClick={openModal}>Ver mas</button>
      </div>
    </>
  );
};

export default CardNormal;

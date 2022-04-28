import { useModal } from "hooks/useModal";
import * as IoIcon from "react-icons/io";
import styles from "./CardCompany.module.css";

const CardNormal = ({ name, logo, banner, mision, vision, title }) => {
  const [,openModal,] = useModal();

  return (
    <>
      <div className={styles.card} layoutId="cardExpand">
        <div layoutId="cardExpand-img" className={styles.cardLogo}>
          {logo ? <img src={logo} alt={name} /> : <IoIcon.IoMdBusiness />}
        </div>
        <button onClick={openModal}>Ver mas</button>
      </div>
    </>
  );
};

export default CardNormal;

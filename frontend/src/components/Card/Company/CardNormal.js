import { motion } from "framer-motion";
import * as IoIcon from "react-icons/io";
import styles from "./CardCompany.module.css";

const CardNormal = ({ name, webSite, logo, setIsOpen }) => {
  console.log(logo)
  return (
    <motion.div className={styles.card} layoutId="cardExpand">
        <motion.div layoutId="cardExpand-img" className={styles.cardLogo}>
          {
            logo ? (
              <img src={logo} alt={name} />
              ) : (
                <IoIcon.IoMdBusiness />
            )
          }
        </motion.div>
        <motion.a layoutId="cardExpand-a" href={webSite} target="_blank" alt={name}>sitio web: {name}</motion.a>
      <button onClick={() => setIsOpen(true)}>Ver mas</button>
    </motion.div>
  );
};

export default CardNormal;

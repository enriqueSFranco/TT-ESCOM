import { motion } from "framer-motion/dist/framer-motion";
import amazonBanner from "../../../images/fb.png";
import styles from "./CardCompany.module.css";

const CardNormal = ({ name, setIsOpen }) => {
  return (
    <motion.div className={styles.card} layoutId="cardExpand">
      <img src={amazonBanner} alt={name} />
      <motion.h1 layoutId="cardExpand-h">{name}</motion.h1>
      <button onClick={() => setIsOpen(true)}>Ver mas</button>
    </motion.div>
  );
};

export default CardNormal;

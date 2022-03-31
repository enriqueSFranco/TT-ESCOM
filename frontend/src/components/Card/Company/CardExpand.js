import { motion } from "framer-motion";
import styles from "./CardCompany.module.css";

const CardExpand = ({ setIsOpen, mision, vision }) => {
  return (
    <motion.div
      onClick={() => setIsOpen(false)}
      className={styles.cardExpand}
      layoutId="cardExpand"
      transition={{ layout: { duration: 1, type: "spring" } }}
    >
      <motion.h2 className={styles.cardExpandSubTitle}>Mision</motion.h2>
      <p>
        {mision}
      </p>
      <motion.h2 className={styles.cardExpandSubTitle}>Vision</motion.h2>
      <p>
        {vision}
      </p>
    </motion.div>
  );
};

export default CardExpand;

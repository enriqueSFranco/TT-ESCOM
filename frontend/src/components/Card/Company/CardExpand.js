import { motion } from "framer-motion/dist/framer-motion";
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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
        fugiat sapiente. Commodi tempore hic doloremque dicta mollitia numquam
        repellat vitae asperiores. Nobis beatae blanditiis molestias, iusto
        repellat consequuntur vitae recusandae.
      </p>
      <motion.h2 className={styles.cardExpandSubTitle}>Vision</motion.h2>
      <p>
        {vision}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo
        aspernatur accusamus at temporibus. Voluptates, corrupti? Saepe
        veritatis repudiandae corporis animi ad modi eaque dolorum iusto sit
        architecto? Eum, repudiandae.
      </p>
    </motion.div>
  );
};

export default CardExpand;

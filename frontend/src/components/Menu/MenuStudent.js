import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion" ;

import styles from "./MenuStudent.module.css";


// secciones del menu
let tabs = [
  { label: "historial-academico"},
  { label: "experiencia" },
  { label: "certificaciones" },
];

const MenuStudent = () => {
  const [selectedTab, setSelectTab] = useState(tabs[0]);
  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu}>
        {tabs.map((item) => (
          <li className={`${item.label === selectedTab ? `${styles.selected}` : ""} ${styles.navList}`} key={item.label}>
            <Link 
              to={item.label} 
              className={`${styles.navLink}`}
              onClick={() => {setSelectTab(item.label)}}
            >
              {item.label}
              {item.label === selectedTab ? (
                <motion.div className={styles.underline} layoutId="underline" />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuStudent;

import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./MenuStudent.module.css";

// secciones del menu
let tabs = [
  { label: "historial-academico" },
  { label: "idiomas" },
  { label: "experiencia" },
  { label: "certificaciones" },
];

const MenuStudent = () => {
  const [selectedTab, setSelectTab] = useState(tabs[0]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu}>
        {tabs.map(({label}) => (
          <li
            className={`${
              label === selectedTab ? `${styles.selected}` : ""
            } ${styles.navList}`}
            key={label}
          >
            <Link
              to={label}
              className={`${styles.navLink}`}
              onClick={() => {
                setSelectTab(label);
              }}
            >
              {label}
              {label === selectedTab ? (
                <div className={styles.underline} />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuStudent;

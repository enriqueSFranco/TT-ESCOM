import React from "react"

import { Link } from "react-router-dom";
import DropMenu from "./DropMenu";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLogo}>
            BTESCOM
          </Link>
          <ul className={styles.navList}>
            {/* inicio */}
            <li className={styles.navItem}>
              <Link to="/" className={`${styles.navLink} ${styles.selected}`}>
                {/* <FaIcon.FaHome className={styles.navIcon} /> */}
                Inicio
                {/* <span className={styles.navName}>Inicio</span> */}
              </Link>
            </li>
            {/* empresas */}
            <li className={styles.navItem}>
              <Link to="/empresas" className={styles.navLink}>
                Empresas
                {/* <FaIcon.FaBuilding className={styles.nav__icon} /> */}
                {/* <span className={styles.nav__name}>Empresas</span> */}
              </Link>
            </li>
            <li>
              <DropMenu />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

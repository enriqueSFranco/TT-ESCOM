import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuStudent.module.css';

const MenuStudent = () => {
  return (
    <nav className={styles.nav}>
            <ul className={styles.navMenu}>
              <li className={styles.navList}>
                <Link className={styles.navLink} to="sombreMi">
                  sobre mi
                </Link>
              </li>
              <li className={styles.navList}>
                <Link className={styles.navLink} to="experiencia">
                  experiencia
                </Link>
              </li>
              <li className={styles.navList}>
                <Link className={styles.navLink} to="certificaciones">
                  certificaciones
                </Link>
              </li>
            </ul>
          </nav>
  )
}

export default MenuStudent;
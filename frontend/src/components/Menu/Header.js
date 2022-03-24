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
                Inicio
              </Link>
            </li>
            {/* empresas */}
            <li className={styles.navItem}>
              <Link to="/empresas" className={styles.navLink}>
                Empresas
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/comunicados" className={styles.navLink}>
                Comunicados
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

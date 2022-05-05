import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "context/AuthContext";
import DropMenu from "./DropMenu";
import { BsFillBellFill } from "react-icons/bs";
import styles from "./Header.module.css";

const Header = () => {
  const { token } = useContext(AuthContext);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {token?.user?.user_type === "RECRUITER" ? (
            <>
              <Link to="/" className={styles.navLogo}>
                BT<span>ESCOM</span>
              </Link>
              <ul className={styles.navList}>
                <li className={styles.menuItemStudent}>
                  <Link to="/dashboard" className={styles.menuLinkStudent}>
                    Dashboard
                  </Link>
                </li>
                <li className={styles.menuItemStudent}>
                  <Link to="/mis-vacantes" className={styles.menuLinkStudent}>
                    Mis vacantes
                  </Link>
                </li>
                <li className={styles.menuItemStudent}>
                  <Link to="/comunicados" className={styles.menuLinkStudent}>
                    Comunicados
                  </Link>
                </li>
                <li className={styles.menuItemStudent}>
                  <Link to="/solicitudes" className={styles.menuLinkStudent}>
                    Candidatos
                  </Link>
                </li>
                <li>
                  <BsFillBellFill className={styles.notifyBell} />
                </li>
                <li>
                  <DropMenu />
                </li>
              </ul>
            </>
          ) : (
            <>
              <Link to="/" className={styles.navLogo}>
                BT<span>ESCOM</span>
              </Link>
              <ul className={styles.navList}>
                {/* inicio */}
                <li className={styles.navItem}>
                  <Link
                    to="/"
                    className={`${styles.navLink} ${styles.selected}`}
                  >
                    Inicio
                  </Link>
                </li>
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
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;

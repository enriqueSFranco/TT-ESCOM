import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Avatar from "../Avatar/Avatar";
import * as FaIcon from "react-icons/fa";
import styles from "./Styles.module.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.nav__logo}>
          BTESCOM
        </Link>
        <div className={styles.nav__menu}>
          <ul className={styles.nav__list}>
            {/* inicio */}
            <li className={styles.nav__item}>
              <Link to="/" className={`${styles.nav__link} ${styles.selected}`}>
                <FaIcon.FaHome className={styles.nav__icon} />
                <span className={styles.nav__name}>Inicio</span>
              </Link>
            </li>
            {/* empresas */}
            <li className={styles.nav__item}>
              <Link to="/empresas" className={styles.nav__link}>
                <FaIcon.FaBuilding className={styles.nav__icon} />
                <span className={styles.nav__name}>Empresas</span>
              </Link>
            </li>
            {/* reclutador */}
            <li className={styles.nav__item}>
              {user ? (
                <Link to="/postulaciones" className={styles.nav__link}>
                  <FaIcon.FaBriefcase className={styles.nav__icon} />
                  <span className={styles.nav__name}>Postulaciones</span>
                </Link>
              ) : (
                <Link to="/reclutador" className={styles.nav__link}>
                  <FaIcon.FaUserTie className={styles.nav__icon} />
                  <span className={styles.nav__name}>Reclutador</span>
                </Link>
              )}
            </li>
            {/* iniciar sesion y cerrar sesion*/}
            <li className={styles.nav__item}>
              {user ? (
                <Link to="/" className={styles.nav__link} onClick={logout}>
                  <FaIcon.FaUser className={styles.nav__icon} />
                  <span className={styles.nav__name}>Cerrar sesion</span>
                </Link>
              ) : (
                <Link to="/alumno" className={styles.nav__link}>
                  <FaIcon.FaUser className={styles.nav__icon} />
                  <span className={styles.nav__name}>Alumno</span>
                </Link>
              )}
            </li>
          </ul>
        </div>
        {user && (
          <Link to="/configuracion">
            <Avatar src="https://placeimg.com/30/30/people" alt="avatar" />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;

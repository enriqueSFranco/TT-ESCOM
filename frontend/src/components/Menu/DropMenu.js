import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import AuthContext from "context/AuthContext";
import { useDetectClick } from "hooks/useDetectClick";
import * as IoIcon from "react-icons/io";
import styles from "./Dropdown.module.css";

const DropMenu = () => {
  const { user, logout } = useContext(AuthContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectClick(dropdownRef, false);

  const onClick = () => setIsActive(!isActive);

  return (
    <div className={styles.dropdown}>
      <button className={styles.trigger} onClick={onClick}>
        <IoIcon.IoMdMenu style={{ color: "#fff" }} />
      </button>
      <nav
        ref={dropdownRef}
        className={`${styles.menu} ${isActive ? `${styles.active}` : ""}`}
      >
        <ul>
          {user ? (
            <>
              <li>
                <Link to="/perfil">Perfil</Link>
              </li>
              <li>
                <Link to="/">Mis Postulaciones</Link>
              </li>
              <li>
                <Link to="/">Modo Oscuro</Link>
              </li>
              <li>
                <Link to="/">Configuracion</Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>Cerrar sesion</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/alumno">Eres alumno ?</Link>
              </li>
              <li>
                <Link to="/reclutador">Eres reclutador ?</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default DropMenu;

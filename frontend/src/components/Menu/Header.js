import { useContext } from "react";
import { Link } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import Avatar from "../Avatar/Avatar";
import AuthContext from "../../context/AuthContext";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          BTESCOM
        </Link>
        {user && (
          <Link to="/configuracion">
            <Avatar src="https://placeimg.com/30/30/people" alt="avatar" />
          </Link>
        )}
        <div className="nav__menu">
          <ul className="nav__list">
            {/* inicio */}
            <li className="nav__item">
              <Link to="/" className="nav__link">
                <FaIcon.FaHome className="nav__icon" />
                <span className="nav__name">Inicio</span>
              </Link>
            </li>
            {/* empresas */}
            <li className="nav__item">
              <Link to="/empresas" className="nav__link">
                <FaIcon.FaBuilding className="nav__icon" />
                <span className="nav__name">Empresas</span>
              </Link>
            </li>
            {/* reclutador */}
            <li className="nav__item">
              {user ? (
                <Link to="/postulaciones" className="nav__link">
                  <FaIcon.FaBriefcase className="nav__icon" />
                  <span className="nav__name">Postulaciones</span>
                </Link>
              ) : (
                <Link to="/reclutador" className="nav__link">
                  <FaIcon.FaUserTie className="nav__icon" />
                  <span className="nav__name">Reclutador</span>
                </Link>
              )}
            </li>
            {/* iniciar sesion y cerrar sesion*/}
            <li className="nav__item">
              {user ? (
                <Link to="/" className="nav__link" onClick={logout}>
                  <FaIcon.FaUser className="nav__icon" />
                  <span className="nav__name">Cerrar sesion</span>
                </Link>
              ) : (
                <Link to="/iniciar-sesion" className="nav__link">
                  <FaIcon.FaUser className="nav__icon" />
                  <span className="nav__name">Alumno</span>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

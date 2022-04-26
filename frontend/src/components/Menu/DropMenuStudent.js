import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "context/AuthContext";
import { Avatar } from "@mui/material";
import { IoMdSettings, IoMdLogOut, IoMdBriefcase } from "react-icons/io";
import styles from "./MenuStudent.module.css";

const DropMenuStudent = ({student}) => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <li className={styles.menuItemStudent}>
        <Link className={styles.menuLinkStudent} to="/perfil">
          <Avatar width="35px" height="35px" />
          Perfil
        </Link>
      </li>
      <li className={styles.menuItemStudent}>
        <Link className={styles.menuLinkStudent} to="/">
          <IoMdBriefcase />
          Mis Postulaciones
        </Link>
      </li>
      <li className={styles.menuItemStudent}>
        <Link className={styles.menuLinkStudent} to="/">
          Modo Oscuro
        </Link>
      </li>
      <li className={styles.menuItemStudent}>
        <Link className={styles.menuLinkStudent} to="/">
          <IoMdSettings />
          Configuracion
        </Link>
      </li>
      <li className={styles.menuItemStudent}>
        <Link className={styles.menuLinkStudent} to="/" onClick={logout}>
          <IoMdLogOut />
          Cerrar sesion
        </Link>
      </li>
    </>
  );
};

export default DropMenuStudent;

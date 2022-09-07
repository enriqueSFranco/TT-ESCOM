import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { IoMdLogOut } from "react-icons/io";
// import { MdSpaceDashboard } from "react-icons/md"
import { BiCog } from "react-icons/bi";
import styles from "./Dropdown.module.css";
// import { Avatar } from "@mui/material";

const DropMenuRecruiter = () => {
  const { logout } = useAuth();

  return (
    <>
      <li className={styles.menuItemStudent}>
        <Link to="/historial" className={styles.menuLinkStudent}>
          <BiCog />
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

export default DropMenuRecruiter;

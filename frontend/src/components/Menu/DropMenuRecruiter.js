import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "context/AuthContext";
import { IoMdLogOut } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md"
import { BiCog } from "react-icons/bi";
import styles from "./Dropdown.module.css"
import { Avatar } from "@mui/material";

const DropMenuRecruiter = ({recruiter}) => {
  const { logout } = useContext(AuthContext);

  // if (Object.keys(recruiter).length === 0) return null;
  
  // console.log(recruiter);
  
  return (
    <ul className={styles.menuList}>
      <li className={styles.menuItemStudent}>
        <Link to="/historial" className={styles.menuLinkStudent}>
          <BiCog />Configuracion
        </Link>
      </li>
      <li className={styles.menuItemStudent}>
        <Link className={styles.menuLinkStudent} to="/" onClick={logout}>
          <IoMdLogOut />
          Cerrar sesion
        </Link>
      </li>
    </ul>
  );
};

export default DropMenuRecruiter;
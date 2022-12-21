import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { IoMdLogOut } from "react-icons/io";
import styles from "./Dropdown.module.css";

const DropMenuRecruiter = () => {
  const { logout } = useAuth();

  return (
      <li className={styles.menuItemStudent}>
        <Link className={styles.menuLinkStudent} to="/" onClick={logout}>
          <IoMdLogOut />
          Cerrar sesion
        </Link>
      </li>
  );
};

export default DropMenuRecruiter;

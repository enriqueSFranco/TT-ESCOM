import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "context/AuthContext";
import { IoMdLogOut } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md"
import styles from "./Dropdown.module.css"

const DropMenuRecruiter = ({recruiter}) => {
  const { logout } = useContext(AuthContext);

  // if (Object.keys(recruiter).length === 0) return null;
  
  console.log(recruiter);
  
  return (
    <ul>
      <li className={styles.menuItemStudent}>
        <Link to="/historial" className={styles.menuLinkStudent}>
          <MdSpaceDashboard />Dashboard
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
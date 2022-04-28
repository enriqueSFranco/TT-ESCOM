import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "context/AuthContext";
import CustomAvatar from "components/Avatar/Avatar";
import { IoMdSettings, IoMdLogOut, IoMdBriefcase } from "react-icons/io";
import styles from "./MenuStudent.module.css";
import { getStudent } from "services/students";

const DropMenuStudent = ({student}) => {
  const { logout } = useContext(AuthContext);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getStudent(student?.user_id)
      .then(response => {
        setUser(response)
      })
  }, [student?.user_id])

  return (
    <>
      <li className={styles.menuItemStudent}>
        <Link className={styles.menuLinkStudent} to="/perfil">
          <CustomAvatar student={user} width="35px" height="35px" />
          Perfil
        </Link>
      </li>
      <li className={styles.menuItemStudent}>
        <Link className={styles.menuLinkStudent} to="/mis-postulaciones">
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
        <Link className={styles.menuLinkStudent} to="/configuracion">
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
import React from "react";
import { useAuth } from "context/AuthContext";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";

const DropMenuManager = () => {
  const { logout } = useAuth();

  return (
    <li>
      <Link to="/perfil" onClick={logout}>
        <BiLogIn /> Cerrar sesion
      </Link>
    </li>
  );
};

export default DropMenuManager;

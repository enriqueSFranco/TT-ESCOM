import React from "react";
import { useAuth } from "context/AuthContext";
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components/MainMenuStyled";

const MenuRecruiter = () => {
  const { logout } = useAuth()

  return (
    <>
      <NavLeft>
        <NavLink to="/">
          <Logo>ESCOM</Logo>
        </NavLink>
      </NavLeft>
      <NavList>
        <NavItem>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/mis-vacantes">Mis vacantes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/publicar-comunicado">Comunicados</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/solicitudes">Candidatos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" onClick={logout}>Cerrar sesion</NavLink>
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuRecruiter;

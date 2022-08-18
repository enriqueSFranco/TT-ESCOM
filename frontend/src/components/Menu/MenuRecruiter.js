import React from "react";
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components/MainMenuStyled";

const MenuRecruiter = () => {
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
      </NavList>
    </>
  );
};

export default MenuRecruiter;

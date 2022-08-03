import React from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { IoBusinessOutline } from "react-icons/io5";
import { BsMegaphone } from "react-icons/bs";
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components/MainMenuStyled";

const MainMenu = () => {
  return (
    <>
      <NavLeft>
        <NavLink to="/">
          <MdOutlineBusinessCenter style={{ fontSize: "1.8rem" }} />
          <Logo>ESCOM</Logo>
        </NavLink>
      </NavLeft>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <TiHomeOutline />
            Inicio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/empresas">
            <IoBusinessOutline />
            Empresas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/comunicados">
            <BsMegaphone />
            Comunicados
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink type="button" bgColor="#fff" color="#000" to="/alumno">
            Iniciar sesion
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            type="button"
            bgColor="current"
            color="#fff"
            to="/reclutador"
          >
            Publicar empleo
          </NavLink>
        </NavItem>
      </NavList>
    </>
  );
};

export default MainMenu;

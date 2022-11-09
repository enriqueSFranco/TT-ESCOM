import React from "react";
import { useAuth } from "context/AuthContext";
import LinkButton from "components/Button/LinkButton";
import { HiOutlineLogout, HiUserGroup } from 'react-icons/hi'
import { BsFillMegaphoneFill } from 'react-icons/bs'
import { MdDashboard } from 'react-icons/md'
import logo from 'assets/icons/briefcase.png'
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
        <picture>
            <img src={logo} alt="logo-bte" />
          </picture>
          <Logo>ESCOM</Logo>
        </NavLink>
      </NavLeft>
      <NavList>
        <NavItem>
          <LinkButton to="/crear-vacante" text={`+ Crear Vacante`} color='#FFF' bg='#F13465' />
        </NavItem>
        <NavItem>
          <NavLink to="/dashboard"><MdDashboard />Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/publicar-comunicado"><BsFillMegaphoneFill />Comunicados</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/candidatos"><HiUserGroup />Candidatos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" onClick={logout}><HiOutlineLogout style={{fontSize: '1.4rem'}} />Salir</NavLink>
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuRecruiter;

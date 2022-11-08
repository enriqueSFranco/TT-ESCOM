import React from "react";
import { useAuth } from "context/AuthContext";
import DropMenu from "./DropMenu";
import { MdSpaceDashboard } from 'react-icons/md' 
import { IoBusinessOutline } from "react-icons/io5";
import logo from "assets/icons/briefcase.png";
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components/MainMenuStyled";

const MenuManager = () => {
  const { token } = useAuth();
  let typeuser = token?.user?.user_type;

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
        <NavLink to="/index" data-link>
          <MdSpaceDashboard style={{ fontSize: "1.5rem" }} />
          Dashboard
        </NavLink>
        <NavLink to="/empresas" data-link>
          <IoBusinessOutline style={{ fontSize: "1.5rem" }} />
          Empresas
        </NavLink>
        <NavItem>
          <DropMenu typeuser={typeuser} name={token.user.first_name} />
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuManager;

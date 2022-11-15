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
  Link,
} from "./styled-components/MainMenuStyled";

const MenuManager = () => {
  const { token } = useAuth();
  let typeuser = token?.user?.user_type;

  return (
    <>
      <NavLeft>
        <Link to="/">
          <picture>
            <img src={logo} alt="logo-bte" />
          </picture>
          <Logo>ESCOM</Logo>
        </Link>
      </NavLeft>
      <NavList>
        <Link to="/index" data-link>
          <MdSpaceDashboard style={{ fontSize: "1.5rem" }} />
          Dashboard
        </Link>
        <Link to="/empresas" data-link>
          <IoBusinessOutline style={{ fontSize: "1.5rem" }} />
          Empresas
        </Link>
        <NavItem>
          <DropMenu typeuser={typeuser} name={token.user.first_name} />
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuManager;

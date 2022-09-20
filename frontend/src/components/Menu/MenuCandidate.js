import React from "react";
import { useAuth } from "context/AuthContext";
import { useViewport } from "hooks/useViewport";
import DropMenu from "./DropMenu";
import { IoBusinessOutline } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { BsMegaphone } from "react-icons/bs"
import { FaBell } from 'react-icons/fa'
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components/MainMenuStyled";

const MenuCandidate = () => {
  const { token } = useAuth();
  const [viewport] = useViewport();
  let typeuser = token?.user?.user_type;

  if (viewport.device === "MOBILE") {
    return (
      <>
        <NavList>
          <NavItem>
            <NavLink to="/">
              <HiOutlineHome />
              Inicio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/mis-postulaciones">
              <IoMdBriefcase />
              Postulaciones
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/">
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
        </NavList>
      </>
    );
  }

  return (
    <>
      <NavLeft>
        <NavLink to="/">
          <IoMdBriefcase style={{ fontSize: "1.5rem" }} />
          <Logo>ESCOM</Logo>
        </NavLink>
      </NavLeft>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <HiOutlineHome />
            Inicio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/mis-postulaciones">
            <IoMdBriefcase />
            Mis Postulaciones
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
          <NavLink to="/">
            <FaBell />
          </NavLink>
        </NavItem>
        <NavItem>
          <DropMenu typeuser={typeuser} name={token.user.first_name} />
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuCandidate;

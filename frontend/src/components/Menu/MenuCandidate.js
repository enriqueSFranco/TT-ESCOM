import React from "react";
import { useAuth } from "context/AuthContext";
import { useViewport } from "hooks/useViewport";
// import { getStudent } from "services/students";
import { IoBusinessOutline } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { BsMegaphone } from "react-icons/bs"
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components/MainMenuStyled";
import DropMenu from "./DropMenu";

const MenuCandidate = ({ username }) => {
  const { token } = useAuth();
  const [viewport] = useViewport();
  let typeuser = token?.user?.user_type;

  console.log(viewport)

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
            <NavLink to="/mis-postulaciones">
              <IoBusinessOutline />
              Empresas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/mis-postulaciones">
              <BsMegaphone />
              Comunicados
            </NavLink>
          </NavItem>
          {/* <NavItem>
          <DropMenu typeuser={typeuser} />
        </NavItem> */}
        </NavList>
      </>
    );
  }

  return (
    <>
      <NavLeft>
        <NavLink to="/">
          <IoMdBriefcase style={{ fontSize: "1.2rem" }} />
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
          <DropMenu typeuser={typeuser} />
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuCandidate;

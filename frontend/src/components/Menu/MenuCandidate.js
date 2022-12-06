import React from "react";
import { useAuth } from "context/AuthContext";
import { useViewport, useGetCandidate } from "hooks";
import DropMenu from "./DropMenu";
import { IoBusinessOutline } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { BsMegaphone } from "react-icons/bs"
import { FaBell } from 'react-icons/fa'
import logo from 'assets/icons/briefcase.png'
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  Link,
} from "./styled-components/MainMenuStyled";

const MenuCandidate = () => {
  const { token } = useAuth();
  const [viewport] = useViewport();
  const { candidate } = useGetCandidate(token?.user?.user_id)
  let typeuser = token?.user?.user_type;

  if (!candidate) return null
  
  // console.log(candidate[0]?.t100_profile_picture)

  if (viewport.device === "MOBILE") {
    return (
      <>
        <NavList>
          <NavItem>
            <Link to="/">
              <HiOutlineHome />
              Inicio
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/mis-postulaciones">
              <IoMdBriefcase />
              Postulaciones
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/">
              <IoBusinessOutline />
              Empresas
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/comunicados">
              <BsMegaphone />
              Comunicados
            </Link>
          </NavItem>
        </NavList>
      </>
    );
  }

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
        <NavItem>
          <Link to="/">
            <HiOutlineHome />
            Inicio
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/mis-postulaciones">
            <IoMdBriefcase />
            Mis Postulaciones
          </Link>
        </NavItem>
        <NavItem>
            <Link to="/empresas">
              <IoBusinessOutline />
              Empresas
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/comunicados">
              <BsMegaphone />
              Comunicados
            </Link>
          </NavItem>
          <NavItem>
          <Link to="/">
            <FaBell />
          </Link>
        </NavItem>
        <NavItem>
          <DropMenu typeuser={typeuser} picture={candidate[0]?.t100_profile_picture} name={token.user.username} />
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuCandidate;

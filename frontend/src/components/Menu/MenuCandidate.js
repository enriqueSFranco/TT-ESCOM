import React from "react";
import { Link } from 'react-router-dom'
import { useAuth } from "context/AuthContext";
import { useViewport, useGetCandidate } from "hooks";
import DropMenu from "./DropMenu";
import { IoBusinessOutline } from "react-icons/io5";
import { IoMdBriefcase } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { BsMegaphone } from "react-icons/bs";
import logo from "assets/icons/briefcase.png";
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
  WrapperTypeUser
} from "./styled-components/MainMenuStyled";

const styles = {
  styledLink: {
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '.3rem',
  }
}

const MenuCandidate = () => {
  const { token } = useAuth();
  const [viewport] = useViewport();
  const { candidate } = useGetCandidate(token?.user?.user_id);
  let typeuser = token?.user?.user_type;

  if (!candidate) return null;

  console.log(candidate)

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
        <Link to="/" style={styles.styledLink}>
          <picture style={{width: '30px'}}>
            <img src={logo} alt="logo-bte" />
          </picture>
          <Logo>ESCOM</Logo>
        </Link>
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
          <WrapperTypeUser>
            <span>Hola 👋, {candidate[0]?.t100_name} | Candidato </span>
            <DropMenu
              typeuser={typeuser}
              picture={candidate[0]?.t100_profile_picture}
              name={token.user.username}
            />
          </WrapperTypeUser>
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuCandidate;

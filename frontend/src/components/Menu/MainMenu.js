import React from "react";
import { useViewport } from "hooks/useViewport";
import DropMenu from "./DropMenu";
import logo from "assets/icons/briefcase.png";
import { IoBusinessOutline } from "react-icons/io5";
import { BsMegaphone } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import {
  FcBriefcase,
  FcGraduationCap,
  FcAdvertising,
  FcDepartment,
  FcHome,
} from "react-icons/fc";
import {
  Logo,
  NavLeft,
  NavList,
  NavLink,
} from "./styled-components/MainMenuStyled";

const MainMenu = () => {
  const [viewport] = useViewport();

  if (viewport.device === "MOBILE") {
    return (
      <>
        <NavList>
          <NavLink to="/" data-link className="active">
            <FcHome style={{ fontSize: "1.5rem" }} />
            Inicio
          </NavLink>
          <NavLink to="/empresas" data-link>
            <FcDepartment style={{ fontSize: "1.5rem" }} />
            Empresas
          </NavLink>
          <NavLink to="/comunicados" data-link>
            <FcAdvertising style={{ fontSize: "1.5rem" }} />
            Comunicados
          </NavLink>
          <NavLink to="/alumno" data-link>
            <FcGraduationCap style={{ fontSize: "1.5rem" }} />
            Candidato
          </NavLink>
          <NavLink to="/reclutador" data-link>
            <FcBriefcase style={{ fontSize: "1.5rem" }} />
            Reclutador
          </NavLink>
        </NavList>
      </>
    );
  }

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
        <NavLink to="/" data-link className="active">
          <HiOutlineHome />
          Inicio
        </NavLink>
        <NavLink to="/empresas" data-link>
          <IoBusinessOutline />
          Empresas
        </NavLink>
        <NavLink to="/comunicados" data-link>
          <BsMegaphone />
          Comunicados
        </NavLink>
        <DropMenu />
      </NavList>
    </>
  );
};

export default MainMenu;

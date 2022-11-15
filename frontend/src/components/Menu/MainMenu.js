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
  Link,
} from "./styled-components/MainMenuStyled";

const MainMenu = () => {
  const [viewport] = useViewport();

  if (viewport.device === "MOBILE") {
    return (
      <>
        <NavList>
          <Link to="/" data-link className="active">
            <FcHome style={{ fontSize: "1.5rem" }} />
            Inicio
          </Link>
          <Link to="/empresas" data-link>
            <FcDepartment style={{ fontSize: "1.5rem" }} />
            Empresas
          </Link>
          <Link to="/comunicados" data-link>
            <FcAdvertising style={{ fontSize: "1.5rem" }} />
            Comunicados
          </Link>
          <Link to="/alumno" data-link>
            <FcGraduationCap style={{ fontSize: "1.5rem" }} />
            Candidato
          </Link>
          <Link to="/reclutador" data-link>
            <FcBriefcase style={{ fontSize: "1.5rem" }} />
            Reclutador
          </Link>
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
        <Link to="/" data-link className="active">
          <HiOutlineHome />
          Inicio
        </Link>
        <Link to="/empresas" data-link>
          <IoBusinessOutline />
          Empresas
        </Link>
        <Link to="/comunicados" data-link>
          <BsMegaphone />
          Comunicados
        </Link>
        <DropMenu />
      </NavList>
    </>
  );
};

export default MainMenu;

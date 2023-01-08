import React from "react";
import { Link } from 'react-router-dom'
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
  MyLink,
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


const MainMenu = () => {
  const [viewport] = useViewport();

  if (viewport.device === "MOBILE") {
    return (
      <>
        <NavList>
          <MyLink to="/" data-link className="active">
            <FcHome style={{ fontSize: "1.5rem" }} />
            Inicio
          </MyLink>
          <MyLink to="/empresas" data-link>
            <FcDepartment style={{ fontSize: "1.5rem" }} />
            Empresas
          </MyLink>
          <MyLink to="/comunicados" data-link>
            <FcAdvertising style={{ fontSize: "1.5rem" }} />
            Comunicados
          </MyLink>
          <MyLink to="/alumno" data-link>
            <FcGraduationCap style={{ fontSize: "1.5rem" }} />
            Candidato
          </MyLink>
          <MyLink to="/reclutador" data-link>
            <FcBriefcase style={{ fontSize: "1.5rem" }} />
            Reclutador
          </MyLink>
        </NavList>
      </>
    );
  }

  return (
    <>
      <NavLeft>
      <Link to="/" style={styles.styledLink}>
          <picture style={{ width: "30px" }}>
            <img src={logo} alt="logo-bte" width="100%" />
          </picture>
          <Logo>
            Bolsa de Trabajo <span className="escom">ESCOM</span>
          </Logo>
        </Link>
      </NavLeft>
      <NavList>
        <MyLink to="/" data-link className="active">
          <HiOutlineHome />
          Inicio
        </MyLink>
        <MyLink to="/empresas" data-link>
          <IoBusinessOutline />
          Empresas
        </MyLink>
        <MyLink to="/comunicados" data-link>
          <BsMegaphone />
          Comunicados
        </MyLink>
        <DropMenu />
      </NavList>
    </>
  );
};

export default MainMenu;

import React from "react";
// import { useLocation } from "react-router-dom";
import LinkButton from "components/Button/LinkButton";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { IoBusinessOutline } from "react-icons/io5";
import { BsMegaphone } from "react-icons/bs";
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components/MainMenuStyled";
// import "./MenuIndicator.css";

const MainMenu = () => {

  // const location = useLocation();
  // const menuRef = useRef(null);

  // useEffect(() => {
  //   let links = menuRef.current.querySelectorAll("[data-link]");
  //   links.forEach((link) => {
  //     link.classList.remove('active')
  //     if (link.pathname === location.pathname) {
  //       link.classList.add('active')
  //     }
  //   });

  // }, [location]);

  return (
    <>
      <NavLeft>
        <NavLink to="/">
          <MdOutlineBusinessCenter style={{ fontSize: "1.8rem" }} />
          <Logo>ESCOM</Logo>
        </NavLink>
      </NavLeft>
      <NavList>
        <NavLink to="/" data-link className='active'>
          <TiHomeOutline />
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
        <NavItem>
          <LinkButton to="/alumno">Iniciar sesion</LinkButton>
        </NavItem>
        <NavItem>
          <LinkButton to="/reclutador" bg='#F13465' color='#FFF'>Publicar empleo</LinkButton>
        </NavItem>
      </NavList>
    </>
  );
};

export default MainMenu;

import React from "react";
import LinkButton from "components/Button/LinkButton";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { IoBusinessOutline } from "react-icons/io5";
import { BsMegaphone } from "react-icons/bs";
import homeIcon from "assets/icons/home.png"
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components/MainMenuStyled";

const MainMenu = () => {
  console.log(process.env.REACT_APP_PATH_HOME)
  return (
    <>
      <NavLeft>
        <NavLink to='/'>
          <MdOutlineBusinessCenter style={{ fontSize: "1.8rem" }} />
          <Logo>ESCOM</Logo>
        </NavLink>
      </NavLeft>
      <NavList>
        <NavLink to="/" data-link className='active'>
          <img width='18px' src={homeIcon} alt="home" />
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
          <LinkButton to="/alumno" text='Iniciar sesion' bg='#FFF' color='#000' />
        </NavItem>
        <NavItem>
          <LinkButton to="/reclutador" text='Publicar empleo' bg='#F13465' color='#FFF' />
        </NavItem>
      </NavList>
    </>
  );
};

export default MainMenu;

import React from 'react'
import { FiHome } from "react-icons/fi"
import { IoBusinessOutline, IoLogIn } from "react-icons/io5"
import { GiNotebook } from "react-icons/gi"
import { ButtonLogin, ButtonPostJob, NavCenter, NavItem, NavList, NavRight, StyledLink } from "./styled-components/MainMenuStyled";


const MainMenu = () => {
  return (
    <>
      <NavCenter>
        <NavList>
          <NavItem>
            <FiHome style={{color: '#fff'}} />
            <StyledLink to="/">Inicio</StyledLink>
          </NavItem>
          <NavItem>
            <IoBusinessOutline style={{color: '#fff'}} />
            <StyledLink to="/empresas">Empresas</StyledLink>
          </NavItem>
          <NavItem>
            <GiNotebook style={{color: '#fff'}} />
            <StyledLink to="/comunicados">Comunicados</StyledLink>
          </NavItem>
        </NavList>
      </NavCenter>
      <NavRight>
        <NavList>
          <NavItem>
            <ButtonLogin to="/iniciar-sesion">
              Iniciar Sesion
              <IoLogIn />
              </ButtonLogin>
          </NavItem>
          <NavItem>
            <ButtonPostJob to="/reclutador">
              Publicar Vacante
            </ButtonPostJob>
          </NavItem>
        </NavList>
      </NavRight>
    </>
  )
}

export default MainMenu
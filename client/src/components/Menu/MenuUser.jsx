import React from "react"
import Avatar from "../Avatar/Avatar";
import { ButtonLogin, NavCenter, NavItem, NavList, NavRight, StyledLink } from "./styled-components/MainMenuStyled";
import { BsBriefcaseFill } from "react-icons/bs"
import { IoBusinessOutline, IoLogIn } from "react-icons/io5"
import { GiNotebook } from "react-icons/gi"

const MenuUser = () => {

  return (
    <>
      <NavCenter>
        <NavList>
          <NavItem>
            <BsBriefcaseFill style={{color: '#fff'}} />
            <StyledLink to="/">Encontrar vacante</StyledLink>
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
            <Avatar />
          </NavItem>
        </NavList>
      </NavRight>
    </>
  )
}

export default MenuUser
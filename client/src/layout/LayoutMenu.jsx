import React from 'react'
import { Header, Nav, Legend, Logo } from "./styled-components/LayoutMenuStyled";
import { BsBriefcaseFill } from "react-icons/bs"



const LayoutMenu = ({ children }) => {
  return (
    <Header>
      <Nav>
        <Logo to="/">
          <BsBriefcaseFill />
          <Legend>escom</Legend>
        </Logo>
        {children}
      </Nav>
    </Header>
  )
}

export default LayoutMenu
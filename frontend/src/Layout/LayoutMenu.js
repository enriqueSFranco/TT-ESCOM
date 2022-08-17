import React from "react";
import { useScroll } from "hooks/useScroll";
import { Header, Nav } from "./styled-components/LayoutMenuStyled";

const LayoutMenu = ({ children }) => {
  const onScreen = useScroll(300, false)

  return (
    <Header top={onScreen}>
      <Nav>{children}</Nav>
    </Header>
  );
};

export default LayoutMenu;

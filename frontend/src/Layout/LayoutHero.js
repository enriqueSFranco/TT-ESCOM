import React from "react";
import {
  Content,
  LayoutHeroStyled,
  Photo,
  WrapperPhoto,
} from "./styled-components/LayoutHeroStyled";

const LayoutHero = ({ children, src_photo, alt_photo }) => {
  return (
    <LayoutHeroStyled>
      <WrapperPhoto>
        <Photo src={src_photo} alt={alt_photo}></Photo>
        <Content>{children}</Content>
      </WrapperPhoto>
    </LayoutHeroStyled>
  );
};

export default LayoutHero;

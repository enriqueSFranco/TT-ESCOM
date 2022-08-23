import React from "react";
import { useViewport } from "hooks/useViewport"
import {
  Content,
  LayoutHeroStyled,
  Photo,
  WrapperPhoto,
} from "./styled-components/LayoutHeroStyled";


const LayoutHero = ({ children, src_photo, alt_photo }) => {
  const [viewport] = useViewport()

  console.log(viewport)

  return (
    <LayoutHeroStyled>
      <WrapperPhoto>
        {
          viewport.device === 'MOBILE' ? (
            <div style={{backgroundColor: '#FFF', width: '100%', height: '200px', position:'absolute'}}></div>
          ) : (
            <Photo src={src_photo} alt={alt_photo}></Photo>
          )
        }
      </WrapperPhoto>
      <Content>{children}</Content>
    </LayoutHeroStyled>
  );
};

export default LayoutHero;

import styled from "styled-components";
import { device } from "breakpoints";

const LayoutHeroStyled = styled.section`

  /* height: 250px;
  width: 100%; */

  @media screen and ${device.laptop} {    
    width: 100%;
    height: 400px;
    position: relative;
  }

`

const WrapperPhoto = styled.div`
  width: 100%;
  height: inherit;
  position: absolute;
`

const Photo = styled.img`
  object-fit: cover;
  object-position: center;
  /* position: absolute; */
  width: 100%;
  height: 400px;
`

const Content = styled.div`
  width: 100%;
  height: 100px;
  background-color: transparent;
  position: absolute;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  position: absolute;
  top: 6rem;
`

export { Content, LayoutHeroStyled, Photo, WrapperPhoto }
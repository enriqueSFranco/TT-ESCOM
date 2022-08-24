import styled from "styled-components";
import { device } from "breakpoints";

const LayoutHeroStyled = styled.section`
  @media screen and ${device.laptop} {
    width: 100%;
    height: 400px;
    position: relative;
  }
`;

const ContainerText = styled.div`
  position: relative;
  line-height: 15px;

  &::after {
    content: '';
    width: 270px;
    height: 3px;
    background-color: #46B392;
    position: absolute;
    top: 1rem;
    left: 0;
  }
`

const WrapperAvatar = styled.div`
  background-color: #fff;
  width: 100%;
  height: 280px;
  padding: 1rem;
  position: fixed;
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  gap: .7rem;
  z-index: 10;
`;

const WrapperPhoto = styled.div`
  width: 100%;
  height: inherit;
  position: absolute;
`;

const Photo = styled.img`
  object-fit: cover;
  object-position: center;
  /* position: absolute; */
  width: 100%;
  height: 400px;
`;

const Content = styled.div`
  width: 100%;
  height: inherit;
  /* background-color: transparent; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: absolute;
  bottom: 0;
  outline: 2px solid red;
`;

export { Content, ContainerText, LayoutHeroStyled, Photo, WrapperPhoto, WrapperAvatar };

import styled from "styled-components";
import { device } from "breakpoints";

const LayoutHeroStyled = styled.section`
  @media screen and ${device.laptop} {
    width: 100%;
    height: 250px;
    position: fixed;
    z-index: 99;
    background-color: #fff;
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
  height: 200px;
`;

const Photo = styled.img`
  object-fit: cover;
  object-position: 0 53%;
  width: 100%;
  height: 200px;
`;

const Content = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Content, ContainerText, LayoutHeroStyled, Photo, WrapperPhoto, WrapperAvatar };

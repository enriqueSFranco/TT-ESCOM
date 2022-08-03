import styled from "styled-components";
import { device } from "../../breakpoints";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: 
    "header"
    "main";

  @media screen and ${device.laptop} {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-rows: repeat(2, 1fr);

    grid-template-areas: 
      "header header"
      "aside main";

  }
`
const ContainerMenu = styled.div`
  grid-area: header;

  @media screen and ${device.laptop} {
      grid-area: header;
  }
`

const ContainerMain = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: repeat(1, minmax(225px, 1fr));

  @media screen and ${device.laptop} {
    outline: 2px solid blue;
    width: 100%;
    display: grid;
    grid-area: main;
    grid-template-columns: repeat(3, 450px);
    justify-items: center;
    margin-top: 1rem;
  }
`

const ContainerAsideMenu = styled.aside`
  grid-area: aside;
  padding: 1rem;
  background-color: #F7F9FC;
`

export { Container, ContainerMenu, ContainerMain, ContainerAsideMenu }
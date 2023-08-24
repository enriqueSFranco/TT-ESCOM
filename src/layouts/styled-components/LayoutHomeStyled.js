import styled from "styled-components";

const LayoutHomeStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  grid-template-areas: 
    "header"
    "main";
`

const Header = styled.div`
  grid-area: header;
`

const Main = styled.section`
  grid-area: main;
`

export { LayoutHomeStyle, Header, Main }
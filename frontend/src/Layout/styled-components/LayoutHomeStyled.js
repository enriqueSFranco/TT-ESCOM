import React from 'react'
import styled from "styled-components";

const LayoutHomeStyle = styled(React.Fragment)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  grid-template-areas: 
    "header"
    "main";
`

const Header = styled(React.Fragment)`
  grid-area: header;
`

const Main = styled(React.Fragment)`
  grid-area: main;
`

export { LayoutHomeStyle, Header, Main }
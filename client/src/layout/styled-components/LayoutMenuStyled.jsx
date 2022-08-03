import styled from "styled-components";
import { Link } from "react-router-dom"

const Legend = styled.span`
  font-weight: 700;
  color: #fff;
  font-size: 1.5rem;
`;

const Logo = styled(Link)`
  text-transform: uppercase;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  color: #fff;
  text-decoration: none;
`;

const Header = styled.header`
  font-family: sans-serif;
  position: fixed;
  top: 0;
  height: 4rem;
  width: 100%;
  background-color: #00000084;
  backdrop-filter: blur(6px);
  z-index: 1;
`;

const Nav = styled.nav`
  width: inherit;
  height: inherit;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export { Legend, Logo, Header, Nav }
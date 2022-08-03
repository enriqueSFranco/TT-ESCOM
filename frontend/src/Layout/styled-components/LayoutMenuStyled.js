import styled from 'styled-components'

const Header = styled.header`
  font-family: sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #000;
  z-index: 10;
  height: 4rem;
  font-family: 'Poppins', sans-serif;
`

const Nav = styled.nav`
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  padding: 0 2rem 0 1rem;
`

export { Header, Nav }
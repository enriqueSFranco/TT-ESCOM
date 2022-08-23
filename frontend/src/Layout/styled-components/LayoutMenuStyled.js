import styled from 'styled-components'
import { device } from 'breakpoints'

const Header = styled.header`
  @media screen and ${device.mobileM} {   
    width: 100%;
    height: 3rem;
    /* background-color: red; */
    backdrop-filter: blur(10px);
  }

@media screen and ${device.laptop} {
    font-family: sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    ${props => {
      if (props.top) {
        return `
          background-color: #000;
          transition: background-color .4s ease-in-out;
        `
      } else {
        return `
          background-color: #2b2b2bcc;
          backdrop-filter: blur(10px);
          transition: background-color .4s ease-in-out;
        `
      }
    }}
    z-index: 10;
    color: blue;
    font-family: 'Poppins', sans-serif;
    
  }

`

const Nav = styled.nav`
  @media screen and ${device.mobileM} {   
    width: 100%;
    height: 3rem;
    /* background-color: red; */
    backdrop-filter: blur(10px);
  }

  @media screen and ${device.laptop} {
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding: 0 2rem 0 1rem;
  }


`

export { Header, Nav }
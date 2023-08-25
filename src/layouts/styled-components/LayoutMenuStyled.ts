import styled from 'styled-components'
import { device } from 'breakpoints'

const Header = styled.header`
  @media screen and ${device.mobileM} {   
    width: 100%;
    height: 3rem;
    backdrop-filter: blur(10px);
    position: fixed;
    bottom: 0;
    z-index: 100;
  }

  @media screen and ${device.laptop} {
      width: 100%;
      height: 4rem;
      display: flex;
      justify-content: space-between;
      /* outline: 2px solid blue; */
      font-family: sans-serif;
      position: fixed;
      top: 0;
      left: 0;
      ${props => {
    if (props.top) {
      return `
            background-color: #000;
            transition: background-color .4s ease-in-out;
          `
    } else {
      return `
            background-color: #222;
            transition: background-color .4s ease-in-out;
          `
    }
  }}
      z-index: 100;      
    }
`

const Nav = styled.nav`
  @media screen and ${device.mobileM} {   
    width: 100%;
    height: 3rem;
    backdrop-filter: blur(10px);
  }

  @media screen and ${device.laptop} {
    width: 100%;
    height: inherit;
    /* outline: 2px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding: 0 2rem 0 1rem;
  }


`

export { Header, Nav }
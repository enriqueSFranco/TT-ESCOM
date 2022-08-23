import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from 'breakpoints'

const NavLeft = styled.div`
  width: 140px;
  height: 40px;
`

const Logo = styled.h1`
  @media screen and ${device.mobileM} {
    color: #000;
    font-size: 1.3rem;
  }

  @media screen and ${device.laptop} {    
    color: #fff;
    font-weight: 700;
    font-size: 1.8rem;
    margin: 0;
  }

`

const NavList = styled.ul`

  @media screen and ${device.mobileM} {
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    /* display: none; */
  }
  
  @media screen and ${device.laptop} {
    width: fit-content;
    height: 4rem;
    padding: 0;
    margin-right: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
    list-style: none;
    gap: 1.5rem;
  }
`

const NavItem = styled.li`
  width: fit-content;
`

const NavLink = styled(Link)`

  @media screen and ${device.mobileM} {
    color: #000;
  }

  @media screen and ${device.laptop} {

    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .3rem;
    color: #fff;

    &:hover {
      color: #fff;
    }
  }


`


export { Logo, NavLeft, NavList, NavItem, NavLink }

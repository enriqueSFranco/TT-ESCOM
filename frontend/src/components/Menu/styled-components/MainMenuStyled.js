import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { device } from 'breakpoints'

const NavLeft = styled.div`
  @media only screen and ${device.mobileM} {
    width: 140px;
    height: 40px;
  }
  
  @media screen and ${device.laptop} {
    width: 140px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
  list-style: none;
  
  @media screen and ${device.mobileM} {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0 .5rem .6rem .5rem;
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

const Link = styled(NavLink)`

  @media screen and ${device.mobileM} {
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: .7rem;
    font-weight: 500;
  }

  @media screen and ${device.laptop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    justify-content: space-between;
    gap: .3rem;
    color: #fff;

    &:hover {
      color: #fff;
    }
  }
`
export { Logo, NavLeft, NavList, NavItem, Link }

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLeft = styled.div`
  width: 140px;
  height: 40px;
`

const Logo = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0;
`

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  width: fit-content;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  list-style: none;
`

const NavItem = styled.li`
  width: fit-content;
`

const NavLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .3rem;
  color: #fff;

  &:hover {
    color: #fff;
  }
`


export { Logo, NavLeft, NavList, NavItem, NavLink }

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLeft = styled.div`
  width: 140px;
  height: 40px;
`

const Logo = styled.h1`
  color: var(--color-logo);
  font-weight: 700;
  font-size: 1.8rem;
  margin: 0;
`

const NavList = styled.ul`
  /* outline: 2px solid blue; */
  padding: 0;
  margin: 0;
  width: fit-content;
  /* height: 40px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`

const NavItem = styled.li`
  /* outline: 2px solid red; */
  width: fit-content;
`

const NavLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .3rem;

  &:hover {
    color: var(--color-logo);
  }

  ${props => {
    if (props.type === 'button') {
      return `
        background-color: ${props.bgColor};
        color: ${props.color || '#fff'};
        // outline: 1px solid #fff;
        height: 2.8rem;
        padding: 1rem .5rem;
        border-radius: 1rem;
        border: none;
      `
    }
  }}
`


export { Logo, NavLeft, NavList, NavItem, NavLink }

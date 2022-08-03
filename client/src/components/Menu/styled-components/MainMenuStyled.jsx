import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { device } from '../../../breakpoints'

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 700;
  letter-spacing: 1px;
  color: #fff;
`

const NavCenter = styled.div`
  width: fit-content;
`;

const NavRight = styled.div`
  width: fit-content;
`;

const NavList = styled.ul`
  height: 4rem;
  width: inherit;
  padding: 0;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`

const NavItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;
`;

const ButtonLogin = styled(Link)`
  background-color: #1A75E9;
  border-radius: 4px;
  padding: .5rem;
  transition: all .3s ease;
  color: #fff;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: .3rem;
  text-decoration: none;
  transition: all .3s ease;

  &:hover {
    box-shadow: #1A75E9 0px 0px 0px 3px;
    color: #fff;
  }
`;

const ButtonPostJob = styled(Link)`
  outline: 1px solid #fff;
  border-radius: 4px;
  padding: .5rem;
  background-color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all .3s ease;
  color: #000;
  display: flex;
  align-items: center;
  gap: .3rem;

  &:hover {
    box-shadow: #ffffffd3 0px 0px 0px 3px;
  }
`

export { ButtonLogin, ButtonPostJob, NavCenter, NavItem, NavList, NavRight, StyledLink };

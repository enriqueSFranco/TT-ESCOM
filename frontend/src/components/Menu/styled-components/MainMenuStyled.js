import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "breakpoints";

const WrapperTypeUser = styled.div`
  @media screen and ${device.laptop} {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    color: #fff;
  }
`;

const NavLeft = styled.div`
  @media only screen and ${device.mobileM} {
    width: 140px;
    height: 40px;
  }

  @media screen and ${device.laptop} {
    width: fit-content;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Logo = styled.h1`
  @media screen and ${device.mobileM} {
    color: #000;
    font-size: 1.3rem;
  }

  @media screen and ${device.laptop} {
    color: #fff;
    letter-spacing: -1px;
    font-weight: 700;
    font-size: 1rem;
    margin: 0;

    .escom {
      background: linear-gradient(90deg, hsla(217, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
`;

const NavList = styled.ul`
  list-style: none;

  @media screen and ${device.mobileM} {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0 0.5rem 0.6rem 0.5rem;
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
`;

const NavItem = styled.li`
  width: fit-content;
`;

const MyLink = styled(NavLink)`
  @media screen and ${device.mobileM} {
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.7rem;
    font-weight: 500;
  }

  @media screen and ${device.laptop} {
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.95rem;
    justify-content: space-between;
    gap: 0.2rem;
    padding: 0 0.4rem;
    position: relative;
    transition: background-color 0.3s ease-in-out;

    &::before {
      content: "";
      width: 100%;
      height: 4px;
      position: absolute;
      left: 0;
      top: 1.5rem;
      background: linear-gradient(
        90deg,
        hsla(217, 100%, 50%, 1) 0%,
        hsla(186, 100%, 69%, 1) 100%
      );
      transition: 0.5s transform ease;
      transform: scale3d(0, 1, 1);
      transform-origin: 0 50%;
      border-radius: 5px;
    }

    &:hover {
      color: #fff;
    }

    &:hover::before {
      transform: scale3d(1, 1, 1);
      transform-origin: 100% 50%;
    }

    &:hover::before {
      transform-origin: 0% 50%;
    }
  }
`;
export { Logo, NavLeft, NavList, NavItem, MyLink, WrapperTypeUser };

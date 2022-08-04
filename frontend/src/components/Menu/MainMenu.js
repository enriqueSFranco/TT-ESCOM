import React from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { IoBusinessOutline } from "react-icons/io5";
import { BsMegaphone } from "react-icons/bs";
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components/MainMenuStyled";
import styles from "./MenuIndicator.module.css";
import { useActiveMenuItem } from "hooks/useActiveMenuItem";

const menuItems = [
  { label: "Inicio", icon: <TiHomeOutline />, to: "/" },
  { label: "Empresas", icon: <IoBusinessOutline />, to: "/empresas" },
  { label: "Comunicados", icon: <BsMegaphone />, to: "/comunicados" },
];

const MainMenu = () => {
  const [activeIndex] = useActiveMenuItem(0, menuItems)

  return (
    <>
      <NavLeft>
        <NavLink to="/">
          <MdOutlineBusinessCenter style={{ fontSize: "1.8rem" }} />
          <Logo>ESCOM</Logo>
        </NavLink>
      </NavLeft>
      <NavList>
        {menuItems.map((menuItem, index) => (
          <NavLink
            to={menuItem.to}
            data-item
            className={`${activeIndex === index ? `${styles.active}` : null}`}
          >
            {menuItem.icon}
            {menuItem.label}
          </NavLink>
        ))}
        <NavItem>
          <NavLink type="button" bgColor="blue" to="/alumno">
            Iniciar sesion
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            type="button"
            bgColor="#252A48"
            color="#fff"
            to="/reclutador"
          >
            Publicar empleo
          </NavLink>
        </NavItem>
      </NavList>
    </>
  );
};

export default MainMenu;

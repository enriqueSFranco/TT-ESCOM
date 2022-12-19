import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import LinkButton from "components/Button/LinkButton";
import { HiOutlineLogout, HiUserGroup } from "react-icons/hi";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import logo from "assets/icons/briefcase.png";
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  NavLink,
} from "./styled-components/MainMenuStyled";

const links = [
  {
    id: crypto.randomUUID(),
    to: "/dashboard",
    icon: <MdDashboard />,
    label: "Dashboard",
  },
  {
    id: crypto.randomUUID(),
    to: "/publicar-comunicado",
    icon: <BsFillMegaphoneFill />,
    label: "Comunicados",
  },
  {
    id: crypto.randomUUID(),
    to: "/candidatos",
    icon: <HiUserGroup />,
    label: "Talentos",
  },
];

const styles = {
  styledLink: {
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '.3rem',
  }
}

const MenuRecruiter = () => {
  const { logout } = useAuth();

  return (
    <>
      <NavLeft>
        <Link to="/" style={styles.styledLink}>
          <picture style={{width: '30px'}}>
            <img src={logo} alt="logo-bte" />
          </picture>
          <Logo>ESCOM</Logo>
        </Link>
      </NavLeft>
      <NavList>
        <NavItem>
          <LinkButton
            to="/crear-vacante"
            text={`+ Crear Vacante`}
            color="#00e49f"
            bg="#0bab7b4d"
          />
        </NavItem>
          {links?.map((link, index) => (
            <NavLink data-item key={`linkId-${link.id}`} to={link.to}>
              {link.icon}{link.label}
            </NavLink>
          ))}
        <NavItem>
          <NavLink to="/" onClick={logout}>
            <HiOutlineLogout style={{ fontSize: "1.4rem" }} />
            Salir
          </NavLink>
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuRecruiter;

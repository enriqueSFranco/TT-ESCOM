import React from "react";
import { Link } from "react-router-dom"
import { useAuth } from "context/AuthContext";
import DropMenu from "./DropMenu";
import { HiUserGroup } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
import { MdSpeakerNotes, MdOutlineWork } from "react-icons/md";
import { IoBusinessOutline } from "react-icons/io5";
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
    to: "/comunicados",
  //   icon: <MdSpeakerNotes
  //   style={{
  //     marginRight: ".3rem",
  //     fontSize: "1.3rem",
  //     color: "#FFF",
  //   }}
  // />,
    label: "Comunicados",
  },
  {
    id: crypto.randomUUID(),
    to: "/agregar-colaborador",
  //   icon: <HiUserGroup
  //   style={{
  //     marginRight: ".3rem",
  //     fontSize: "1.3rem",
  //     color: "#FFF",
  //   }}
  // />,
    label: "Colaboradores",
  },
  {
    id: crypto.randomUUID(),
    to: "/validar-vacante",
  //   icon: <MdOutlineWork
  //   style={{ marginRight: ".3rem", fontSize: "1.3rem", color: "#FFF", }}
  // />,
    label: "Validar vacantes",
  },
  {
    id: crypto.randomUUID(),
    to: "/validar-reclutador",
  //   icon: <FaUserTie
  //   style={{ marginRight: ".3rem", marginLeft: '0', fontSize: "1.3rem" }}
  // />,
    label: "Validar reclutadores",
  },
  {
    id: crypto.randomUUID(),
    to: "/validar-empresa",
    // icon: <FaUserTie style={{ fontSize: "1.3rem" }} />,
    label: "Validar empresas",
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

const MenuManager = () => {
  const { token } = useAuth();
  let typeuser = token?.user?.user_type;

  return (
    <>
      <NavLeft>
        <Link to="/" style={styles.styledLink}>
          <picture style={{width: '30px'}}>
            <img src={logo} alt="logo-bte" width="100%" />
          </picture>
          <Logo>BTESCOM</Logo>
        </Link>
      </NavLeft>
      <NavList>
        {links?.map((link, index) => (
          <NavLink data-item key={`link-id-${link.id}`} to={link.to}>
            {link.icon}
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/empresas" data-link>
          <IoBusinessOutline style={{ fontSize: "1.3rem" }} />
          Empresas
        </NavLink>
        <NavItem>
          <DropMenu typeuser={typeuser} name={token.user.first_name} />
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuManager;

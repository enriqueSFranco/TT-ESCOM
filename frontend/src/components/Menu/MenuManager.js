import React from "react";
import { useAuth } from "context/AuthContext";
import DropMenu from "./DropMenu";
import { HiUserGroup } from "react-icons/hi";
import { FcBusiness, FcBusinessman } from "react-icons/fc";
import { MdSpeakerNotes } from "react-icons/md";
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
    icon: <MdSpeakerNotes
    style={{
      marginRight: ".3rem",
      fontSize: "1.3rem",
      color: "#673AB7",
    }}
  />,
    label: "Comunicados",
  },
  {
    id: crypto.randomUUID(),
    to: "/agregar-colaborador",
    icon: <HiUserGroup
    style={{
      marginRight: ".3rem",
      fontSize: "1.3rem",
      color: "#F13465",
    }}
  />,
    label: "Colaboradores",
  },
  {
    id: crypto.randomUUID(),
    to: "/validar-vacante",
    icon: <FcBusiness
    style={{ marginRight: ".3rem", fontSize: "1.3rem" }}
  />,
    label: "Validar vacantes",
  },
  {
    id: crypto.randomUUID(),
    to: "/validar-reclutador",
    icon: <FcBusinessman
    style={{ marginRight: ".3rem", marginLeft: '0', fontSize: "1.3rem" }}
  />,
    label: "Validar reclutadores",
  },
  {
    id: crypto.randomUUID(),
    to: "/validar-empresa",
    icon: <IoBusinessOutline style={{ fontSize: "1.3rem" }} />,
    label: "Validar empresas",
  },
];

const MenuManager = () => {
  const { token } = useAuth();
  let typeuser = token?.user?.user_type;

  return (
    <>
      <NavLeft>
        <NavLink to="/">
          <picture>
            <img src={logo} alt="logo-bte" />
          </picture>
          <Logo>ESCOM</Logo>
        </NavLink>
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

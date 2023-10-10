import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import DropMenu from "./DropMenu";
import { HiUserGroup } from "react-icons/hi";
import { FaUserTie } from "react-icons/fa";
import { BsMegaphone, BsShieldCheck } from "react-icons/bs";
import { MdBusinessCenter } from "react-icons/md";
import { IoBusinessOutline } from "react-icons/io5";
import logo from "assets/icons/briefcase.png";
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  MyLink,
  WrapperTypeUser,
} from "./styled-components/MainMenuStyled";

const links = [
  {
    id: crypto.randomUUID(),
    to: "/agregar-colaborador",
    icon: (
      <HiUserGroup
        style={{
          marginRight: ".3rem",
          color: "#FFF",
        }}
      />
    ),
    label: "Colaboradores",
  },
  {
    id: crypto.randomUUID(),
    to: "/validar-vacante",
    icon: <MdBusinessCenter style={{ marginRight: ".3rem", color: "#FFF" }} />,
    label: "Validar vacantes",
  },
  {
    id: crypto.randomUUID(),
    to: "/validar-reclutador",
    icon: <FaUserTie style={{ marginRight: ".3rem", marginLeft: "0" }} />,
    label: "Aprobar reclutador",
  },
  {
    id: crypto.randomUUID(),
    to: "/validar-empresa",
    icon: (
      <BsShieldCheck
        style={{ marginRight: ".3rem", marginLeft: "0", color: "#fff" }}
      />
    ),
    label: "Aprobar empresa",
  },
];

const styles = {
  styledLink: {
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: ".3rem",
  },
};

const MenuManager = () => {
  const { token } = useAuth();
  let typeuser = token?.user?.user_type;
  let name = token?.user?.first_name

  const navLinkStyle = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none',
      color: isActive ? 'red' : 'blue'
    }
  }

  return (
    <>
      <NavLeft>
        <Link to="/" style={styles.styledLink}>
          <picture style={{ width: "30px" }}>
            <img src={logo} alt="logo-bte" width="100%" />
          </picture>
          <Logo>
            Bolsa de Trabajo <span className="escom">ESCOM</span>
          </Logo>
        </Link>
      </NavLeft>
      <NavList>
        {links?.map((link) => (
          <MyLink
            key={`link-id-${link.id}`}
            to={link.to}
            style={navLinkStyle}
          >
            {link.icon}
            {link.label}
          </MyLink>
        ))}
        <MyLink to="/empresas" activeClassName="active">
          <IoBusinessOutline style={{ fontSize: "1.3rem" }} />
          Empresas
        </MyLink>
        <NavItem>
          <WrapperTypeUser>
            <span>Hola 👋, {name}| Administrador </span>
            <DropMenu typeuser={typeuser} name={token.user.first_name} />
          </WrapperTypeUser>
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuManager;

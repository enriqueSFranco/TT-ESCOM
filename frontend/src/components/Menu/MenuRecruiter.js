import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useGetRecruiter } from "hooks"
import DropMenu from "./DropMenu";
import LinkButton from "components/Button/LinkButton";
import { HiUserGroup } from "react-icons/hi";
import { BsFillMegaphoneFill } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import logo from "assets/icons/briefcase.png";
import {
  Logo,
  NavLeft,
  NavList,
  NavItem,
  MyLink,
  WrapperTypeUser
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
  const { token } = useAuth();
  const { recruiter } = useGetRecruiter(token.user.user_id)
  let typeuser = token?.user?.user_type;


  if (!recruiter) return null

  return (
    <>
      <NavLeft>
      <Link to="/" style={styles.styledLink}>
          <picture style={{ width: "30px" }}>
            <img src={logo} alt="logo-bte" width="100%" />
          </picture>
          <Logo>Bolsa de Trabajo <span className="escom">ESCOM</span></Logo>
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
            <MyLink data-item key={`linkId-${link.id}`} to={link.to}>
              {link.icon}{link.label}
            </MyLink>
          ))}
        <NavItem>
        <WrapperTypeUser>
            <span>Hola 👋, {recruiter[0]?.t301_name} | Reclutador </span>
            <DropMenu
              typeuser={typeuser}
              name={recruiter[0]?.t301_name}
            />
          </WrapperTypeUser>
          {/* <Link to="/" onClick={logout}>
            <HiOutlineLogout style={{ fontSize: "1.4rem" }} />
            Salir
          </Link> */}
        </NavItem>
      </NavList>
    </>
  );
};

export default MenuRecruiter;

import React from "react";
import { Link } from "react-router-dom";
import Menu from "components/Menu/Menu";
import { IoBusiness } from "react-icons/io5";
import { FcBusinessman, FcBusiness } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import { MdSpeakerNotes } from "react-icons/md";
import {
  SideBar,
  Content,
  NavList,
  Item,
  Wrapper,
} from "./styled-components/LayoutAdminStyled";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      <Menu />
      <Wrapper>
        <SideBar>
          <NavList>
            <Item>
              <MdSpeakerNotes
                style={{
                  marginRight: ".3rem",
                  fontSize: "1.3rem",
                  color: "#673AB7",
                }}
              />{" "}
              <Link to="/comunicados">Comunicados/Eventos</Link>
            </Item>
            <Item>
              <HiUserGroup
                style={{
                  marginRight: ".3rem",
                  fontSize: "1.3rem",
                  color: "#F13465",
                }}
              />{" "}
              <Link to="lista-de-colaboradores">Colaboradores</Link>
            </Item>
            <Item>
              <FcBusiness
                style={{ marginRight: ".3rem", fontSize: "1.3rem" }}
              />
              <Link to="lista-de-vacantes">Vacantes-ESCOM</Link>
            </Item>
            <Item>
              <FcBusinessman
                style={{ marginRight: ".3rem", fontSize: "1.3rem" }}
              />{" "}
              <Link to="validar-reclutador">Reclutadores por validar</Link>
            </Item>
            <Item>
              <IoBusiness
                style={{
                  marginRight: ".3rem",
                  fontSize: "1.3rem",
                  color: "#8A9FA9",
                }}
              />{" "}
              <Link to="validar-empresa">Empresas por validar</Link>
            </Item>
            <Item>
              <IoBusiness
                style={{
                  marginRight: ".3rem",
                  fontSize: "1.3rem",
                  color: "#8A9FA9",
                }}
              />{" "}
              <Link to="validar-empresa">Vacantes por validar</Link>
            </Item>
          </NavList>
        </SideBar>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};

export default LayoutAdmin;

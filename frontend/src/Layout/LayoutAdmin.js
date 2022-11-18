import React from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink
                to="/comunicados"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <MdSpeakerNotes
                  style={{
                    marginRight: ".3rem",
                    fontSize: "1.3rem",
                    color: "#673AB7",
                  }}
                />
                Comunicados/Eventos
              </NavLink>
            </Item>
            <Item>
              <NavLink to="lista-de-colaboradores">
              <HiUserGroup
                style={{
                  marginRight: ".3rem",
                  fontSize: "1.3rem",
                  color: "#F13465",
                }}
              />Colaboradores</NavLink>
            </Item>
            <Item>
              <NavLink to="lista-de-vacantes">
              <FcBusiness
                style={{ marginRight: ".3rem", fontSize: "1.3rem" }}
              />
                Vacantes-ESCOM</NavLink>
            </Item>
            <Item>
              <NavLink to="validar-reclutador">
              <FcBusinessman
                style={{ marginRight: ".3rem", marginLeft: '0', fontSize: "1.3rem" }}
              />
                Reclutadores por validar
              </NavLink>
            </Item>
            <Item>
              <NavLink to="validar-empresa">
              <IoBusiness
                style={{
                  marginRight: ".3rem",
                  fontSize: "1.3rem",
                  color: "#8A9FA9",
                }}
              />Empresas por validar</NavLink>
            </Item>
            {/* <Item>
              <IoBusiness
                style={{
                  marginRight: ".3rem",
                  fontSize: "1.3rem",
                  color: "#8A9FA9",
                }}
              />{" "}
              <NavLink to="validar-empresa">Vacantes por validar</NavLink>
            </Item> */}
          </NavList>
        </SideBar>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};

export default LayoutAdmin;

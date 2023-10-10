import React from "react";
import { useAuth } from "context/AuthContext";
import { useViewport } from "hooks/useViewport";
import CustomAvatar from "components/Avatar";
import {
  Content,
  ContainerText,
  LayoutHeroStyled,
  Photo,
  WrapperPhoto,
  WrapperAvatar,
} from "./styled-components/LayoutHeroStyled";

const LayoutHero = ({ children, src_photo, alt_photo }) => {
  const [viewport] = useViewport();
  const { token } = useAuth();
  let username = token?.user?.first_name;

  if (token !== null) {
    return (
      <LayoutHeroStyled>
        {viewport.device === "MOBILE" ? (
          <WrapperAvatar>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fff",
              }}
            >
              <span
                style={{
                  color: "#ccc",
                  textTransform: "capitalize",
                  fontSize: ".88rem",
                }}
              >
                Hola {username ? username : "Anonimo"} 👋,
              </span>
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                Encuentra el trabajo de tus{" "}
                <span style={{ color: "#1c8efb" }}>sueños</span>
              </h2>
            </div>
            <CustomAvatar />
          </WrapperAvatar>
        ) : (
          <WrapperPhoto>
            <Photo src={src_photo} alt={alt_photo}></Photo>
          </WrapperPhoto>
        )}
        <Content>{children}</Content>
      </LayoutHeroStyled>
    );
  }

  return (
    <LayoutHeroStyled>
      {viewport.device === "MOBILE" ? (
        <WrapperAvatar>
          <div
            style={{
              width: "100%",
            }}
          >
            <h2 style={{
              fontSize: '1.7rem',
              fontFamily: 'var(--font-family-mobile-M)'
            }}>
              En cuentra el <ContainerText>trabajo de tus sueños</ContainerText>
            </h2>
          </div>
        </WrapperAvatar>
      ) : (
        <WrapperPhoto>
          <Photo src={src_photo} alt={alt_photo}></Photo>
        </WrapperPhoto>
      )}
      <Content>{children}</Content>
    </LayoutHeroStyled>
  );
};

export default LayoutHero;

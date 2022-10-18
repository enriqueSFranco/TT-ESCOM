import React from "react";
import { useFetch } from "hooks";
import Chip from "components/Chip/Chip";
import CustomAvatar from "components/Avatar/Avatar";
import LinkButton from "components/Button/LinkButton";
import { List, ListItem } from "styled-components/CommonStyles";
import {
  CardUser,
  Username,
  H3,
  WrapperList,
  Speciality,
} from "./styled-components/CardCandidateStyled";

const { REACT_APP_URL_CANDIDATE_LANGUAGE, REACT_APP_URL_CANDIDATE_SKILLS } =
  process.env;

const CardCandidate = ({ user, idUser }) => {
  const { data } = useFetch(`${REACT_APP_URL_CANDIDATE_SKILLS}${idUser}/`);
  const { data: languagesCandidate } = useFetch(
    `${REACT_APP_URL_CANDIDATE_LANGUAGE}${idUser}/`
  );

  if (!user) return null;

  return (
    <CardUser>
      <div
        style={{
          width: "200px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          textAlign: "center",
        }}
      >
        <CustomAvatar
          picture={user.t100_profile_picture}
          username={user.t100_name}
          width="100"
          height="100"
        />
        <Username>{user.t100_name}</Username>
      </div>
      <div style={{ width: "100%" }}>
        <Speciality>{user.t100_interest_job}</Speciality>
        <div style={{ marginTop: "1rem" }}>
          <H3>Habilidades</H3>
          <WrapperList>
            <List>
              {data &&
                data?.map((skill) => (
                  <ListItem key={crypto.randomUUID()}>
                    <Chip
                      label={skill.c116_id_skill.c116_description}
                      bg="#eee"
                    />
                  </ListItem>
                ))}
            </List>
          </WrapperList>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <H3>Idiomas</H3>
          <List>
            {languagesCandidate &&
              languagesCandidate?.map((language) => (
                <ListItem>
                  <Chip
                    label={language?.c111_id_language?.c111_description}
                    bg="#eee"
                  />
                </ListItem>
              ))}
          </List>
        </div>
        <div>
          <LinkButton to="/perfil-del-candidatop" text="Ver perfil" />
        </div>
      </div>
    </CardUser>
  );
};

export default CardCandidate;

import React from "react";
import { useFetch } from "hooks";
import Chip from "components/Chip/Chip";
import CustomAvatar from "components/Avatar/Avatar";
import LinkButton from "components/Button/LinkButton";
import { List, ListItem } from "styled-components/CommonStyles";
import { CardUser,  Username, H3, WrapperList, Speciality } from "./styled-components/CardCandidateStyled";

const CardCandidate = ({ user, idUser }) => {
  const { data } = useFetch(`${process.env.REACT_APP_URL_CANDIDATE_SKILLS}${idUser}`)
  
  if (!user) return null;

  return (
    <CardUser>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        }}
      >
        <CustomAvatar picture={user.t100_profile_picture} username={user.t100_name} width="100" height="100" />
      </div>
      <div>
        <Username>{user.t100_name}</Username>
        <Speciality>{user.t100_speciality}</Speciality>
        <H3>Habilidades</H3>
        <WrapperList>
          <List>
            {
              data && data?.map(skill => (
                <ListItem key={crypto.randomUUID()}>
                  <Chip label={skill.c116_id_skill.c116_description} bg="#eee" />
                </ListItem>
              ))
            }
          </List>
        </WrapperList>
        <H3>Idiomas</H3>
        <div>
          <List>
            <ListItem>
              <Chip label="Ingles" bg="#eee" />
            </ListItem>
            <ListItem>
              <Chip label="Aleman" bg="#eee" />
            </ListItem>
          </List>
        </div>
        <div>
          <LinkButton to="/" text="Ver perfil" />
        </div>
      </div>
    </CardUser>
  );
};

export default CardCandidate;

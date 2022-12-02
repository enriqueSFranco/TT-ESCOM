import React from "react";
import { useFetch } from "hooks";
import Chip from "components/Chip/Chip";
import { List, ListItem } from "styled-components/CommonStyles";

import {
  Button,
  DescriptionJob,
  Header,
  TextH2,
  WrapperRequitements,
  WrapperMoreInfo
} from "../styled-components/DetailsJobStyled";

function createMarkup(description) {
  return { __html: description };
}

const DetailsJob = ({
  logo,
  nameCompany,
  nameJob,
  descriptionJob,
  street,
  publishDate,
  typeContract,
  exp,
  profile,
  token,
  idJob,
  userID,
  handleApplyJob,
}) => {
  const { data } = useFetch(
    `${process.env.REACT_APP_URL_VACANT_REQUIREMENTS}${idJob}/`
  );

  if (!data) return null;

  console.log(data)

  return (
    <>
      <Header>
        <figure
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <img
            src={logo}
            alt={nameCompany}
            width="100px"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
            }}
          />
          <figcaption
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: ".5rem",
            }}
          >
            <span style={{color: '#fff', fontSize: '1.9em', fontWeight: '700', fontFamily: 'sans-serif'}}>{nameCompany}</span>
            <span style={{color: '#fff', fontSize: '1.5em', fontWeight: '700', fontFamily: 'sans-serif'}}>{nameJob}</span>
          </figcaption>
        </figure>
      </Header>
      <WrapperRequitements>
        {!data.length ? null : (
          <>
            <div>
              <TextH2>Habilidades requeridas</TextH2>
              <List>
                {data
                  .filter((el) => {
                    if (el.t211_mandatory) return el.c116_description;
                    return null;
                  })
                  .map((el, index) => (
                    <ListItem key={`skill-id-${el.t211_id_requirement}`}>
                      <Chip
                        label={`${el.t211_required_level}: ${el.c116_description}`}
                        bg={`var(--${el.t211_required_level})`}
                        color={`var(--color-level_${index})`}
                      />
                    </ListItem>
                  ))}
              </List>
            </div>
            <div>
              <TextH2>Habilidades opcionales</TextH2>
              <List>
                {data
                  .filter((el) => {
                    if (!el.t211_mandatory) return el.c116_description;
                    return null;
                  })
                  .map((el, index) => (
                    <ListItem key={`skill-id-${el.t211_id_requirement}`}>
                      <Chip
                        label={`${el.t211_required_level}: ${el.c116_description}`}
                        bg={`var(--${el.t211_required_level})`}
                        color={`var(--color-level_${index})`}
                      />
                    </ListItem>
                  ))}
              </List>
            </div>
          </>
        )}
      </WrapperRequitements>
      <WrapperMoreInfo>
        <span>Ubicacion: {street}</span>
        <span>Perfil: {profile}</span>
        <span>Tipo de contratacion: {typeContract}</span>
        <span>Experiencia: {exp}</span>
      </WrapperMoreInfo>
      <DescriptionJob dangerouslySetInnerHTML={createMarkup(descriptionJob)} />
      <div
        style={{
          backgroundColor: "#fff",
          display: "grid",
          placeContent: "center",
        }}
      >
        {token ? (
          <Button onClick={() => handleApplyJob(idJob, userID)}>
            Postularme
          </Button>
        ) : (
          <Button onClick={() => window.location.replace("/registro-alumno")}>
            Postularme
          </Button>
        )}
      </div>
    </>
  );
};

export default DetailsJob;

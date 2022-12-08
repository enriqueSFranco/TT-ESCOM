import React, { useEffect, useRef } from "react";
import { useFetch, useScroll } from "hooks";
import Chip from "components/Chip/Chip";
import Button from "components/Button/Button";
import { List, ListItem } from "styled-components/CommonStyles";
import {
  DescriptionJob,
  Header,
  TextH2,
  WrapperRequitements,
  WrapperMoreInfo,
  WrapperSummaryJob
} from "../styled-components/DetailsJobStyled";

function createMarkup(description) {
  return { __html: description };
}

const DetailsJob = ({ vacantId, token, idJob, userID, handleApplyJob }) => {
  const elementRef = useRef(null)
  const { data } = useFetch(
    `${process.env.REACT_APP_URL_VACANT_REQUIREMENTS}${vacantId}`
  );

  const { data: summaryJob } = useFetch(
    `${process.env.REACT_APP_URL_VACANTS}${vacantId}`
  );

  useEffect(() => {
    
  }, [])

  if (!data || !summaryJob) return null;

  return (
    <WrapperSummaryJob ref={elementRef}>
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
            src={null}
            alt={""}
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
            <span
              style={{
                color: "#fff",
                fontSize: "1.9em",
                fontWeight: "700",
                fontFamily: "sans-serif",
              }}
            >
              {summaryJob[0]?.t300_id_company?.t300_name}
            </span>
            <span
              style={{
                color: "#fff",
                fontSize: "1.5em",
                fontWeight: "700",
                fontFamily: "sans-serif",
              }}
            >
              {summaryJob[0]?.t200_job}
            </span>
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
        <span>
          Ubicacion:{" "}
          {`${summaryJob[0]?.t200_street}, ${
            summaryJob[0]?.t200_interior_number &&
            summaryJob[0]?.t200_interior_number
          }`}
        </span>
        <span>Perfil: {summaryJob[0]?.c206_id_profile?.c206_description}</span>
        <span>
          Tipo de contratacion:{" "}
          {summaryJob[0]?.c208_id_contract.c208_description}
        </span>
        <span>
          Experiencia: {summaryJob[0]?.c207_id_experience?.c207_description}
        </span>
      </WrapperMoreInfo>
      <DescriptionJob
        dangerouslySetInnerHTML={createMarkup(summaryJob[0]?.t200_description)}
      />
      <div
        style={{
          width: '100%',
          backgroundColor: "#fff",
          position: 'absolute',
          bottom: '0',
          display: 'grid',
          placeContent: 'center',
          padding: '1rem 0',
          borderRadius: '0 0 1rem 1rem'
        }}
      >
        {token ? (
          <Button
            text="Postularme a esta vacante"
            onClick={() => handleApplyJob(idJob, userID)}
            bgColor="#2172f2"
            color="#fff"
            width="20"
            height="3"
          />
        ) : (
          <Button
            text="Postularme a esta vacante"
            onClick={() => window.location.replace("/registro-alumno")}
            bgColor="#2172f2"
            color="#fff"
            width="20"
            height="3"
          />
          
        )}
      </div>
    </WrapperSummaryJob>
  );
};

export default DetailsJob;

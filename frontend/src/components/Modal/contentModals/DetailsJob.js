import React from "react";
import { Button, DescriptionJob } from "../styled-components/DetailsJobStyled";

function createMarkup(description) {
  return { __html: description };
}

const DetailsJob = ({
  logo,
  nameCompany,
  nameJob,
  descriptionJob,
  token,
  idJob,
  userID,
  handleApplyJob,
}) => {

  return (
    <>
      <div>
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
            width="300px"
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
            <span>{nameCompany}</span>
            <span>{nameJob}</span>
          </figcaption>
        </figure>
      </div>
      {/* <List>
        <ListItem>
          <Chip />
        </ListItem>
      </List> */}
      <DescriptionJob dangerouslySetInnerHTML={createMarkup(descriptionJob)}></DescriptionJob>
      {token ? (
        <Button onClick={() => handleApplyJob(idJob, userID)}>Postularme</Button>
      ) : (
        <Button onClick={() => window.location.replace("/registro-alumno")}>
          Postularme
        </Button>
      )}
    </>
  );
};

export default DetailsJob;

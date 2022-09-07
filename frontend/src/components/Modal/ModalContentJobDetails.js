import React from "react";
import Chip from "components/Chip/Chip";
import {
  Button,
  Description,
  JobSummary,
  InfoTopJob,
  LocationJob,
  LogoCompany,
  List,
  ListItem,
  Salary,
  TitleJob,
} from "./styled-components/ModalContentStyled";
import logoCompany from "images/google.png";

const ModalContentJobDetails = ({ description, handleApplyJob }) => {
  function createMarkup(data) {
    return { __html: data };
  }

  return (
    <>
      <InfoTopJob>
        <LogoCompany src={logoCompany} alt="google" />
        <JobSummary>
          <TitleJob>Title job</TitleJob>
          <LocationJob>ubicacion de la empresa</LocationJob>
          <Salary>30000/mes</Salary>
          <List>
            <ListItem>
              <Chip label="full-time" bg="#ccc" />
            </ListItem>
            <ListItem>
              <Chip label="3-7 years" bg="#ccc" />
            </ListItem>
          </List>
        </JobSummary>
      </InfoTopJob>
      <Description dangerouslySetInnerHTML={createMarkup(description)}></Description>
      <Button onClick={handleApplyJob}>Postularme</Button>
    </>
  );
};

export default ModalContentJobDetails;

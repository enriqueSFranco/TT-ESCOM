import React from "react";
import { useAuth } from "context/AuthContext";
import Chip from "components/Chip/Chip";
import { numberFormat } from "utils/numberFormat";
import { openModalDetailsJob } from "utils/openModal";
import { formatDate } from "utils/formatDate";
import { IoBusiness } from "react-icons/io5";
import {
  Actions,
  Button,
  CardBody,
  CardHeader,
  CardContent,
  Description,
  Location,
  PublicationDate,
  Tags,
  TagsItem,
  TitleJob,
} from "../styled-components/CardJobStyled";

const CardJob = ({ job }) => {
  const { token } = useAuth();

  let userID = token?.user?.id
  let idJob = job?.t200_id_vacant;
  let description = job?.t200_description
  let titleJob = job?.t200_job

  const tags = [
    
    { label: `Exp: ${job?.c207_id_experience?.c207_description}` },
    { label: job?.t200_max_salary ? `${numberFormat(job?.t200_max_salary).replace('.00', '')}` : '-'},
    { label: "Midl lvl" },
  ];
  
  
  function createMarkup() {
    return {__html: job.t200_description}
  }
  
  const handleOpenModal = () => openModalDetailsJob(description, idJob, userID, titleJob, token)
  
  if (!job) return null;
  
  return (
    <CardBody>
      <CardHeader>
        <div>
          {job?.t300_id_company?.t300_logo ? (
            <img
              src={job?.t300_id_company?.t300_logo}
              alt={job?.t300_id_company?.t300_name}
            />
          ) : (
            <IoBusiness style={{ color: "darkgray", fontSize: "3.5rem" }} />
          )}
        </div>
        <PublicationDate>{!job?.t200_publish_date ? 'sin fecha' : formatDate(job?.t200_publish_date)}</PublicationDate>
      </CardHeader>
      <CardContent>
        <TitleJob>{job.t200_job}</TitleJob>
        <Tags>
          {tags.map((tag, index) => (
            <TagsItem key={crypto.randomUUID()} index={index}>
              <Chip color={`var(--color_${(index + 1)})`} label={tag.label} />
            </TagsItem>
          ))}
        </Tags>
        <Location>Cupertino, California</Location>
        <Description dangerouslySetInnerHTML={createMarkup()} />
        <Actions>
          <Button onClick={handleOpenModal}>Ver mas</Button>
        </Actions>
      </CardContent>
    </CardBody>
  );
};

export default CardJob;

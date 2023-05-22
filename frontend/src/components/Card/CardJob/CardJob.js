import React from "react";
import { useTimeAgo } from "hooks";
import Chip from "components/Chip/Chip";
import { parseThousands } from "utils";
import { IoBusiness } from "react-icons/io5";
import { BsArrowRightShort } from "react-icons/bs";
import {
  Actions,
  Button,
  CardImage,
  CardBody,
  CardHeader,
  CardContent,
  CardBorder,
  Description,
  Location,
  PublicationDate,
  Tags,
  TagsItem,
  TitleJob,
} from "../styled-components/CardJobStyled";

const now = Date.now();

const CardJob = ({
  job,
  vacantId,
  isVacantRecommended,
  time,
  cards,
  onClick,
}) => {
  const timeago = useTimeAgo(time);
  const elapsed = Math.abs(Math.round((time - now) / 1000 / 60));

  const toggleActiveStyled = () => {
    return vacantId === cards.activeCard ? "active" : undefined;
  };

  const tags = [
    {
      label: isVacantRecommended
        ? `Exp: ${job?.t200_id_vacant?.c207_id_experience?.c207_description}`
        : `Exp: ${job?.c207_id_experience?.c207_description}`,
    },
    {
      label: isVacantRecommended
        ? job?.t200_id_vacant?.t200_max_salary
          ? `Suledo mensual: $${parseThousands(
              job?.t200_id_vacant?.t200_max_salary
            )}-${parseThousands(job?.t200_id_vacant?.t200_max_salary)}`
          : "Sueldo no especificado"
        : job?.t200_max_salary
        ? `Sueldo mensual: $${parseThousands(
            job?.t200_min_salary
          )}-${parseThousands(job?.t200_max_salary)}`
        : "Sueldo no especificado",
    },
    {
      label: isVacantRecommended
        ? `Perfil academico: ${job?.t200_id_vacant?.c206_id_profile?.c206_description}`
        : `Modalidad: ${
            job?.c214_id_modality?.c214_description
              ? job?.c214_id_modality?.c214_description
              : "No especificada"
          }`,
    },
  ];

  function createMarkup() {
    return { __html: isVacantRecommended ? job.t200_id_vacant?.t200_description : job.t200_description };
  }

  return (
    <CardBody time={elapsed} isActive={toggleActiveStyled(vacantId)}>
      <CardBorder>
        <CardHeader>
          <CardImage>
            {job?.t300_id_company?.t300_logo ? (
              <img
                src={job?.t300_id_company?.t300_logo}
                alt={job?.greent300_id_company?.t300_name}
              />
            ) : (
              <IoBusiness style={{ color: "darkgray", fontSize: "3.5rem" }} />
            )}
          </CardImage>
          
          <PublicationDate time={elapsed}>
            Publicada {timeago}
          </PublicationDate>
        </CardHeader>
        <CardContent>
          {isVacantRecommended ? (
            <TitleJob>{job.t200_id_vacant?.t200_job}</TitleJob>
          ) : (
            <TitleJob time={elapsed}>{job.t200_job}</TitleJob>
          )}

          <Tags>
            {tags.map((tag, index) => (
              <TagsItem key={`tag-id-${index}`}>
                <Chip
                  label={tag.label}
                  outline={`1px solid #ccc`}
                  bg="#fff"
                  color="#6D6D6D"
                />
              </TagsItem>
            ))}
          </Tags>
          <Location>{`${job?.t200_id_vacant?.t200_street}`}</Location>

          {isVacantRecommended ? (
            <Location>{`${job?.t200_id_vacant?.t200_street}`}</Location>
          ) : (
            <Location>{`${job?.c222_id_locality?.c222_state}, ${job?.c222_id_locality?.c222_municipality}, ${job?.c222_id_locality?.c222_locality}`}</Location>
          )}

          <Description dangerouslySetInnerHTML={createMarkup()} />
          <Actions>
            <Button onClick={onClick} bgColor="#2172f2" color="#fff" >
              Ver mas <BsArrowRightShort style={{ fontSize: "1.5rem" }} />
            </Button>
          </Actions>
        </CardContent>
      </CardBorder>
    </CardBody>
  );
};

export default CardJob;

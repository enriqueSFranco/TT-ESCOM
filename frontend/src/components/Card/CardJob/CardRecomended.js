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


const now = Date.now()

const CardRecommendedJob = ({ job, vacantId, time, cards, onClick }) => {
  // const { timeago } = useTimeAgo(time);
  // const elapsed = Math.abs(Math.round(((time - now) / 1000)/60));

  const toggleActiveStyled = () => {
    return vacantId === cards.activeCard ? "active" : undefined;
  };

  const tags = [
    {
      label: `Exp: ${job?.t200_id_vacant?.c207_id_experience?.c207_description}`,
    },
    {
      label: job?.t200_id_vacant?.t200_max_salary
        ? `Suledo mensual: $${parseThousands(job?.t200_id_vacant?.t200_max_salary)}-${parseThousands(
          job?.t200_id_vacant?.t200_max_salary
          )}`
        : "Sueldo no especificado",
    },
    {
      label: `Perfil academico: ${job?.t200_id_vacant?.c206_id_profile?.c206_description}`,
    },
  ];

  function createMarkup() {
    return { __html: job.t200_id_vacant?.t200_description };
  }

  return (
    <CardBody isActive={toggleActiveStyled(vacantId)}>
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
          {/* <PublicationDate time={elapsed}>
            Publicada {timeago}
          </PublicationDate> */}
        </CardHeader>
        <CardContent>
          <TitleJob>{job.t200_id_vacant?.t200_job}</TitleJob>
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
          <Description dangerouslySetInnerHTML={createMarkup()} />
          <Actions>
            <Button onClick={onClick} bgColor="#2172f2" color="#fff">
              Ver mas <BsArrowRightShort style={{ fontSize: "1.5rem" }} />
            </Button>
          </Actions>
        </CardContent>
      </CardBorder>
    </CardBody>
  );
};

export default CardRecommendedJob;

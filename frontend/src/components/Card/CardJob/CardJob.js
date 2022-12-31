import React from "react";
import moment from "moment";
import "moment/locale/es-mx";
import Chip from "components/Chip/Chip";
import { parseThousands } from "utils";
import { IoBusiness } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaBrain } from "react-icons/fa";
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

const CardJob = ({ job, vacantId, cards, onClick }) => {
  const toggleActiveStyled = (index) => {
    console.log(vacantId, cards.activeCard)
    return vacantId === cards.activeCard ? "active" : undefined
  }

  const tags = [
    {
      label: job?.c207_id_experience?.c207_description,
      icon: <FaBrain style={{ fontSize: "1.1rem" }} />,
    },
    {
      label: job?.t200_max_salary
        ? `$${parseThousands(job?.t200_min_salary)}-${parseThousands(job?.t200_max_salary)}`
        : "Sueldo no especificado",
    },
    {
      label: job?.c214_id_modality?.c214_description,
      icon: <HiLocationMarker style={{ fontSize: "1.1rem" }} />,
    },
  ];

  function createMarkup() {
    return { __html: job.t200_description };
  }

  const currentTime = new Date(job?.t200_publish_date).getUTCDate()

  return (
    <CardBody close={currentTime} isActive={toggleActiveStyled(vacantId)}>
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
          <PublicationDate close={currentTime}>
            {job?.t200_publish_date
              ? currentTime >= 30
                ? "Vacante cerrada"
                : `Publicada ${moment(job?.t200_publish_date).fromNow()}`
              : "Sin fecha"}
          </PublicationDate>
        </CardHeader>
        <CardContent>
          <TitleJob close={currentTime}>{job.t200_job}</TitleJob>
          <Tags>
            {tags.map((tag, index) => (
              <TagsItem key={`tag-id-${index}`}>
                <Chip
                  label={tag.label}
                  outline={`1px solid #ccc`}
                  bg="#fff"
                  color="#6D6D6D"
                  icon={tag.icon}
                />
              </TagsItem>
            ))}
          </Tags>
          <Location>{`${job?.c222_id_locality?.c222_state}, ${job?.c222_id_locality?.c222_municipality}, ${job?.c222_id_locality?.c222_locality}`}</Location>
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

export default CardJob;

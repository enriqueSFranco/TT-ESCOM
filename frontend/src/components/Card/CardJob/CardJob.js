import React from "react";
import Chip from "components/Chip/Chip";
import { numberFormat } from "utils/numberFormat";
import { formatDate } from "utils/formatDate";
import * as GiIcon from "react-icons/gi";
import * as BsIcon from "react-icons/bs";
import * as MdIcon from "react-icons/md";
import { IoBusiness } from "react-icons/io5"
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

const CardJob = () => {
  // if (!job) return null;

  const tags = [
    {label: 'Full Time'},
    {label: 'Flex, sched'},
    {label: 'Midl lvl'},
  ]

  return (
    <CardBody>
      <CardHeader>
        <div>
          <IoBusiness style={{color: 'darkgray', fontSize: '3.5rem'}}/>
          {/* {job?.t300_id_company?.t300_logo ? (
            <img
              src={job?.t300_id_company?.t300_logo}
              alt={job?.t300_id_company?.t300_name}
            />
          ) : (
            <IoIcon.IoMdBusiness className={styles.notLogo} />
          )} */}
        </div>
        <PublicationDate>1 Agosto</PublicationDate>
        {/* <h3 className={`${styles.nameCompany}`}>{job?.t200_job}</h3> */}
      </CardHeader>
      <CardContent>
        <TitleJob>UX designer</TitleJob>
        <Tags>
          {
            tags.map((tag, index) => (
              <TagsItem key={crypto.randomUUID()} index={index}>
                <Chip label={tag.label} />
              </TagsItem>
            ))
          }
          {/* <TagsItem>
            <Chip label="Flex, sched" />
          </TagsItem>
          <TagsItem>
            <Chip label="Midl lvl" />
          </TagsItem> */}
        </Tags>
        <Location>Cupertino, California</Location>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi, minima unde perspiciatis qui assumenda aperiam nisi itaque numquam deleniti, cupiditate quis odit illum exercitationem et commodi perferendis corrupti nihil.
        </Description>
        <Actions>
          <Button>View More</Button>
        </Actions>
      </CardContent>
      {/* <div>
        <div className={styles.summary}>
          <p className={`${styles.lineClamp}`}>{job?.t200_description}</p>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.wrapperTags}>
            <Chip
              label={`Modalidad: ${
                job?.t200_home_ofice ? "Remoto" : "Presencial"
              }`}
              size="small"
              icon={<MdIcon.MdBusinessCenter style={{ color: "#78909c" }} />}
            />

            <Chip
              label={`Sueldo: ${numberFormat(job?.t200_min_salary).slice(
                4
              )}MXN a ${numberFormat(job?.t200_max_salary).slice(4)}MXN al mes`}
              size="small"
              icon={<GiIcon.GiMoneyStack style={{ color: "green" }} />}
            />

            <Chip
              label={`Fecha de publicacion: ${formatDate(
                job?.t200_publish_date
              )}`}
              size="small"
              icon={<BsIcon.BsCalendarDate style={{ color: "red" }} />}
            />
          </div>
        </div>
      </div> */}
    </CardBody>
  );
};

export default CardJob;

import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "context/AuthContext";
import { useModal } from "hooks";
import { applyJob } from "services";
import Chip from "components/Chip/Chip";
import ModalPortal from "components/Modal/ModalPortal";
import DetailsJob from "components/Modal/contentModals/DetailsJob";
import { numberFormat } from "utils/numberFormat";
import { formatDate } from "utils/formatDate";
import { IoBusiness } from "react-icons/io5";
import { MdAttachMoney } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import { FaBrain } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import {
  Actions,
  Button,
  CardImage,
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
  const [isOpen, openModal, closeModal] = useModal(false)

  let userID = token?.user?.id
  let idJob = job?.t200_id_vacant;

  const tags = [
    
    { label: job?.c207_id_experience?.c207_description, icon: <FaBrain style={{fontSize: '1.1rem'}} />},
    { label: job?.t200_max_salary ? `${numberFormat(job?.t200_max_salary).replace('.00', '')}` : '-', icon: <MdAttachMoney style={{fontSize: '1.1rem'}} />},
    { label: job?.c214_id_modality?.c214_description, icon: <HiLocationMarker style={{fontSize: '1.1rem'}} /> },
  ];
  
  const handleApplyJob = async (idJob, userID) => {
    let now = new Date();
    try {
      const response = await applyJob({
        t200_id_vacant: idJob,
        t100_id_student: userID,
        c205_id_application_state: 1,
        t201_date_application:
          now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
      });
      const { data } = response
      toast.success(data?.message)
    } catch (error) {
      toast.error(error.message);
    }
  };
  
  function createMarkup() {
    return {__html: job.t200_description}
  }
  
  if (!job) return null;

  // console.log(job)

  return (
    <>
      <CardBody data-close-date={`${job?.t200_close_date}`}>
        <CardHeader>
          <CardImage>
            {job?.t300_id_company?.t300_logo ? (
              <img
                src={job?.t300_id_company?.t300_logo}
                alt={job?.t300_id_company?.t300_name}
              />
            ) : (
              <IoBusiness style={{ color: "darkgray", fontSize: "3.5rem" }} />
            )}
          </CardImage>
          <PublicationDate>{!job?.t200_publish_date ? 'sin fecha' : formatDate(job?.t200_publish_date)}</PublicationDate>
        </CardHeader>
        <CardContent>
          <TitleJob>{job.t200_job}</TitleJob>
          <Tags>
            {tags.map((tag, index) => (
              <TagsItem key={crypto.randomUUID()} index={index}>
                <Chip color={`var(--color_${(index + 1)})`} label={tag.label} icon={tag.icon} />
              </TagsItem>
            ))}
          </Tags>
          <Location>{`${job?.c222_id_locality?.c222_state}, ${job?.c222_id_locality?.c222_municipality}, ${job?.c222_id_locality?.c222_locality}`}</Location>
          <Description dangerouslySetInnerHTML={createMarkup()} />
          <Actions>
            <Button onClick={openModal}>Ver mas <BsArrowRightShort style={{fontSize: '1.5rem'}} /></Button>
          </Actions>
        </CardContent>
      </CardBody>
      <ModalPortal isOpen={isOpen} closeModal={closeModal}>
        <DetailsJob 
          nameCompany={job?.t300_id_company?.t300_name}
          nameJob={job.t200_job}
          logo={job?.t300_id_company?.t300_logo}
          descriptionJob={job.t200_description}
          street={job?.t200_street}
          publishDate={job?.t200_publish_date}
          typeContract={job?.c208_id_contract?.c208_description}
          exp={job?.c207_id_experience?.c207_description}
          profile={job?.c206_id_profile?.c206_description}
          idJob={idJob}
          userID={userID}
          handleApplyJob={handleApplyJob}
          token={token}
        />
      </ModalPortal>
    </>
  );
};

export default CardJob;

import React from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { useFetch, useModal, useGetObservationVacant } from "hooks";
import { USERS } from "types";
import ModalPortal from "components/Modal/ModalPortal";
import Loader from "components/Loader/Loader";
import Chip from "components/Chip/Chip";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FcCalendar } from "react-icons/fc";
import { FaBrain } from "react-icons/fa";
import { BiLike } from 'react-icons/bi'
import { IoMdAddCircle } from 'react-icons/io'
import {
  WrapperLoader,
  WraperCard,
  WrapperActions,
  WrapperComment,
  Description,
  ContentDescription,
  HeaderInfo,
  ListItems,
  Title,
} from "./styled-components/CardDetailsVacantRecruiterStyled";
import Comment from "components/Comment/Comment";
import Tooltip from "components/Tooltip/Tooltip";
import Button from "components/Button/Button";
import PostComment from "components/Modal/contentModals/PostComment";

const CardDetailsVacantRecruiter = ({ height }) => {
  const [isOpen, openModal, closeModal] = useModal(false)
  const { t200_id_vacant } = useParams();
  const observation = useGetObservationVacant({vacantId: t200_id_vacant})
  const { token } = useAuth();
  const { data, error, loading } = useFetch(
    `${process.env.REACT_APP_URL_VACANTS}${t200_id_vacant}/`
  );

  const handlePublish = () => {};

  if (!data || !token || !observation) return null;

  return (
    <>
      {loading ? (
        <WrapperLoader>
          <Loader />
        </WrapperLoader>
      ) : (
        <>
          <WraperCard>
            <Title>{data[0]?.t200_job}</Title>
            <HeaderInfo>
              <ListItems>
                <li>
                  <Chip
                    label={`Modalidad: ${data[0]?.c214_id_modality?.c214_description}`}
                    bg="var(--bg-color_3)"
                    color="var(--color_3)"
                    icon={
                      <HiOutlineLocationMarker style={{ fontSize: "1.2rem" }} />
                    }
                  />
                </li>
                <li>
                  <Chip
                    label={`Experiencia: ${data[0]?.c207_id_experience?.c207_description}`}
                    bg="var(--bg-color_1)"
                    color="var(--color_1)"
                    icon={<FaBrain style={{ fontSize: "1.2rem" }} />}
                  />
                </li>
                <li>
                  <Chip
                    label={`Fecha de cierre: ${data[0]?.t200_close_date}`}
                    bg="#F78181"
                    color="#DF0101"
                    icon={<FcCalendar style={{ fontSize: "1.2rem" }} />}
                  />
                </li>
              </ListItems>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{ fontWeight: "700" }}
                >{`Perfil del candidato: ${data[0]?.c206_id_profile?.c206_description}`}</span>
                <span
                  style={{ fontWeight: "700" }}
                >{`Contratacion: ${data[0]?.c208_id_contract?.c208_description}`}</span>
              </div>
            </HeaderInfo>
            <Description height={height}>
              <ContentDescription>
                {data[0]?.t200_description}
              </ContentDescription>
              {token.user.user_type === USERS.recruiter ? (
                <WrapperActions>
                  <button
                    className={`button_admin ${data[0]?.c204_id_vacant_status?.c204_id_status === 1 ? 'disabled' : 'publish'}`}
                    onClick={handlePublish}
                    disabled={data[0]?.c204_id_vacant_status?.c204_id_status === 1 ? true : false}
                  >
                    Enviar a revision
                  </button>
                  {/* <button className="button_admin reject" onClick={handleComment}>Agregar observacion</button> */}
                </WrapperActions>
              ) : (
                <WrapperActions>
                  <button
                    className="button_admin publish"
                    onClick={handlePublish}
                  >
                    Publicar vacante
                    <BiLike style={{color: '#fff', fontSize: '1.3rem'}} />
                  </button>
                </WrapperActions>
              )}
            </Description>
          </WraperCard>
          {token.user.user_type === USERS.recruiter ? (
            <WrapperComment>
              <Title>Observaciones de la Vacante {data[0]?.t200_job}</Title>
              <ul>
                {
                  observation?.map(el => (
                    // console.log(el)
                    <li key={`comment-id-${el?.t223_id_comment}`}>
                      <Comment comment={el?.t223_comment} date={el?.t223_sent_date}  />
                    </li>
                  ))
                }
              </ul>
            </WrapperComment>
          ) : (
            // TODO: Pasar a un componente independiente
            <WrapperComment>
              <header>
                <Title>Observaciones de la Vacante {data[0]?.t200_job}</Title>
                <nav
                  style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'flex-end'
                  }}
                >
                  <Tooltip title='Agregar una observacion'>
                    <Button onClick={openModal} bgColor='transparent' icon={<IoMdAddCircle style={{fontSize: '1.7rem', color: '#1C8EFB'}} />} />
                  </Tooltip>
                </nav>
              </header>

            </WrapperComment>
          )}
        </>
      )}
      <ModalPortal isOpen={isOpen} closeModal={closeModal} minWidth="700px" minHeight="470px">
        <PostComment />
      </ModalPortal>
    </>
  );
};

export default CardDetailsVacantRecruiter;

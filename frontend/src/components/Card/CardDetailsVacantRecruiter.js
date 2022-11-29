import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import {
  useFetch,
  useModal,
  useGetObservationVacant,
  useGetObservationVacantManager,
} from "hooks";
import { stateVacant } from "services";
import { USERS } from "types";
import ModalPortal from "components/Modal/ModalPortal";
import Loader from "components/Loader/Loader";
import Chip from "components/Chip/Chip";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FcCalendar } from "react-icons/fc";
import { FaBrain } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Comment from "components/Comment/Comment";
import Tooltip from "components/Tooltip/Tooltip";
import Button from "components/Button/Button";
import PostComment from "components/Modal/contentModals/PostComment";
import NoComment from "./CardNoComment";
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

function createMarkup(description) {
  return { __html: description };
}


const CardDetailsVacantRecruiter = ({ height }) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const { t200_id_vacant } = useParams();
  const observation = useGetObservationVacant({ vacantId: t200_id_vacant });
  const observationManager = useGetObservationVacantManager({
    vacantId: t200_id_vacant,
  });
  const { token } = useAuth();
  const { data, error, loading } = useFetch(
    `${process.env.REACT_APP_URL_VACANTS}${t200_id_vacant}/`
  );

  const handlePublish = (e) => {
    e.preventDefault();
    stateVacant(t200_id_vacant, {
      t400_id_admin: 1,
      c204_id_vacant_status: 2,
      activate: true,
    })
      .then((response) => toast.success(response.message))
      .catch((error) => toast.error(error.message));
  };
  const handleSendReview = (e) => {
    e.preventDefault();
    console.log("enviar a revision");
  };

  const handleReject = (e) => {
    e.preventDefault();
    stateVacant(t200_id_vacant, {
      t400_id_admin: 1,
      c204_id_vacant_status: 4,
      activate: "",
    })
      .then((response) => toast.error(response.message))
      .catch((error) => toast.error(error.message));
  };

  if (!data || !token || !observation || !observationManager) return null;

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
                    label={`${data[0]?.c214_id_modality?.c214_description}`}
                    bg="var(--bg-color_3)"
                    color="var(--color_3)"
                    icon={
                      <HiOutlineLocationMarker style={{ fontSize: "1.2rem" }} />
                    }
                  />
                </li>
                <li>
                  <Chip
                    label={`${data[0]?.c207_id_experience?.c207_description}`}
                    bg="var(--bg-color_1)"
                    color="var(--color_1)"
                    icon={<FaBrain style={{ fontSize: "1.2rem" }} />}
                  />
                </li>
                <li>
                  <Chip
                    label={`${data[0]?.t200_close_date}`}
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
            <Description>
              <ContentDescription
                dangerouslySetInnerHTML={createMarkup(
                  data[0]?.t200_description
                )}
              />
              {token.user.user_type === USERS.recruiter ? (
                <WrapperActions>
                  <button
                    className={`button_admin ${
                      data[0]?.c204_id_vacant_status?.c204_id_status === 1
                        ? "disabled"
                        : "publish"
                    }`}
                    onClick={handleSendReview}
                    disabled={
                      data[0]?.c204_id_vacant_status?.c204_id_status === 1
                        ? true
                        : false
                    }
                  >
                    Enviar a revision
                  </button>
                </WrapperActions>
              ) : (
                <WrapperActions>
                  <button
                    className="button_admin publish"
                    onClick={handlePublish}
                  >
                    Publicar vacante
                    <BiLike style={{ color: "#fff", fontSize: "1.3rem" }} />
                  </button>
                  <button
                    className="button_admin reject"
                    onClick={handleReject}
                  >
                    Rechazar vacante
                    <IoCloseOutline
                      style={{ color: "#fff", fontSize: "1.3rem" }}
                    />
                  </button>
                </WrapperActions>
              )}
            </Description>
          </WraperCard>
          {token.user.user_type === USERS.recruiter ? (
            <WrapperComment>
              <header>
                <Title>Observaciones de la Vacante {data[0]?.t200_job}</Title>
              </header>
              <section style={{ height: "calc(100% - 2.8rem)" }}>
                {!observationManager.length ? (
                  <article
                    style={{
                      height: "100%",
                      display: "grid",
                      placeContent: "center",
                    }}
                  >
                    <NoComment />
                    <div
                      style={{
                        position: "relative",
                        bottom: ".5rem",
                        left: "3rem",
                      }}
                    >
                      <NoComment borderColor="#3D50D9" />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        position: "relative",
                        top: "1rem",
                        left: "2rem",
                        textAlign: "center",
                      }}
                    >
                      No hay observaciones para esta vacante
                    </h3>
                  </article>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      overflowY: "auto",
                      height: "fit-content",
                    }}
                  >
                    {observation?.map((el) => (
                      <Comment
                        key={`comment-id-${el?.t223_id_comment}`}
                        comment={el?.t223_comment}
                        date={el?.t223_sent_date}
                        userId={el?.t301_id_recruiter?.t301_id_recruiter}
                      />
                    ))}
                  </div>
                )}
              </section>
            </WrapperComment>
          ) : (
            // TODO: Pasar a un componente independiente
            <WrapperComment>
              <header>
                <Title>Observaciones de la Vacante {data[0]?.t200_job}</Title>
                <nav
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Tooltip title="Agregar una observacion">
                    <Button
                      onClick={openModal}
                      bgColor="transparent"
                      icon={
                        <IoMdAddCircle
                          style={{ fontSize: "1.7rem", color: "#1C8EFB" }}
                        />
                      }
                    />
                  </Tooltip>
                </nav>
              </header>
              <section
                style={{
                  height: "78vh",
                  display: "grid",
                  placeContent: "center",
                  overflowY: "auto",
                }}
              >
                {!observationManager.length ? (
                  <article
                    style={{
                      height: "100%",
                      display: "grid",
                      placeContent: "center",
                    }}
                  >
                    <NoComment />
                    <div
                      style={{
                        position: "relative",
                        bottom: ".5rem",
                        left: "3rem",
                      }}
                    >
                      <NoComment borderColor="#3D50D9" />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        position: "relative",
                        top: "1rem",
                        left: "2rem",
                        textAlign: "center",
                      }}
                    >
                      No hay observaciones para esta vacante
                    </h3>
                  </article>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      width: "550px",
                      height: "76vh",
                    }}
                  >
                    {observationManager.map((observation) => (
                      <Comment
                        key={`comment-id-${observation?.t223_id_comment}`}
                        comment={observation?.t223_comment}
                        token={token.user.user_type}
                        date={observation?.t223_sent_date}
                        userId={
                          observation?.t301_id_recruiter?.t301_id_recruiter
                        }
                      />
                    ))}
                  </div>
                )}
              </section>
            </WrapperComment>
          )}
        </>
      )}
      <ModalPortal
        isOpen={isOpen}
        closeModal={closeModal}
        minWidth="700px"
        minHeight="490px"
      >
        <PostComment />
      </ModalPortal>

      <Toaster position="top-right" />
    </>
  );
};

export default CardDetailsVacantRecruiter;

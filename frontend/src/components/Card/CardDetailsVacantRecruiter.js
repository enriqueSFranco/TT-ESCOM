import React, { useMemo } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "context/AuthContext";
import {
  useFetch,
  useGetObservationVacant,
  useGetObservationVacantManager,
} from "hooks";
import { stateVacant } from "services";
import { USERS } from "types";
import { formatDate } from "utils";
import Loader from "components/Loader/Loader";
import Chip from "components/Chip/Chip";
import Comment from "components/Comment/Comment";
import NoComment from "./CardNoComment";
import FormAddComment from "components/Form/FormAddComment";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaCalendarAlt, FaBrain } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import {
  WrapperLoader,
  WraperCard,
  WrapperIconEdit,
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

const CardDetailsVacantRecruiter = ({ vacantId }) => {
<<<<<<< HEAD
  // const { t200_id_vacant } = useParams();
=======
>>>>>>> feature/reclutador
  const observation = useGetObservationVacant({ vacantId: vacantId });
  const observationManager = useGetObservationVacantManager({
    vacantId: vacantId,
  });
  const { token } = useAuth();
<<<<<<< HEAD
  const { data, error, loading } = useFetch(
=======
  const { data, loading } = useFetch(
>>>>>>> feature/reclutador
    `${process.env.REACT_APP_URL_VACANTS}${vacantId}/`
  );

  const handlePublish = (e) => {
    e.preventDefault();
    stateVacant(vacantId, {
      t400_id_admin: 1,
      c204_id_vacant_status: 2,
      activate: true,
    })
      .then((response) => toast.success(response.message))
      .catch((error) => toast.error(error.message));
  };

  const handleReject = (e) => {
    e.preventDefault();
    stateVacant(vacantId, {
      t400_id_admin: 1,
      c204_id_vacant_status: 4,
      activate: "",
    })
      .then((response) => toast.error(response.message))
      .catch((error) => toast.error(error.message));
  };

  const observationsRecruiter = useMemo(() => observation, [observation]);
  const observationsManager = useMemo(
    () => observationManager,
    [observationManager]
  );

  if (!data || !token || !observationsRecruiter || !observationManager)
    return null;

  const STATUS = data[0]?.c204_id_vacant_status?.c204_id_status;
  const typeOfUser = token?.user?.user_type

  return (
    <>
      {loading ? (
        <WrapperLoader>
          <Loader />
        </WrapperLoader>
      ) : (
        <>
          <WraperCard typeOfUser={typeOfUser}>
            <WrapperIconEdit>{STATUS === 1 && <FiEdit />}</WrapperIconEdit>
            <Title>{data[0]?.t200_job}</Title>
            <HeaderInfo>
              <ListItems style={{ justifyContent: "center" }}>
                <li>
                  <Chip
                    label={`${data[0]?.c214_id_modality?.c214_description}`}
                    bg="var(--bg-color_3)"
                    color="var(--color_3)"
                    icon={
                      <HiOutlineLocationMarker style={{ fontSize: "1rem" }} />
                    }
                  />
                </li>
                <li>
                  <Chip
                    label={`${data[0]?.c207_id_experience?.c207_description}`}
                    bg="var(--bg-color_1)"
                    color="var(--color_1)"
                    icon={<FaBrain style={{ fontSize: "1rem" }} />}
                  />
                </li>
                <li>
                  <Chip
                    label={`Fecha de cierre: ${formatDate(
                      new Date(data[0]?.t200_close_date).toLocaleDateString()
                    )}`}
                    bg="#000"
                    color="#fff"
                    icon={<FaCalendarAlt style={{ fontSize: "1rem" }} />}
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
            </Description>
            {token.user.user_type === USERS.recruiter ? (
              <WrapperActions>
                {data[0]?.c204_id_vacant_status?.c204_id_status === 1 && (
                  <span>Vacante en revision</span>
                )}
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
                <button className="button_admin reject" onClick={handleReject}>
                  Rechazar vacante
                  <IoCloseOutline
                    style={{ color: "#fff", fontSize: "1.3rem" }}
                  />
                </button>
              </WrapperActions>
            )}
          </WraperCard>
          {token.user.user_type === USERS.recruiter ? (
            <WrapperComment typeOfUser={typeOfUser}>
              <header>
                <Title>Observaciones de la Vacante {data[0]?.t200_job}</Title>
              </header>
              <>
                {!observationsManager.length ? (
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
                      height: "600px",
                      padding: ".5rem",
                    }}
                  >
                    {observationsRecruiter?.map((el) => (
                      <Comment
                        key={`comment-id-${el?.t223_id_comment}`}
                        comment={el?.t223_comment}
                        date={el?.t223_sent_date}
                        username={el?.t400_id_admin?.t400_name}
                        typeUser={el?.t301_id_recruiter?.t301_id_recruiter}
                      />
                    ))}
                  </div>
                )}
              </>
              <FormAddComment
                typeUser={token.user.user_type}
                userId={token.user.id}
                vacantId={vacantId}
              />
            </WrapperComment>
          ) : (
            // TODO: Pasar a un componente independiente
            <WrapperComment typeOfUser={typeOfUser}>
              <header>
                <Title>Observaciones de la Vacante {data[0]?.t200_job}</Title>
              </header>
              <>
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
                    height: "700px",
                  }}
                  >
                    {observationsManager.map((observation) => (
                      <Comment
                        key={`comment-id-${observation?.t223_id_comment}`}
                        comment={observation?.t223_comment}
                        date={observation?.t223_sent_date}
                        username={observation?.t400_id_admin?.t400_name}
                        typeUser={
                          observation?.t301_id_recruiter?.t301_id_recruiter
                        }
                      />
                    ))}
                  </div>
                )}
              </>
              <FormAddComment
                typeUser={token.user.user_type}
                userId={token.user.id}
                vacantId={vacantId}
              />
            </WrapperComment>
          )}
        </>
      )}
      <Toaster position="top-right" />
    </>
  );
};

export default CardDetailsVacantRecruiter;

import React, { useState } from "react";
import { useAuth } from "context/AuthContext";
import { useFetch, useModal } from "hooks";
import { applyJob } from "services";
import { getSkillType } from "utils";
import Chip from "components/Chip/Chip";
// import Button from "components/Button/Button";
import { List, ListItem } from "styled-components/CommonStyles";
import arrowRigth from "assets/images/flecha-correcta.gif";
import {
  DescriptionJob,
  Header,
  WrapperRequitements,
  WrapperMoreInfo,
  Container,
  Button,
  WrapperSummaryJob,
} from "../styled-components/DetailsJobStyled";
import ModalPortal from "../ModalPortal";
import Confirm from "components/Alert/Confirm/Confirm";

function createMarkup(description) {
  return { __html: description };
}

const DetailsJob = ({ vacantId, recommended, match }) => {
  const [isApplyJob, setIsApplyJob] = useState({});
  const [isOpen, openModal, closeModal] = useModal(false);
  const { data } = useFetch(
    `${process.env.REACT_APP_URL_VACANT_REQUIREMENTS}${
      recommended ? vacantId?.t200_id_vacant : vacantId
    }`
  );
  const { token } = useAuth();
  const { data: summaryJob } = useFetch(
    `${process.env.REACT_APP_URL_VACANTS}${
      recommended ? vacantId?.t200_id_vacant : vacantId
    }`
  );

  const requiredSkills = getSkillType(data);
  const optionalSkills = getSkillType(data, false);

  const handleApplyJob = async (idVacant) => {
    let now = new Date();
    const response = await applyJob({
      t200_id_vacant: idVacant,
      t100_id_student: token?.user?.id,
      c205_id_application_state: 1,
      t201_date_application:
        now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
    });
    // console.log(response);
    if (response.status === 201)
      setIsApplyJob({
        succes: response.status,
        message: response.data.message,
      });
    else
      setIsApplyJob({
        success: response.status,
        message: response.data.message,
      });
  };

  if (!data || !summaryJob) return null;

  return (
    <>
      <WrapperSummaryJob>
        <Header>
          <figure
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <img
              src={null}
              alt={""}
              width="100px"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
              }}
            />
            <figcaption
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: ".5rem",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontSize: "1.9em",
                  fontWeight: "700",
                  fontFamily: "sans-serif",
                }}
              >
                {summaryJob[0]?.t300_id_company?.t300_name}
              </span>
              <span
                style={{
                  color: "#fff",
                  fontSize: "1.5em",
                  fontWeight: "700",
                  fontFamily: "sans-serif",
                }}
              >
                {summaryJob[0]?.t200_job}
              </span>
            </figcaption>
          </figure>
          <div style={{ marginLeft: "10px" }}>
            {token ? (
              <Button onClick={openModal}>
                <img src={arrowRigth} alt="flecha-derecha" width="30px" />
                Postularme
              </Button>
            ) : (
              <Button
                onClick={() => window.location.replace("/registro-alumno")}
              >
                Postularme
              </Button>
            )}
          </div>
        </Header>
        <Container>
          <WrapperRequitements>
            {optionalSkills.length > 0 ? (
              <div className="containerListSkill">
                <h3 className="titleTypeSkills">Habilidades Opcionales</h3>
                <List>
                  <ListItem>
                    {optionalSkills.map((el) => (
                      <ListItem key={`skill-id-${el.t211_id_requirement}`}>
                        <Chip
                          label={el.c116_description}
                          bg="#fff"
                          color="#6D6D6D"
                          outline="1px solid #ccc"
                        />
                      </ListItem>
                    ))}
                  </ListItem>
                </List>
              </div>
            ) : null}
            {requiredSkills.length > 0 ? (
              <div className="containerListSkill">
                <h3 className="titleTypeSkills">Habilidades Requeridas</h3>
                <List>
                  {requiredSkills.map((el) => (
                    <ListItem key={`skill-id-${el.t211_id_requirement}`}>
                      <Chip
                        label={el.c116_description}
                        bg="#fff"
                        color="#6D6D6D"
                        outline="1px solid #ccc"
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            ) : null}
          </WrapperRequitements>
          <WrapperMoreInfo>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <h4 style={{ fontSize: "18px" }}>Etiquetas de la vacante</h4>
              <span style={{ color: "#6D6D6D" }}>
                Ubicación:{" "}
                {`${summaryJob[0]?.t200_street}, ${
                  summaryJob[0]?.t200_interior_number &&
                  summaryJob[0]?.t200_interior_number
                }`}
              </span>
              <span style={{ color: "#6D6D6D" }}>
                Perfil: {summaryJob[0]?.c206_id_profile?.c206_description}
              </span>
              <span style={{ color: "#6D6D6D" }}>
                Tipo de contratacion:{" "}
                {summaryJob[0]?.c208_id_contract.c208_description}
              </span>
              <span style={{ color: "#6D6D6D" }}>
                Experiencia:{" "}
                {summaryJob[0]?.c207_id_experience?.c207_description}
              </span>
            </div>
            {recommended ? (
              <div style={{ justifySelf: "flex-end" }}>
                <Chip
                  label={`Porcentaje de recomendación: ${match}%`}
                  color="#fff"
                  bg="linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)"
                />
              </div>
            ) : null}
          </WrapperMoreInfo>

          <DescriptionJob
            dangerouslySetInnerHTML={createMarkup(
              summaryJob[0]?.t200_description
            )}
          />
        </Container>
      </WrapperSummaryJob>
      <ModalPortal isOpen={isOpen} closeModal={closeModal} minHeight="300px">
        <Confirm
          applyJob={() => handleApplyJob(recommended ? vacantId?.t200_id_vacant : vacantId)}
          isApplyJob={isApplyJob}
          job={summaryJob[0]?.t200_job}
        />
      </ModalPortal>
    </>
  );
};

export default DetailsJob;

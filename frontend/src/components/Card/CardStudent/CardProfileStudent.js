import { useState } from "react";
import { useAuth } from "context/AuthContext";
import {
  useGetCandidate,
  useGetSocialNetwork,
  useFetch,
  useModal,
  useGetSkills,
} from "hooks";
import { helpHttp, uuid } from "utils";
import { TextField, Autocomplete } from "@mui/material";
import ModalPortal from "components/Modal/ModalPortal";
import ModalPreviewCV from "components/Modal/ModalPreviewCV";
import CustomAvatar from "components/Avatar/Avatar";
import Chip from "components/Chip/Chip";
import ToolTip from "components/Tooltip/TooltipText";
import FormSocialNetwork from "components/Form/FormAddSocialNetwork/FormSocialNetwork";
import FormUpdateDataStudent from "components/Form/updateInfoStudent/FormUpdateDataStudent";
import {
  MdLocationPin,
  MdOutlineAirplanemodeActive,
  MdOutlineModeEdit,
} from "react-icons/md";
import {
  BsFileEarmarkPersonFill,
  BsFillFileEarmarkPostFill,
  BsLink45Deg,
} from "react-icons/bs";
import { BiDislike } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import { List } from "styled-components/CommonStyles";
import styles from "./CardProfileStudent.module.css";

const CardProfileStudent = () => {
  const [newSkills, setNewSkills] = useState([]);
  const [isOpen, openModal, closeModal] = useModal();
  const [isOpenCV, openModalCV, closeModalCV] = useModal();
  const [isOpenSocialNetwork, openModalSocialNetwork, closeModalSocialNetwork] =
    useModal();
  const [isOpenSkill, openModalSkill, closeModalSkill] = useModal();
  const { token } = useAuth();
  const { skills } = useGetSkills(token?.user?.id);
  const { candidate } = useGetCandidate(token?.user?.user_id);
  const { socialNetworks } = useGetSocialNetwork({ idUser: token?.user?.id });
  const { data } = useFetch(process.env.REACT_APP_URL_CATALOG_SKILLS);

  function sendSkill() {
    newSkills.forEach((newSkill) => {
      let options = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: {
          t100_id_student: token?.user?.id,
          c116_id_skill: newSkill["c116_id_skill"],
        },
      };
      helpHttp()
        .POST(`${process.env.REACT_APP_URL_CANDIDATE_SKILLS}`, options)
        .then((response) => {
          if (!response.err) {
            console.log({ response });
          }
        });
    });
  }

  if (!candidate || !data || !socialNetworks || !skills) return null;

  return (
    <>
      {/* inicio del perfil */}
      <article className={`${styles.cardProfile}`}>
        <header className={styles.header}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <ToolTip title="Editar Perfil">
              <MdOutlineModeEdit
                style={{
                  position: "relative",
                  top: ".2rem",
                  right: ".5rem",
                  color: "#31B1F2",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                }}
                onClick={openModal}
              />
            </ToolTip>
          </div>
          <CustomAvatar
            picture={candidate[0]?.t100_profile_picture}
            username={candidate[0]?.t100_name}
            width="90px"
            height="90px"
          />
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                color: "#000",
                fontWeight: 400,
                fontFamily: "sans-serif",
              }}
            >
              {candidate[0]?.t100_name} {candidate[0]?.t100_last_name}{" "}
              {candidate[0]?.t100_second_surname}
            </span>
            <div style={{ margin: ".5rem 0 .4rem 0" }}></div>
          </div>
        </header>
        <div className={styles.userDetails}>
          <div className={styles.personalInfo}>
            <div className={styles.container_flex}>
              <span className={styles.icon}>
                <MdLocationPin />
              </span>
              <p>
                {candidate[0]?.c222_id_locality
                  ? candidate[0]?.c222_id_locality.c222_state +
                    " , " +
                    candidate[0]?.c222_id_locality.c222_municipality +
                    " , "
                  : ""}
                {candidate[0]?.t100_residence
                  ? candidate[0]?.t100_residence
                  : ""}
              </p>
            </div>
            <div className={styles.container_flex}>
              <span className={styles.icon}>
                <MdOutlineAirplanemodeActive />
              </span>
              <p>
                {candidate[0]?.t100_travel
                  ? "Disponible para reubicarse."
                  : "No disponible para reubicarse." ?? "No especificado."}
              </p>
            </div>
            <div className={styles.container_flex}>
              {candidate[0]?.t100_cv ? (
                <>
                  <BsFileEarmarkPersonFill style={{marginTop: '4px'}} className={styles.icon} />
                  <button
                    onClick={openModalCV}
                    style={{
                      color: "#000",
                      backgroundColor: "transparent",
                      outline: "none",
                      fontSize: "14px",
                      border: "none",
                      marginLeft: "8px",
                    }}
                  >
                    Ver CV
                  </button>
                </>
              ) : (
                <>
                  <span className={styles.icon}>
                    <BsFillFileEarmarkPostFill />
                  </span>
                  <p
                    style={{
                      marginLeft: ".3rem",
                      paddingLeft: ".2rem",
                      fontWeight: "400",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Aun no cuentas con tu CV
                  </p>
                </>
              )}
            </div>
          </div>
          <div className={`${styles.socialNetworks} ${styles.separator}`}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Redes sociales</h4>
              <ToolTip title="Agregar Red Social">
                <button
                  className={styles.buttonAdd}
                  onClick={openModalSocialNetwork}
                >
                  +
                </button>
              </ToolTip>
            </div>
            <ul className={styles.list}>
              <li className={styles.list_item}>
                <BsLink45Deg style={{ fontSize: "1.2rem" }} />
                <a
                  href={`mailto:${candidate[0]?.t100_email}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#000" }}
                >
                  {candidate[0]?.t100_email}
                </a>
              </li>
              {socialNetworks?.map(({ t113_link, c115_id_plataform }) => (
                <li
                  key={`item-link-plataform-${crypto.randomUUID()}`}
                  title={`Ir a ${t113_link}`}
                  className={styles.list_item}
                >
                  <img
                    src={c115_id_plataform?.c115_icon}
                    alt={c115_id_plataform?.c115_icon}
                    className={styles.iconSocialNetwork}
                  />
                  <span className={styles.go_link}>
                    {c115_id_plataform?.c115_description}
                    {
                      <a href={`${t113_link}`} target="_blank" rel="noreferrer">
                        {t113_link}
                      </a>
                    }
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* SKILLS */}
          <div className={`${styles.wrapperSkills} ${styles.separator}`}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <h4>Conocimientos en:</h4>
              <ToolTip title="Agregar Nuevo Conocimiento">
                <button onClick={openModalSkill} className={styles.buttonAdd}>
                  +
                </button>
              </ToolTip>
            </div>
            <List>
              {skills?.length > 0 ? (
                skills?.map(({ c116_id_skill }) => (
                  <Chip
                    key={uuid()}
                    label={c116_id_skill?.c116_description}
                    outline={`1px solid #ccc`}
                    bg="#fff"
                    color="#6D6D6D"
                  />
                ))
              ) : (
                <span>Sin conocimientos registradas</span>
              )}
            </List>
          </div>
          <div
            style={{
              display: "grid",
              placeContent: "center",
              textAlign: "center",
              width: "fit-content",
              padding: "0 1rem",
              height: "40%",
              margin: "0 auto",
              borderRadius: "1rem",
              color: "#000",
              position: "relative",
              top: "1.5rem",
            }}
          >
            {candidate[0]?.t100_cv === null ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: ".3rem" }}
              >
                <BiDislike style={{ fontSize: "1.5rem", color: "#000" }} />
                <span>Aun no cuentas con tu cv</span>
              </div>
            ) : (
              <div>
                <GoVerified style={{ color: "#02B700" }} /> Tu curriculum esta
                activo y visible para las empresas{" "}
                <span style={{ color: "#02B700", fontWeight: "700" }}>
                  Abierto a oportunidades
                </span>
              </div>
            )}
          </div>
        </div>
        {/* fin del perfil */}
      </article>
      <ModalPortal isOpen={isOpen} closeModal={closeModal} minHeight="700px">
        <FormUpdateDataStudent
          id={candidate[0]?.t100_id_student}
          username={candidate[0]?.t100_name}
          picture={candidate[0]?.t100_profile_picture}
          candidate={candidate[0]}
        />
      </ModalPortal>

      <ModalPortal
        isOpen={isOpenSocialNetwork}
        closeModal={closeModalSocialNetwork}
        minHeight="300px"
        minWidth="600px"
      >
        <h2
          style={{
            position: "relative",
            top: "0",
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: "1.5rem",
          }}
        >
          Agregar Red Social
        </h2>
        <FormSocialNetwork idUser={token?.user?.id} />
      </ModalPortal>

      <ModalPortal
        isOpen={isOpenSkill}
        closeModal={closeModalSkill}
        minHeight="300px"
        minWidth="400px"
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            fontSize: "1.5rem",
          }}
        >
          Agregar nueva skill
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: ".4rem",
            marginTop: "1rem",
            position: "relative",
            top: "2rem",
          }}
        >
          <Autocomplete
            id="skills"
            size="small"
            sx={{ width: 350, maxWidth: "100%" }}
            name="skills"
            value={newSkills}
            onChange={(event, newValue) => setNewSkills(newValue)}
            multiple
            options={data}
            getOptionLabel={(option) => option.c116_description}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Agregar nueva habilidad"
                placeholder="Selecciona "
              />
            )}
          />
          <button
            onClick={sendSkill}
            style={{
              height: "2rem",
              padding: ".4rem 1rem",
              marginTop: "1rem",
              display: "grid",
              placeContent: "center",
              outline: "none",
              border: "none",
              backgroundColor: "#116BFE",
              color: "#fff",
              fontWeight: "400",
              fontFamily: "sans-serif",
              borderRadius: "2px",
            }}
          >
            Agregar
          </button>
        </div>
      </ModalPortal>

      <ModalPortal
        isOpen={isOpenCV}
        closeModal={closeModalCV}
        minWidth="1000px"
      >
        <ModalPreviewCV fileUrl={candidate[0]?.t100_cv} />
      </ModalPortal>
    </>
  );
};

export default CardProfileStudent;

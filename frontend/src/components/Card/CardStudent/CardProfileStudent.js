import { useEffect, useReducer, useState } from "react";
import { useAuth } from "context/AuthContext";
import { useGetCandidate, useGetSocialNetwork, useFetch, useModal } from "hooks";
import { helpHttp } from "utils/helpHttp";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ModalPortal from "components/Modal/ModalPortal";
import {
  fetchDataCandidateReducer,
  fetchDataCandidateInit,
} from "reducers/fetchDataCandidateReducer";
import { TYPES } from "actions/fetchDataCandidateActions";
import { getAcademicHistorial } from "services/students/index";
import { getSkill } from "services/catalogs";
import { uuid } from "utils/uuid";
import CustomAvatar from "components/Avatar/Avatar";
import Chip from "components/Chip/Chip";
import {
  MdLocationPin,
  MdOutlineAirplanemodeActive,
  MdOutlineModeEdit,
} from "react-icons/md";
import FormSocialNetwork from "components/Form/FormAddSocialNetwork/FormSocialNetwork";
import { List } from "styled-components/CommonStyles";
import styles from "./CardProfileStudent.module.css";
import FormUpdateDataStudent from "components/Form/updateInfoStudent/FormUpdateDataStudent";

const CardProfileStudent = () => {
  const [state, dispatch] = useReducer(
    fetchDataCandidateReducer,
    fetchDataCandidateInit
  );
  const [visibleSkill, setVisibleSkill] = useState(false);
  const [visibleSocilaNetwork, setVisibleSocialNetwork] = useState(false);
  const [newSkills, setNewSkills] = useState([]);
  const [isOpen, openModal, closeModal] = useModal()
  const { token } = useAuth();
  const { candidate } = useGetCandidate(token?.user?.user_id);
  const { socialNetworks } = useGetSocialNetwork({ idUser: token?.user?.id });
  const { data } = useFetch(process.env.REACT_APP_URL_CATALOG_SKILLS);

  useEffect(() => {
    const controller = new AbortController();
    getAcademicHistorial(token?.user?.user_id)
      .then((response) => {
        dispatch({
          type: TYPES.FETCH_ACADEMIC_HISTORIAL,
          payload: response.data,
        });
      })
      .catch((error) => error);
    return () => controller.abort();
  }, [token?.user?.user_id]);

  useEffect(() => {
    const controller = new AbortController();

    getSkill(token?.user?.id).then((response) => {
      dispatch({
        type: TYPES.FETCH_SKILLS,
        payload: response,
      });
    });
    return () => controller.abort();
  }, [token?.user?.id]);


  const hanadleVisibleSkill = () => setVisibleSkill(!visibleSkill);

  const handleVisibleSocialNetwork = () => setVisibleSocialNetwork(!visibleSocilaNetwork);

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
            console.log(response);
          }
        });
    });
  }

  if (!candidate || !data) return null;
  

  return (
    <>
      <article className={`${styles.cardProfile}`}>
        <div className={`${styles.card}`}>
          <MdOutlineModeEdit
            style={{
              position: "absolute",
              right: ".5rem",
              top: ".5rem",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
            onClick={openModal}
          />
          <header className={styles.header}>
            <CustomAvatar
              picture={candidate[0]?.t100_profile_picture}
              username={candidate[0]?.t100_name}
              width="100px"
              height="100px"
            />
            <div className={styles.nameHolder}>
              <span
                style={{
                  color: "#9E9EA7",
                  fontWeight: 500,
                  letterSpacing: ".5px",
                }}
              >
                {candidate[0]?.t100_name} {candidate[0]?.t100_last_name}
              </span>
              <Chip
                label={candidate[0]?.t100_interest_job ?? "Puesto deseado no definido"}
                bg="#116BFE"
                color="#fff"
              />
            </div>
          </header>
          <div className={styles.userDetails}>
            <div className={styles.separator}>
              <div className={styles.flex}>
                <MdLocationPin
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                  }}
                />
                <p style={{ fontWeight: "400" }}>
                  {candidate[0]?.c222_id_locality ? 
                  candidate[0]?.c222_id_locality?.c222_state+", "+candidate[0]?.c222_id_locality?.c222_municipality+", "
                  : "No especificado." }
                  {candidate[0]?.t100_residence ? 
                  candidate[0]?.c222_id_locality?.c222_locality+", "+candidate[0]?.t100_residence
                  : "" }
                </p>                
              </div>
              <div className={styles.flex}>
                <MdOutlineAirplanemodeActive
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                  }}
                />
                <p style={{ fontWeight: "400" }}>
                  {candidate[0]?.t100_travel
                    ? "Disponible para reubicarse."
                    : "No disponible para reubicarse." ?? "No especificado."}
                </p>
              </div>
            </div>
            <div className={`${styles.socialNetworks} ${styles.separator}`}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 className={styles.label}>redes sociales</h4>
                <MdOutlineModeEdit
                  onClick={handleVisibleSocialNetwork}
                  style={{ fontSize: "1.1rem", cursor: "pointer" }}
                />
              </div>
              <List className={styles.list}>
                {socialNetworks?.length > 0 ? (
                  socialNetworks?.map(({ t113_link, c115_id_plataform }) => (
                      <a
                        href={`${t113_link}`}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                        key={crypto.randomUUID()}
                      >
                        <img
                          src={c115_id_plataform?.c115_icon}
                          alt={c115_id_plataform?.c115_icon}
                          className={styles.iconSocialNetwork}
                        />
                      </a>
                  ))
                ) : (
                  <span style={{ padding: 0 }}>
                    Sin redes sociales por el momento.
                  </span>
                )}
              </List>
              {visibleSocilaNetwork && (
                <FormSocialNetwork idUser={token?.user?.id} />
              )}
            </div>
            {/* SKILLS */}
            <div className={`${styles.wrapperSkills} ${styles.separator}`}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 className={styles.label}>Habilidades en</h4>
                <MdOutlineModeEdit
                  onClick={hanadleVisibleSkill}
                  style={{ fontSize: "1.1rem", cursor: "pointer" }}
                />
              </div>
              <List>
                {state.skills?.length > 0 ? (
                  state.skills?.map(({ c116_id_skill }) => (
                    <Chip
                      key={uuid()}
                      label={c116_id_skill?.c116_description}
                      bg="#232436"
                      color="#fff"
                    />
                  ))
                ) : (
                  <span>Sin habilidades registradas</span>
                )}
              </List>
              {visibleSkill && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".4rem",
                    marginTop: "1rem",
                  }}
                >
                  <Autocomplete
                    id="skills"
                    size="small"
                    sx={{ width: 300, maxWidth: "100%" }}
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
                      padding: ".4rem",
                      display: "grid",
                      placeContent: "center",
                      outline: "none",
                      border: "none",
                      backgroundColor: "#116BFE",
                      color: "#fff",
                      borderRadius: "4px",
                    }}
                  >
                    Agregar
                  </button>
                </div>
              )}
            </div>
            <div>
              {candidate[0]?.t100_cv === null ? (
                <p>Aun no cuentas con tu cv</p>
              ) : (
                <p>
                  Tu curriculum esta activo y visible para las empresas{" "}
                  <span>Abierto a oportunidades</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
      <ModalPortal isOpen={isOpen} closeModal={closeModal}>
        <FormUpdateDataStudent id={candidate[0]?.t100_id_student} username={candidate[0]?.t100_name} candidate={candidate[0]} />
      </ModalPortal>
    </>
  );
};

export default CardProfileStudent;

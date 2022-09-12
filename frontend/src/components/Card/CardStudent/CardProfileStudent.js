import { useEffect, useReducer } from "react";
import { useAuth } from "context/AuthContext";
import { fetchDataCandidateReducer, fetchDataCandidateInit } from "reducers/fetchDataCandidateReducer";
import { TYPES } from "actions/fetchDataCandidateActions";
import {
  getSocialNetwork,
  getStudent,
  getAcademicHistorial,
} from "services/students/index";
import { getSkill } from "services/catalogs";
import { uuid } from "utils/uuid";
import CustomAvatar from "components/Avatar/Avatar";
import Chip from 'components/Chip/Chip'
import {
  MdLocationPin,
  MdOutlineAirplanemodeActive,
  MdOutlineModeEdit
} from "react-icons/md";
import styles from "./CardProfileStudent.module.css";

const CardProfileStudent = () => {
  const [state, dispatch] = useReducer(fetchDataCandidateReducer, fetchDataCandidateInit)
  const { token } = useAuth();

  useEffect(() => {
    getStudent(token?.user?.user_id).then((response) => {
      dispatch({
        type: TYPES.FETCH_CANDIDATE,
        payload: response
      })
    });
  }, [token?.user?.user_id]);

  
  useEffect(() => {
    getAcademicHistorial(token?.user?.user_id)
      .then((response) => {
        dispatch({
          type: TYPES.FETCH_ACADEMIC_HISTORIAL,
          payload: response.data
        });
      })
      .catch((error) => error);
  }, [token?.user?.user_id]);

  useEffect(() => {
    getSkill(token?.user?.user_id).then((response) => {
      dispatch({
        type: TYPES.FETCH_SKILLS,
        payload: response
      })
    });
  }, [token?.user?.user_id]);

  useEffect(() => {
    getSocialNetwork(token?.user?.id).then((response) => {
      dispatch({
        type: TYPES.FETCH_SOCIAL_NETWORK,
        payload: response
      });
    });
  }, [token?.user?.id]);
  
  return (
    <article className={`${styles.mainContainer}`}>
      <div className={`${styles.card}`}>
        <header className={styles.header}>
            <CustomAvatar student={state.candidate} width="100" height="100" />
            <div className={styles.nameHolder}>
              <span style={{color: '#9E9EA7', fontWeight: 500, letterSpacing:  '.5px'}}>
                Enrique Salinas Franco
                {/* {student[0]?.t100_name} {student[0]?.t100_last_name} */}
              </span>
              <Chip label='Ingenieria en sistemas computaciones' bg="#116BFE" color='#fff' />
                
                {/* {academicHistorial && academicHistorial[0]?.t104_carreer} */}
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
                {state.candidate[0]?.t100_residence ?? "No especificado."}
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
                {state.candidate[0]?.t100_travel
                  ? "Disponible para reubicarse."
                  : "No disponible para reubicarse." ?? "No especificado."}
              </p>
            </div>
          </div>
          <h4 className={styles.label}>redes sociales</h4>
          <div className={`${styles.socialNetworks} ${styles.separator}`}>
            {state.socialNetworks?.length > 0 ? (
              state.socialNetworks?.map(({ t113_link, c115_id_plataform }) => {
                return (
                  <a
                    href={`${t113_link}`}
                    target="_blank"
                    rel="noreferrer"
                    key={uuid()}
                    className={styles.link}
                  >
                    <img
                      src={c115_id_plataform?.c115_icon}
                      alt={c115_id_plataform?.c115_icon}
                      className={styles.iconSocialNetwork}
                    />
                  </a>
                );
              })
            ) : (
              <span>Sin redes sociales por el momento.</span>
            )}
          </div>
          {/* SKILLS */}
          <div className={`${styles.wrapperSkills} ${styles.separator}`}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <h4 className={styles.label}>Skills</h4>
              <MdOutlineModeEdit style={{fontSize: '1.1rem', cursor: 'pointer'}} />
            </div>
            <ul className={styles.skillList}>
              {state.skills?.length > 0 ? (
                state.skills?.map(({ c116_id_skill }) => (
                  <Chip
                    key={uuid()}
                    label={c116_id_skill?.c116_description}
                  />
                ))
              ) : (
                <span>Sin skills</span>
              )}
            </ul>
          </div>
          {/* cv */}
          <div>
            {
              state.candidate[0]?.t100_cv === null ? 'no' : 'si'
            }
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardProfileStudent;

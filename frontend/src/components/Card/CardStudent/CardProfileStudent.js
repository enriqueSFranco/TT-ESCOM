import { useEffect, useState } from "react";
import { useAuth } from "context/AuthContext";
import {
  getSocialNetwork,
  getStudent,
  getAcademicHistorial,
} from "services/students/index";
import { getSkill } from "services/catalogs";
import { uuid } from "utils/uuid";
import Chip from "@mui/material/Chip";
import CustomAvatar from "../../Avatar/Avatar";
import {
  MdSchool,
  MdLocationPin,
  MdOutlineAirplanemodeActive,
} from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import * as IoIcon from "react-icons/io";
import styles from "./CardProfileStudent.module.css";

const CardProfileStudent = () => {
  // TODO: Implementar useReducer para el manejo del estado
  const [student, setStudent] = useState([]);
  const [skills, setSkills] = useState([]);
  const [academicHistorial, setAcademicHistorial] = useState(null);
  const [socialNetworks, setSocialNetworks] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    getStudent(token?.user?.user_id).then((response) => {
      setStudent(response);
    });
  }, [token?.user?.user_id]);

  useEffect(() => {
    getAcademicHistorial(token?.user?.user_id)
      .then((response) => {
        // console.log(response.data);
        setAcademicHistorial(response.data);
      })
      .catch((error) => error);
  }, [token?.user?.user_id]);

  useEffect(() => {
    getSkill(token?.user?.user_id).then((response) => {
      setSkills(response);
    });
  }, [token?.user?.user_id]);

  useEffect(() => {
    getSocialNetwork(token?.user?.user_id).then((response) => {
      setSocialNetworks(response);
    });
  }, [token?.user?.user_id]);

  return (
    <article className={`${styles.mainContainer}`}>
      <div className={`${styles.card}`}>
        <header className={styles.background}>
          <div className={styles.avatar}>
            <IoIcon.IoMdSettings
              className={styles.config}
            />
            <CustomAvatar student={student} width="100" />
            <div className={styles.nameHolder}>
              <h3>
                {student[0]?.t100_name} {student[0]?.t100_last_name}
              </h3>
              <p style={{ marginBottom: 0 }}>
                {academicHistorial && academicHistorial[0]?.t104_carreer}
              </p>
            </div>
          </div>
        </header>
        <div className={styles.userDetails}>
          <div className={styles.separator}>
            <h4 className={styles.label}>Informacion Personal</h4>
            <div className={styles.flex}>
              <MdLocationPin
                style={{
                  color: "#ee4b4a",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              />
              <p style={{ fontWeight: "400" }}>
                {student[0]?.t100_residence ?? "No especificado."}
              </p>
            </div>
            <div className={styles.flex}>
              <MdOutlineAirplanemodeActive
                style={{
                  color: "#f7b82f",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              />
              <p style={{ fontWeight: "400" }}>
                {student[0]?.t100_travel
                  ? "Disponible para reubicarse."
                  : "No disponible para reubicarse." ?? "No especificado."}
              </p>
            </div>
            <div className={styles.flex}>
              <FaSchool
                style={{
                  color: "#cccecf",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              />
              <p style={{ margin: 0, fontWeight: "400" }}>
                {academicHistorial && academicHistorial[0]?.t104_academic_unit}
              </p>
            </div>
            <div className={styles.flex}>
              <MdSchool />
              <p style={{ margin: 0, fontWeight: "400" }}>
                {academicHistorial &&
                  academicHistorial[0]?.c109_id_academic_state
                    ?.c109_description}
              </p>
            </div>
          </div>
          <h4 className={styles.label}>redes sociales</h4>
          <div className={`${styles.socialNetworks} ${styles.separator}`}>
            {socialNetworks.length > 0 ? (
              socialNetworks.map(({ t113_link, c115_id_plataform }) => {
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
              <h3>Sin redes sociales por el momento.</h3>
            )}
          </div>
          <div className={`${styles.wrapperSkills} ${styles.separator}`}>
            <h4 className={styles.label}>Skills</h4>
            <ul className={styles.skillList}>
              {skills.length > 0 ? (
                skills.map(({ c116_id_skill }) => (
                  <Chip
                    key={uuid()}
                    label={c116_id_skill?.c116_description}
                    variant="outlined"
                  />
                ))
              ) : (
                <h3>Sin skills</h3>
              )}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardProfileStudent;

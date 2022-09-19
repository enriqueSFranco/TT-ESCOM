import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { uuid } from "utils/uuid";
import { getSkill, getLenguages } from "services/catalogs";
import Chip from "@mui/material/Chip";
import { BiUser } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { MdLocationPin, MdOutlineLocalAirport } from "react-icons/md";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import github from "images/github.png";
import twitter from "images/gorjeo.png";
import gmail from "images/gmail.png";
import telegram from "images/telegrama.png";
import facebook from "images/facebook.png";

import styles from "./Table.module.css";

const RowExpand = ({ user }) => {
  const [skills, setSkills] = useState(null);
  const [lenguages, setLenguages] = useState(null);

  useEffect(() => {
    if (user !== null) {
      let idUserSkill = user?.t100_id_student?.t100_id_student;
      getSkill(idUserSkill)
        .then((response) => {
          // console.log(response);
          setSkills(response);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  useEffect(() => {
    if (user !== null) {
      let idUserLenguage = user?.t100_id_student?.t100_id_student;
      getLenguages(idUserLenguage)
        .then((response) => {
          //  console.log(response);
          setLenguages(response);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  if (!user) return null;

  return (
    <article key={uuid()} className={styles.wrapperDetailsUser}>
      <div className={styles.grid_2}>
        <p className={styles.wrapperObjectPersonal}>
          {user?.t100_id_student?.t100_personal_objectives === ""
            ? "Sin objetivos profesionales guardados"
            : user?.t100_id_student?.t100_personal_objectives}
        </p>
        <div className={styles.wrapperLenguages}>
          <p className={styles.languages}>Idiomas:</p>
          <ul className={styles.listItemsSkill}>
            {lenguages &&
              lenguages?.map((lenguage) => (
                <li key={uuid()}>
                  <Chip
                    size="small"
                    label={lenguage?.c111_id_language?.c111_description}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.wrapperPinAirport}>
          <span className={`${styles.wrapperTags}`}>
            <MdLocationPin className={styles.icon} />
            {user?.t100_id_student?.t100_residence}
          </span>
          <span className={`${styles.wrapperTags}`}>
            <MdOutlineLocalAirport className={styles.icon} />
            {user &&
              (user?.t100_id_student?.t100_travel
                ? "Disponible para reubicarse"
                : "No disponible para reubicarse")}
          </span>
        </div>
        <ul className={styles.listItemLinks}>
          <li>
            <img
              className={styles.iconSocialNetwork}
              width={34}
              height={64}
              src={github}
              alt="github"
            />
          </li>
          <li>
            <img
              className={styles.iconSocialNetwork}
              width={34}
              height={64}
              src={twitter}
              alt="github"
            />
          </li>
          <li>
            <img
              className={styles.iconSocialNetwork}
              width={34}
              height={64}
              src={gmail}
              alt="github"
            />
          </li>
          <li>
            <img
              className={styles.iconSocialNetwork}
              width={34}
              height={64}
              src={telegram}
              alt="github"
            />
          </li>
          <li>
            <img
              className={styles.iconSocialNetwork}
              width={34}
              height={64}
              src={facebook}
              alt="github"
            />
          </li>
          <li>
            <img
              className={styles.iconSocialNetwork}
              width={34}
              height={64}
              src={facebook}
              alt="github"
            />
          </li>
          <li>
            <img
              className={styles.iconSocialNetwork}
              width={34}
              height={64}
              src={facebook}
              alt="github"
            />
          </li>
          <li>
            <img
              className={styles.iconSocialNetwork}
              width={34}
              height={64}
              src={facebook}
              alt="github"
            />
          </li>
        </ul>
      </div>
      <div className={styles.wrapperSkills}>
        <p className={styles.titleSkills}>Skills</p>
        <ul className={styles.listItemsSkill}>
          {skills &&
            skills?.map((skill) => (
              <li key={uuid()}>
                <Chip
                  size="small"
                  label={skill?.c116_id_skill?.c116_description}
                />
              </li>
            ))}
        </ul>
      </div>
      <Link to="/perfil-del-candidato" className={styles.link}>
        <BiUser /> Ver perfil completo
      </Link>
    </article>
  );
};

export default RowExpand;

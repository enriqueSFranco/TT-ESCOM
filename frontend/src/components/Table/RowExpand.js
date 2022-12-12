import { uuid } from "utils";
import { useGetSkills, useLanguageUser } from "hooks";
import Chip from "components/Chip/Chip";
// import { SiGmail } from "react-icons/si";
// import { MdLocationPin, MdOutlineLocalAirport } from "react-icons/md";
// import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { List, ListItem } from "styled-components/CommonStyles";
import styles from "./Table.module.css";

const RowExpand = ({ it }) => {
  const { skills } = useGetSkills(it.t100_id_student?.t100_id_student);
  const { languages } = useLanguageUser(it.t100_id_student?.t100_id_student);

  console.log(it)

  return (
    <article className={styles.wrapperDetailsUser}>
      <p className={styles.objectPersonal}>
        {it?.t100_id_student?.t100_personal_objectives
          ? it?.t100_id_student?.t100_personal_objectives
          : "Sin objetivo profesional"}
      </p>
      <div className={styles.languages}>
        <span>Idioma / Dialecto</span>
        <List className={styles.list}>
          {languages?.map((lenguage) => (
            <ListItem
              key={`language-id-${crypto.randomUUID()}`}
              className={styles.listItemsSkill}
            >
              <Chip
                label={lenguage?.c111_id_language?.c111_description}
                bg="#EBF2FD"
                color="#2864ED"
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={styles.aboutMe}>
        {/* <div className={styles.wrapperPinAirport}>
          <span className={`${styles.wrapperTags}`}>
            <MdLocationPin className={styles.icon} />
            {it?.t100_id_student?.t100_residence}
          </span>
          <span className={`${styles.wrapperTags}`}>
            <MdOutlineLocalAirport className={styles.icon} />
            {it?.t100_id_student?.t100_travel
              ? "Disponible para reubicarse"
              : "No disponible para reubicarse"}
          </span>
        </div> */}
        <span>Contacto</span>
        <List>
          <ListItem>
            <a
              aria-label="Chat on WhatsApp"
              target="blank"
              rel="noopener"
              href={`https://wa.me/${it.t100_id_student?.t100_phonenumber}/?text=${it?.t200_id_vacant?.t200_job}`}
            >
              <AiOutlineWhatsApp
                style={{ color: "#00E676", fontSize: "1.7rem" }}
              />
            </a>
          </ListItem>
          {/* <ListItem>
            <BsLinkedin  />
          </ListItem>
          <ListItem>
            <SiGmail  />
          </ListItem>
          <ListItem>
            <BsGithub  />
          </ListItem> */}
        </List>
      </div>
      <div className={styles.wrapperSkills}>
        <p className={styles.titleSkills}>Skills</p>
        <List className={styles.listItemsSkill}>
          {skills?.map((skill) => (
            <ListItem key={uuid()}>
              <Chip
                label={skill?.c116_id_skill?.c116_description}
                bg="#EBF2FD"
                color="#2864ED"
              />
            </ListItem>
          ))}
        </List>
      </div>
    </article>
  );
};

export default RowExpand;

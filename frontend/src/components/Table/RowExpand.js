import { Link } from "react-router-dom";
import { uuid } from "utils";
import { useGetSkills, useLanguageUser } from "hooks";
import Chip from "@mui/material/Chip";
import { BiUser } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { MdLocationPin, MdOutlineLocalAirport } from "react-icons/md";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "./Table.module.css";

const RowExpand = ({ it }) => {
  const { skills } = useGetSkills(it.t100_id_student?.t100_id_student);
  const { lenguages } = useLanguageUser(it.t100_id_student?.t100_id_student);

  if (!skills || !lenguages) return null;

  return (
    <article key={uuid()} className={styles.wrapperDetailsUser}>
      <div className={styles.grid_2}>
        <p className={styles.wrapperObjectPersonal}>
          {/* {user?.t100_id_student?.t100_personal_objectives} */}
        </p>
        <div className={styles.wrapperLenguages}>
          <p className={styles.languages}>Idiomas:</p>
          <ul className={styles.list}>
            {lenguages?.map((lenguage) => (
              <li key={uuid()} className={styles.listItemsSkill}>
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
            {/* {user?.t100_id_student?.t100_residence} */}
          </span>
          <span className={`${styles.wrapperTags}`}>
            <MdOutlineLocalAirport className={styles.icon} />
            {/* {user &&
              (user?.t100_id_student?.t100_travel
                ? "Disponible para reubicarse"
                : "No disponible para reubicarse")} */}
          </span>
        </div>
        <ul className={styles.listItemLinks}>
          <li>
            <BsWhatsapp />
          </li>
          <li>
            <BsLinkedin />
          </li>
          <li>
            <SiGmail />
          </li>
          <li>
            <BsGithub />
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
      <Link to="/" className={styles.link}>
        <BiUser /> Ver perfil conpleto
      </Link>
    </article>
  );
};

export default RowExpand;

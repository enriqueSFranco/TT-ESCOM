import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { BiUser } from "react-icons/bi";
import { SiGmail } from "react-icons/si";
import { MdLocationPin, MdOutlineLocalAirport } from "react-icons/md";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "./Table.module.css";

const RowExpand = ({
  summary,
  location,
  travel,
  skills,
  lenguage,
  socialNetworks,
}) => {
  return (
    <article className={styles.wrapperDetailsUser}>
      <div className={styles.grid_2}>
        <p className={styles.wrapperObjectPersonal}>
          Deseo formalizar mi preparacion en: Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quia, sit dolore ratione assumenda eveniet
          cumque quae harum quaerat possimus sed corporis tenetur nostrum
          reprehenderit optio repellat dolor? Assumenda, unde optio!
        </p>
        <div className={styles.wrapperLenguages}>
          <p className={styles.languages}>Idiomas:</p>
          <ul className={styles.listItemsSkill}>
            <li><Chip size="small" label="Ingles" /></li>
            <li><Chip size="small" label="Ingles" /></li>
            <li><Chip size="small" label="Ingles" /></li>
            <li><Chip size="small" label="Ingles" /></li>
            <li><Chip size="small" label="Ingles" /></li>
            <li><Chip size="small" label="Ingles" /></li>
            <li><Chip size="small" label="Ingles" /></li>
            <li><Chip size="small" label="Ingles" /></li>
            <li><Chip size="small" label="Ingles" /></li>
            <li><Chip size="small" label="Ingles" /></li>
          </ul>
        </div>
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.wrapperPinAirport}>
          <span className={`${styles.wrapperTags}`}>
            <MdLocationPin className={styles.icon} />
            Naucalpan, Edo Mex
          </span>
          <span className={`${styles.wrapperTags}`}>
            <MdOutlineLocalAirport className={styles.icon} />
            Disponible para reubicarse
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
          <li>
            <Chip size="small" label="HTML" />
          </li>
          <li>
            <Chip size="small" label="CSS" />
          </li>
          <li>
            <Chip size="small" label="JavaScript" />
          </li>
          <li>
            <Chip size="small" label="Node js" />
          </li>
          <li>
            <Chip size="small" label="React js" />
          </li>
          <li>
            <Chip size="small" label="React Native" />
          </li>
          <li>
            <Chip size="small" label="Python" />
          </li>
        </ul>
      </div>
      <Link to="/" className={styles.link}>
        <BiUser /> Ver perfil conpleto
      </Link>
    </article>
  );
};

export default RowExpand;

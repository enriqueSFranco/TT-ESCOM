import { uuid } from "utils";
import { useGetSkills, useLanguageUser } from "hooks";
import Chip from "components/Chip/Chip";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { List, ListItem } from "styled-components/CommonStyles";
import styles from "./Table.module.css";

const RowExpand = ({ it }) => {
  const { skills } = useGetSkills(it.t100_id_student?.t100_id_student);
  const { languages } = useLanguageUser(it.t100_id_student?.t100_id_student);

  return (
    <article className={styles.wrapperDetailsUser}>
      <p className={styles.objectPersonal}>
        {it?.t100_id_student?.t100_personal_objectives
          ? it?.t100_id_student?.t100_personal_objectives
          : "Este candidato no cuenta con objetivo profesional"}
      </p>
      <div className={styles.languages}>
        <span style={{ color: "grey", marginBottom: ".5rem" }}>
          Idiomas / Dialecto:
        </span>
        <List className={styles.list}>
          {languages?.map((lenguage) => (
            <ListItem
              key={`language-id-${crypto.randomUUID()}`}
              className={styles.listItemsSkill}
            >
              <Chip
                label={lenguage?.c111_id_language?.c111_description}
                bg="#fff"
                color="#6D6D6D"
                outline="1px solid #ccc"
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={styles.wrapperSkills}>
        <p className={styles.titleSkills}>Conocimientos:</p>
        <List>
          {skills?.map((skill) => (
            <ListItem key={uuid()}>
              <Chip
                label={skill?.c116_id_skill?.c116_description}
                bg="#fff"
                color="#6D6D6D"
                outline="1px solid #ccc"
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={styles.aboutMe}>
        <span style={{ color: "grey", marginBottom: ".5rem" }}>Contacto</span>
        <List>
          <ListItem>
            <a
              aria-label="Chat on WhatsApp"
              target="blank"
              rel="noopener"
              href={`https://wa.me/${it.t100_id_student?.t100_phonenumber}/?text=Hola ${it.t100_id_student?.t100_name}, recibimos tu postulacion a la vacante ${it?.t200_id_vacant?.t200_job}`}
            >
              <AiOutlineWhatsApp
                style={{ color: "#00E676", fontSize: "1.7rem" }}
              />
            </a>
          </ListItem>
        </List>
      </div>
    </article>
  );
};

export default RowExpand;

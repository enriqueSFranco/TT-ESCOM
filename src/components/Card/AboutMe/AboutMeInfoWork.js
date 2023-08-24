import React from "react";
import { useAuth } from "context/AuthContext";
import { useGetCandidate, useLanguageUser } from "hooks";
import { numberFormat } from "utils";
import Chip from "components/Chip/Chip";
import { ListItem, List } from "styled-components/CommonStyles";
import styles from "./AboutMe.module.css";

function generateLevel (level) {
  let result = "";
  if (level >= 30 && level <= 50) return (result += "Básico");
  if (level >= 51 && level <= 60) return (result += "Intermedio");
  if (level >= 61 && level <= 100) return (result += "Avanzado");
}

const AboutMeInfoWork = () => {
  const { token } = useAuth();
  const { candidate } = useGetCandidate(token.user.user_id);
  const { languages } = useLanguageUser(token.user.id);

  if (!candidate || !languages) return null;

  return (
    <article className={styles.infoWork}>
      <p style={{ width: "fit-content" }}>
        {candidate[0]?.t100_target_salary === null ? (
          "No especificado"
        ) : (
          <Chip
            label={`Sueldo deseado: ${numberFormat(
              candidate[0]?.t100_target_salary
            ).replace(".00", "").replace("MXM", '$')}`}
            outline={`1px solid #ccc`}
            bg="#fff"
            color="#6D6D6D"
          />
        )}
      </p>
      <p style={{ width: "fit-content" }}>
        {candidate[0]?.t100_modalities === null ? (
          "No especificado"
        ) : (
          <Chip
            label={`Modalidad de trabajo: ${candidate[0]?.t100_modalities}`}
            outline={`1px solid #ccc`}
            bg="#fff"
            color="#6D6D6D"
          />
        )}
      </p>
      <div>
        <h3 style={{ fontSize: '16px', fontWeight: '400' }} className={styles.title}>Idiomas / Dialectos</h3>
        <List>
          {languages?.map((language) => (
            <ListItem>
              <Chip
                label={`${language?.c111_id_language?.c111_description
                  } / ${generateLevel(language?.t110_level)}`}
                outline={`1px solid #ccc`}
                bg="#fff"
                color="#6D6D6D"
              />
            </ListItem>
          ))}
        </List>
      </div>
    </article>
  );
};

export default AboutMeInfoWork;

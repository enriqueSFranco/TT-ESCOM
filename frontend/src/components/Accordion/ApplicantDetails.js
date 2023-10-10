import React from "react";
import { useParams } from "react-router-dom";
import { useGetApplicationJob, useFetch, useLocalStorage } from "hooks";
import { parseThousands, getSkillType } from "utils";
import Chip from "components/Chip/Chip";
import Table from "components/Table/Table";
import TableRow from "components/Table/TableRow";
import RowExpand from "components/Table/RowExpand";
import { List, ListItem } from "styled-components/CommonStyles";
import styles from "./Accordion.module.css";

function createMarkup (description) {
  return { __html: description };
}

const Accordion = () => {
  const { t200_id_vacant } = useParams();
  const { data: requirements } = useFetch(
    `${process.env.REACT_APP_URL_VACANT_REQUIREMENTS}${t200_id_vacant}`
  );
  // const [storedValue, setValue] = useLocalStorage('followUpApplication', [])
  const [data] = useGetApplicationJob({ idVacant: t200_id_vacant });
  const requiredSkill = getSkillType(requirements);
  const optionalSkill = getSkillType(requirements, false);

  if (!data || !requirements) return null;

  return (
    <section className={styles.wrapperPostulations}>
      <article className={styles.detailsVacant}>
        <div
          style={{
            outline: "1px solid #ccc",
            borderRadius: "5px",
            height: "100%",
          }}
        >
          <header className={styles.headerVacant}>
            <h1 className={styles.titleVacant}>
              {data[0]?.t200_id_vacant?.t200_job}
            </h1>
          </header>
          <div className={styles.summaryVacant}>
            <List className={styles.customList}>
              <ListItem>
                <Chip
                  label={`Perfil Académico: ${data[0]?.t200_id_vacant?.c206_id_profile?.c206_description}`}
                  bg="#fff"
                  color="#6D6D6D"
                  outline="1px solid #ccc"
                />
              </ListItem>
              <ListItem>
                <Chip
                  label={`Sueldo: ${parseThousands(
                    data[0]?.t200_id_vacant?.t200_min_salary
                  )} - ${parseThousands(
                    data[0]?.t200_id_vacant?.t200_max_salary
                  )}`}
                  bg="#fff"
                  color="#6D6D6D"
                  outline="1px solid #ccc"
                />
              </ListItem>
              <ListItem>
                <Chip
                  label={`Experincia: ${data[0]?.t200_id_vacant?.c207_id_experience?.c207_description}`}
                  bg="#fff"
                  color="#6D6D6D"
                  outline="1px solid #ccc"
                // icon={<FaBrain />}
                />
              </ListItem>
              <ListItem>
                <Chip
                  label={`Contratación: ${data[0]?.t200_id_vacant?.c208_id_contract?.c208_description}`}
                  bg="#fff"
                  color="#6D6D6D"
                  outline="1px solid #ccc"
                />
              </ListItem>
              <ListItem>
                <Chip
                  label={`Modalidad: ${data[0]?.t200_id_vacant?.c214_id_modality?.c214_description}`}
                  bg="#fff"
                  color="#6D6D6D"
                  outline="1px solid #ccc"
                />
              </ListItem>
            </List>

            {/* habilidades requeridas y opcionales */}
            <div className={styles.listSkill}>
              {requiredSkill.length > 0 ? (
                <>
                  <h3 style={{ fontSize: "17px" }}>Habilidades Requeridas</h3>
                  <List>
                    {requiredSkill.map((el) => (
                      <ListItem key={`skill-id-${el.t211_id_requirement}`}>
                        <Chip
                          label={el.c116_description}
                          bg="#fff"
                          color="#6D6D6D"
                          outline="1px solid #ccc"
                        />
                      </ListItem>
                    ))}
                  </List>
                </>
              ) : null}

              {optionalSkill.length > 0 ? (
                <>
                  <h3 style={{ fontSize: "17px", marginTop: "18px" }}>
                    Habilidades Opcionales
                  </h3>
                  <List>
                    <ListItem>
                      {optionalSkill.map((el) => (
                        <ListItem key={`skill-id-${el.t211_id_requirement}`}>
                          <Chip
                            label={el.c116_description}
                            bg="#fff"
                            color="#6D6D6D"
                            outline="1px solid #ccc"
                          />
                        </ListItem>
                      ))}
                    </ListItem>
                  </List>
                </>
              ) : null}
            </div>
            <div
              style={{ marginTop: "14px", lineHeight: "30px" }}
              dangerouslySetInnerHTML={createMarkup(
                data[0]?.t200_id_vacant?.t200_description
              )}
            />
          </div>
        </div>
      </article>
      <div className={styles.listApplicant}>
        <h2 className={styles.totalApplicants}>
          Postulados:{" "}
          <Chip
            label={`${data.length} postulados`}
            bg="#EBF2FD"
            color="#2864ED"
          />
        </h2>
        <div className={styles.wrapperListApplicants}>
          <Table>
            {data?.map((it, index) => (
              <TableRow key={index} index={index} it={it}>
                <RowExpand it={it} />
              </TableRow>
            ))}
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

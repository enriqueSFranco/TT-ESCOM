<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> feature/reclutador
import { useParams } from "react-router-dom";
import { useGetApplicationJob } from "hooks";
import Chip from "components/Chip/Chip";
<<<<<<< HEAD
import ProfileCandidate from "components/Card/ProfileCandidate";
=======
import Table from "components/Table/Table";
import TableRow from "components/Table/TableRow";
import RowExpand from "components/Table/RowExpand";
import { TiLocationOutline } from "react-icons/ti";
import { FaBrain } from "react-icons/fa";
import { List, ListItem } from "styled-components/CommonStyles";
>>>>>>> feature/reclutador
import styles from "./Accordion.module.css";

const Accordion = () => {
  const { t200_id_vacant } = useParams();
  const [data] = useGetApplicationJob({ idVacant: t200_id_vacant });

  if (!data) return null;

  return (
<<<<<<< HEAD
    <section>
      <div className={styles.headerJob}>
        <h1 className={styles.titleJob}>{data[0]?.t200_id_vacant?.t200_job}</h1>
        <ul className={styles.listItem}>
          <li className={styles.item}>
            <Chip
              label={
                data[0]?.t200_id_vacant?.c214_id_modality?.c214_description
              }
              bg="var(--bg-color_1)"
              color="var(--color_1)"
            />
          </li>
          <li className={styles.item}>
            <Chip
              label={`Tipo de contratacion: ${data[0]?.t200_id_vacant?.c208_id_contract?.c208_description}`}
              bg="var(--bg-color_3)"
              color="var(--color_3)"
            />
          </li>
        </ul>
      </div>
      <main className={styles.main}>
        <aside className={styles.candidate_list}>
          {/* lista de postulados a una vacante  */}
          {data?.map((candidate) => (
            <CardApplicantDetails
              key={`candidate-id-${crypto.randomUUID()}`}
              onClick={() => handleRender(candidate?.t100_id_student?.id_user?.id, candidate?.t201_id_application, candidate?.c205_id_application_state?.c205_id_application_state)}
              name={candidate?.t100_id_student?.t100_name}
              stateApplication={candidate?.c205_id_application_state?.c205_description}
              picture={candidate?.t100_id_student?.t100_profile_picture}
              residence={candidate?.t100_id_student?.t100_residence}
              salary={candidate?.t100_id_student?.t100_target_salary}
            />
          ))}
        </aside>
        <article className={styles.application_details}>
          {/* detalles del candidato */}
          <div>
            {!data.length ? (
              <NoApplications />
            ) : candidate?.info?.length ? (
              <ProfileCandidate user={candidate.info[0]} pk={candidate?.pk} stateApplicationId={candidate?.stateApplicationId} isApplying={true} />
              ) : (
                <ProfileCandidate user={data[0]?.t100_id_student} pk={data[0]?.t201_id_application} stateApplicationId={data[0]?.c205_id_application_state?.c205_id_application_state} isApplying={true} />
            )}
=======
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
            {/* habilidades requeridas y opcionales */}
            <div className={styles.listSkill}></div>
            <List className={styles.customList}>
              <ListItem>
                <Chip
                  label={
                    data[0]?.t200_id_vacant?.c206_id_profile?.c206_description
                  }
                  bg="#EBF2FD"
                  color="#2864ED"
                />
              </ListItem>
              <ListItem>
                <Chip
                  label={
                    data[0]?.t200_id_vacant?.c207_id_experience
                      ?.c207_description
                  }
                  bg="#EBF2FD"
                  color="#2864ED"
                  icon={<FaBrain />}
                />
              </ListItem>
              <ListItem>
                <Chip
                  label={
                    data[0]?.t200_id_vacant?.c208_id_contract?.c208_description
                  }
                  bg="#EBF2FD"
                  color="#2864ED"
                />
              </ListItem>
              <ListItem>
                <Chip
                  label={
                    data[0]?.t200_id_vacant?.c214_id_modality?.c214_description
                  }
                  bg="#EBF2FD"
                  color="#2864ED"
                  icon={<TiLocationOutline />}
                />
              </ListItem>
            </List>
            <div>
              {data[0]?.t200_id_vacant?.t200_description}
            </div>
>>>>>>> feature/reclutador
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
              <TableRow
                key={index}
                index={index}
                it={it}
              >
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

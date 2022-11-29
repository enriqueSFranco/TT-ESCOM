import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetApplicationJob } from "hooks";
import CardApplicantDetails from 'components/Card/CardApplicantDetails'
import Chip from "components/Chip/Chip";
import ProfileCandidate from "components/Card/ProfileCandidate";
import { TiArrowBackOutline } from "react-icons/ti";
import styles from "./Accordion.module.css";
import { getStudent } from "services";


// TODO: Pasar a un component
const NoApplications = () => {
  return (
    <>
      <h1>Aun no hay candidatos aplicando a la vacante</h1>
    </>
  );
};

const Accordion = () => {
  const { t200_id_vacant } = useParams();
  const [data] = useGetApplicationJob({ idVacant: t200_id_vacant });
  const [user, setUser] = useState([])

  const handleRender = (candidateId) => {
    getStudent(candidateId)
      .then(response => setUser(response))
      .catch(error => error)
  }

  if (!data) return null;

  return (
    <section>
      <Link to="/dashboard" className={styles.goToJobs}>
        <TiArrowBackOutline /> Ir a mis vacantes
      </Link>
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
              onClick={() => handleRender(candidate?.t100_id_student?.id_user?.id)}
              name={candidate?.t100_id_student?.t100_name}
              interestJob={candidate?.t100_id_student?.t100_interest_job}
              speciality={candidate?.t100_id_student?.t100_speciality}
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
            ) : !user.length ? (
              <ProfileCandidate user={data[0]?.t100_id_student} isApplying={true} />
              ) : (
                <ProfileCandidate user={user[0]} isApplying={true} />
            )}
          </div>
        </article>
      </main>
    </section>
  );
};

export default Accordion;

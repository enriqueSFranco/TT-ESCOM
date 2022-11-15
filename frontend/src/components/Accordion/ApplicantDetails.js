import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetApplicationJob } from "hooks";
import CustomAvatar from "components/Avatar/Avatar";
import Chip from "components/Chip/Chip";
import ProfileCandidate from "components/Card/ProfileCandidate";
import { TiArrowBackOutline } from "react-icons/ti";
import { HiUserCircle } from 'react-icons/hi'
import styles from "./Accordion.module.css";
import Button from "components/Button/Button";

// TODO: Pasar a un componente
const CardApplicantDetails = ({ name, interestJob, speciality, picture, onClick }) => {
  return <article style={{
    height: "200px",
    backgroundColor: "#fff",
    borderRadius: '5px',
    display: 'grid',
    gridTemplateColumns: '160px 1fr',
    alignContent: 'center',
    gap: '1rem'
  }}>
    <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F8FD', height: '200px'}}>
      <CustomAvatar height='90px' width="90px" picture={picture} username={name} />
      <Button text="Ver perfil" bgColor="#397DFC" color="#fff" icon={<HiUserCircle />} width="7" height='2' onClick={onClick} />
    </div>

    <div>
      <p>Nombre: <span>{name}</span></p>
      <p>{interestJob ? `Puesto de interes: ${interestJob}` : `Especialidad: ${speciality}`}</p>
    </div>
  </article>;
};

// TODO: Pasar a un component
const NoApplications = () => {
  return (
    <>
      <h1>dfjlkj</h1>
    </>
  )
}

const Accordion = () => {
  const { t200_id_vacant } = useParams();
  const [viewApplicantDetails, setViewApplicantDetails] = useState(false)
  const [data] = useGetApplicationJob({ idVacant: t200_id_vacant });

  const handleRender = () => setViewApplicantDetails(true)

  if (!data) return null;

  console.log(data);

  return (
    <section>
      <div className={styles.headerJob}>
        <Link to="/dashboard" className={styles.goToJobs}>
          <TiArrowBackOutline /> Ir a mis vacantes
        </Link>
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
              onClick={handleRender}
              name={candidate?.t100_id_student?.t100_name}
              interestJob={candidate?.t100_id_student?.t100_interest_job}
              speciality={candidate?.t100_id_student?.t100_speciality}
              picture={candidate?.t100_id_student?.t100_profile_picture}
            />
          ))}
        </aside>
        <article className={styles.application_details}>
          {/* detalles del candidato */}
          <div style={{position: 'relative'}}>
            {
              !data.length ? (<NoApplications />) : (viewApplicantDetails ? <ProfileCandidate user={data[0]?.t100_id_student} /> : <ProfileCandidate user={data[0]?.t100_id_student} />)
            }
          </div>
        </article>
      </main>
    </section>
  );
};

export default Accordion;

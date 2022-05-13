import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getJob, getApplicationsJobs } from "services/jobs/index";
import Table from "components/Table/Table";
import TableRow from "components/Table/TableRow";
import { TiArrowBackOutline } from "react-icons/ti";
import styles from "./Accordion.module.css";
import RowExpand from "components/Table/RowExpand";

const Accordion = () => {
  const [job, setJob] = useState(null);
  const [user, setUser] = useState(null);
  const { t200_id_vacant } = useParams();

  useEffect(() => {
    getJob(t200_id_vacant).then((response) => {
      // console.log(response);
      setJob(response);
    });
  }, [t200_id_vacant]);

  useEffect(() => {
    getApplicationsJobs(t200_id_vacant)
      .then((response) => {
        console.log(response);
        setUser(response);
      })
      .catch((error) => console.log(error));
  }, [t200_id_vacant]);

  // console.log(user);

  return (
    <>
      <article className={styles.summaryJob}>
        <header className={styles.headerJob}>
          <Link to="/mis-vacantes" className={styles.goToJobs}>
            <TiArrowBackOutline /> Ir a mis vacantes
          </Link>
          {job && (
            <ul className={styles.listItem}>
              <li className={styles.item}>{job[0]?.t200_job}</li>
              <li className={styles.item}>$ Negociable</li>
              <li className={styles.item}>Remoto</li>
              <li className={styles.item}>Tipo de contratacion:</li>
              <li className={styles.item}>
                Timepo completo de 9:00am - 6:00pm, por tiempo indefinido
              </li>
            </ul>
          )}
        </header>
        <div className={styles.descriptionJob}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          sapiente dicta repudiandae excepturi doloribus qui nemo molestiae
          iste, necessitatibus totam nulla laboriosam et ex consectetur harum
          quis, aspernatur officia nesciunt.
        </div>
      </article>
      <Table>
        {user &&
          user?.map((el, index) => (
            
            <TableRow key={index} user={el} idSkills={el?.t100_id_student?.t100_id_student} index={index}>
              <RowExpand user={el} />
            </TableRow>
          ))}
      </Table>
    </>
  );
};

export default Accordion;

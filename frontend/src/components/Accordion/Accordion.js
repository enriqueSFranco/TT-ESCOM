import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getJob, getApplicationsJobs } from "services/jobs/index";
import Table from "components/Table/Table";
import TableRow from "components/Table/TableRow";
import { TiArrowBackOutline } from "react-icons/ti";
import styles from "./Accordion.module.css";
import { numberFormat } from "utils/numberFormat";
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
              <li className={styles.item}>{`$ ${numberFormat(job[0]?.t200_min_salary).slice(4,)}MXN
                                    ${job[0]?.t200_max_salary==0 ? "" : `a ${numberFormat(job[0]?.t200_max_salary).slice(4,)}MXN `}
                                     al mes ${job[0]?.t200_salary_negotiable ? "Negociable" : "No negociable"}`}</li>
              <li className={styles.item}>{job[0]?.c214_id_modality?.c214_description}</li>
              <li className={styles.item}>{`Tipo de contratacion: ${job[0]?.c208_id_contract?.c208_description}`}</li>
              <li className={styles.item}>{`Lunes a Viernes de ${job[0]?.t200_check_time} a ${job[0]?.t200_closing_hour}`}</li>
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

import { useEffect, useContext, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSticky } from "hooks/useSticky";
import { useModal } from "hooks/useModal";
import { getJob } from "services/jobs/index";
import { applyJob } from "services/students/index";
import { numberFormat } from "utils/numberFormat";
import AuthContext from "context/AuthContext";
import Modal from "components/Modal/Modal";
import Chip from "@mui/material/Chip";
import Skeleton from "../../Skeleton/Skeleton";
import { MdBusinessCenter } from "react-icons/md";
import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import * as IoIcon from "react-icons/io";
import styles from "./CardJobDetails.module.css";
import Confirm from "components/Alert/Confirm/Confirm";

const JobCardDetails = () => {
  let elementRef = useRef(null);
  let isSticky = useSticky(100, elementRef);
  let { t200_id_vacant } = useParams();
  let navigate = useNavigate();
  let now = new Date();
  const { token } = useContext(AuthContext);
  const [isOpen, openModal, closeModal] = useModal();
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getJob(t200_id_vacant)
      .then((response) => {
        setLoading(false);
        setJob(response);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [t200_id_vacant]);

  const handleApplyJob = async () => {
    console.log("ya puedes aplicar");
    const response = await applyJob({
      t200_id_vacant,
      t100_id_student: token?.user?.user_id,
      t201_cv: null,
      c205_id_application_state: 1,
      t201_date_application:
        now.getFullYear() + "-" + now.getMonth() + "-" + now.getDay(),
    });
    console.log(response.data);
  };

  if (!job) return null;
  let typeUser = token?.user?.user_type;
  console.log(typeUser);

  return (
    <>
      {loading ? (
        <Skeleton type="businessDetails" />
      ) : (
        <div
          ref={elementRef}
          className={`${styles.wrapper} ${styles.positionSticky}`}
        >
          <header className={`${styles.header} container`}>
            <div className={`${styles.flex}`}>
              <h1 className={styles.title}>
                {job[0]?.t200_job ?? "Sin nombre de vacante"}
              </h1>
            </div>
            <div className={`${styles.flex}`}>
              <div style={{ width: "500px" }}>
                <ul className={`${styles.flex} ${styles.tagsBody}`}>
                  <li className={styles.flex}>
                    <Chip
                      label={job[0]?.t300_id_company?.t300_name ?? "Anonima"}
                      icon={<FaIcon.FaBuilding />}
                    />
                  </li>
                  <li className={styles.flex}>
                    <Chip
                      label={
                        `${numberFormat(job[0]?.t200_max_salary).slice(
                          4
                        )} MXN` ?? "No especificado"
                      }
                      icon={
                        <MdIcon.MdOutlineAttachMoney
                          style={{ fontSize: "1rem" }}
                        />
                      }
                    />
                  </li>
                  <li className={styles.flex}>
                    <Chip
                      label={
                        job[0]?.t200_home_ofice
                          ? `Remoto`
                          : "Presencial" ?? "No especificado"
                      }
                      icon={
                        job[0]?.t200_home_ofice ? (
                          <IoIcon.IoMdHome style={{ fontSize: "1rem" }} />
                        ) : (
                          <MdBusinessCenter style={{ fontSize: "1rem" }} />
                        )
                      }
                    />
                  </li>
                </ul>
                <p>
                  Tiempo completo de 9:00am - 6:00 pm, por tiempo indefinido
                </p>
              </div>
              <div className={styles.flex}>
                {token !== null ? (
                  <>
                    {typeUser === "STUDENT" ? (
                      <button
                        onClick={openModal}
                        className={styles.btnApplyEmployment}
                      >
                        <IoIcon.IoIosRocket />
                        <span>Aplicar</span>
                      </button>
                    ) : (
                      <button disabled>
                        <IoIcon.IoIosRocket />
                        <span>Aplicar</span>
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => navigate("/alumno")}
                    className={styles.btnApplyEmployment}
                  >
                    <IoIcon.IoIosRocket />
                    <span>Aplicar</span>
                  </button>
                )}
              </div>
            </div>
          </header>
          <article className={`container ${styles.body}`}>
            <p>
              <span>Formacion: </span>
              ingenieria industrial, administracion o similar
            </p>
            <p>
              idiomas: <span>ingles nivel intermedio-avanzado</span>
            </p>
            <p>
              software: <span>office, visio, acrobat</span>
            </p>
            <div>
              <p>{job[0]?.t200_description ?? "Sin datos"}</p>
            </div>
            <div className={styles.requirements}>
              <h3>Requerimientos de la vacante</h3>
              {job[0]?.t200_requirements}
            </div>
            <div>
              <h3>OFRECEMOS</h3>
              <p>
                Salario Competitivo,más prestaciones superiores a las que marca
                la ley como: 30 días de Aguinaldo, 10% en Vales de Despensa, 13%
                de Fondo de Ahorro, 12 días de vacaciones al primer año, Prima
                Vacacional, Seguro de Gastos Médicos Mayores, Seguro de Vida
              </p>
              <p>
                La contratación es directamente por la empresa. Contrato de
                planta
              </p>
            </div>
            <div>
              <h3>Postúlate</h3>
              <p>
                Si estás interesado enla vacante y cubres con el perfil
                requerido postulate por este medio, manda tu CV español e ingles
                por correo electrónico o comunícate vía telefónica 812074 6435
              </p>
              <p>
                Tipo de puesto:<span>Tiempo completo, Indefinido</span>
              </p>
              <p>
                Salario:{" "}
                <span>
                  ${job[0]?.t200_max_salary ?? "No especificado"} al mes
                </span>
              </p>
            </div>
            <div>
              <h3>Beneficios</h3>
              {job[0]?.t200_benefits}
            </div>
            <div>
              <p>
                Horario:{" "}
                <span>
                  {job[0]?.t200_check_time} a {job[0]?.t200_closing_hour}
                </span>
              </p>
            </div>
            <div>
              <h3>Experiencia</h3>
              <p>{job[0]?.c207_id_experience.c207_description}</p>
            </div>
            <div>
              <h3>Idioma</h3>
              <p>Inglés (Obligatorio)</p>
            </div>
          </article>
        </div>
      )}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Confirm applyJob={handleApplyJob} job={job[0]?.t200_job} />
      </Modal>
    </>
  );
};

export default JobCardDetails;

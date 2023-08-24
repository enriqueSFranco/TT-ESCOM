import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useModal } from "hooks/useModal";
import { getJob, getJobRequirements } from "services/jobs/index";
import { applyJob } from "services/students/index";
import { uuid } from "utils/uuid";
import { numberFormat } from "utils/numberFormat";
import { useAuth } from "context/AuthContext";
import Modal from "components/Modal/Modal";
import Chip from "@mui/material/Chip";
import Skeleton from "../../Skeleton/Skeleton";
import { MdBusinessCenter } from "react-icons/md";
import * as FaIcon from "react-icons/fa";
import * as MdIcon from "react-icons/md";
import * as IoIcon from "react-icons/io";
import { BiTimeFive } from "react-icons/bi";
import styles from "./CardJobDetails.module.css";
import Confirm from "components/Alert/Confirm/Confirm";

const CardJobDetails = () => {
  let elementRef = useRef(null);
  let { t200_id_vacant } = useParams();
  let navigate = useNavigate();
  const { token } = useAuth();
  const [isOpen, openModal, closeModal] = useModal();
  const [requirements, setRequirements] = useState(null);
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isApplyJob, setIsApplyJob] = useState({});
  let now = new Date();
  let typeUser = token?.user?.user_type;

  useEffect(() => {
    setLoading(true);
    getJob(t200_id_vacant)
      .then((response) => {
        setLoading(false);
        setJob(response);
        setIsApplyJob({});
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [t200_id_vacant]);

  useEffect(() => {
    getJobRequirements(t200_id_vacant)
      .then((response) => {
        if (response.status === 200) {
          const { data } = response;
          setRequirements(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [t200_id_vacant]);

  const handleApplyJob = async () => {
    const response = await applyJob({
      t200_id_vacant,
      t100_id_student: token?.user?.user_id,
      c205_id_application_state: 1,
      t201_date_application:
        now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate(),
    });
    if (response.status === 201)
      setIsApplyJob({
        succes: response.status,
        message: response.data.message,
      });
    else
      setIsApplyJob({
        success: response.status,
        message: response.data.message,
      });
  };

  if (!job && !requirements) return null;

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
                      icon={<FaIcon.FaBuilding style={{ color: "#78909c" }} />}
                    />
                  </li>
                  <li className={styles.flex}>
                    <Chip
                      label={
                        `${numberFormat(job[0]?.t200_max_salary).replace(
                          ".00",
                          ""
                        )}` ?? "No especificado"
                      }
                      icon={
                        <MdIcon.MdOutlineAttachMoney
                          style={{ fontSize: "1rem", color: "green" }}
                        />
                      }
                    />
                  </li>
                  <li className={styles.flex}>
                    <Chip
                      label={job[0]?.c214_id_modality?.c214_description}
                      icon={
                        job[0]?.c214_id_modality?.c214_description ===
                          "Remoto" ? (
                          <IoIcon.IoMdHome
                            style={{ fontSize: "1rem", color: "#028dd4" }}
                          />
                        ) : (
                          <MdBusinessCenter
                            style={{ fontSize: "1rem", color: "#78909c" }}
                          />
                        )
                      }
                    />
                  </li>
                </ul>
                <p className={styles.paragraph}>
                  Ubicacion:{" "}
                  {`${job[0]?.t200_municipality === null ||
                    job[0]?.t200_municipality === ""
                    ? ""
                    : job[0]?.t200_municipality + ","
                    } 
                    ${job[0]?.t200_state === null || job[0]?.t200_state === ""
                      ? ""
                      : job[0]?.t200_state + ","
                    }
                    ${job[0]?.t200_locality === null ||
                      job[0]?.t200_locality === ""
                      ? ""
                      : job[0]?.t200_locality + ","
                    }` ?? "No especificada"}
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
            <p className={styles.paragraph}>
              Perfil: <span>{job[0]?.c206_id_profile?.c206_description}</span>
            </p>
            <p className={styles.paragraph}>
              Tipo de contratacion:{" "}
              <span>{job[0]?.c208_id_contract?.c208_description}</span>
            </p>
            <div>
              <h3>DESCRIPCION DE LA VACANTE</h3>
              <p className={styles.paragraph}>
                {job[0]?.t200_description ?? "Sin datos"}
              </p>
            </div>
            <div>
              <h3>OFRECEMOS</h3>
              <p className={styles.paragraph}>{`${job[0]?.t200_benefits !== ""
                ? job[0]?.t200_benefits
                : "No hay beneficios para esta vacante"
                }`}</p>
            </div>
            <div>
              <p className={styles.paragraph}>
                Salario:{" "}
                <span>
                  $
                  {`${job[0]?.t200_min_salary} - ${job[0]?.t200_max_salary ?? ""
                    }`}{" "}
                  al mes
                </span>
              </p>
            </div>
            <div>
              <p className={styles.paragraph}>
                <BiTimeFive /> Horario:{" "}
                <span>
                  {job[0]?.t200_check_time} a {job[0]?.t200_closing_hour}
                </span>
              </p>
            </div>
            <div>
              <h3>Experiencia</h3>
              <p className={styles.paragraph}>
                {job[0]?.c207_id_experience.c207_description}
              </p>
            </div>
            <div className={styles.wrapperRequirements}>
              <h3>Skills requeridas</h3>
              <ul className={styles.listRequirements}>
                {requirements?.map((requirement) => (
                  <li key={uuid()}>
                    <Chip
                      label={requirement?.c116_id_skill?.c116_description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      )}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <Confirm
          applyJob={handleApplyJob}
          isApplyJob={isApplyJob}
          job={job[0]?.t200_job}
        />
      </Modal>
    </>
  );
};

export default CardJobDetails;

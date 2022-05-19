import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "context/AuthContext";
import { useModal } from "hooks/useModal";
import { uuid } from "utils/uuid";
import { numberFormat } from "utils/numberFormat";
import Chip from "@mui/material/Chip";
import { GoTrashcan } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import {
  getJob,
  getApplicationsJobs,
  getVacantInfo,
} from "services/jobs/index";
import { getJobsForRecruiter } from "services/recruiter/index";
import ApplicationJob from "components/Card/ApplicationJob/ApplicationJob";
import ModalForm from "components/Modal/ModalVacants";
import FormPostJob from "components/Form/postJob/FormPostJob";
import ConfirmDelete from "components/Alert/Confirm/ConfirmDelete";
import { BiSearch } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";

import Candidate from "images/candidate.png";
import Application from "images/application.png";
import Review from "images/review.png";
import Steps from "images/steps.png";
import Reject from "images/reject.png";

import applicationsIcon from "images/applications.png";
import styles from "./PageHistory.module.css";
import burrito from "images/emoji_angustiado.jpg";
import * as GiIcon from "react-icons/gi";
import * as BsIcon from "react-icons/bs";
import * as MdIcon from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { deleteJob } from "services/jobs/index";

const vacantApplicationsData = {
  applications: 0,
  hired: 0,
  inProcess: 0,
  rejected: 0,
  unseen: 0,
};

const PageHistory = () => {
  const { token } = useContext(AuthContext);
  const { t200_id_vacant } = useParams();
  const [totalApplications, setTotalApplications] = useState([]);
  const [initialContent, setInitialContent] = useState(true);
  const [listJobs, setListJobs] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [isDeletedJob, setIsDeletedJob] = useState({});
  const [job, setJob] = useState(null);
  const [isOpenModalForm, openModalForm, closeModalForm] = useModal();
  let id = token?.user?.user_id;

  // efecto para obtener la liste de vacantes de un reclutador
  useEffect(() => {
    getJobsForRecruiter(id)
      .then((response) => {
        console.log(response.data);
        setListJobs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    if (t200_id_vacant !== undefined) {
      vacantApplicationsData.hired = 0;
      vacantApplicationsData.inProcess = 0;
      vacantApplicationsData.rejected = 0;
      vacantApplicationsData.unseen = 0;
      getApplicationsJobs(t200_id_vacant)
        .then((response) => {
          //console.log(response);
          setTotalApplications(response.length);
        })
        .catch((error) => console.log(error));
    }
  }, [t200_id_vacant]);

  // efecto para obtener los detalles de una vacante en especifico
  useEffect(() => {
    if (t200_id_vacant !== undefined) {
      getJob(t200_id_vacant)
        .then((response) => {
          console.log(response);
          setJob(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [t200_id_vacant]);

  // efecto para obtener los detalles de las aplicaciones de una vacante en especifico
  useEffect(() => {
    if (t200_id_vacant !== undefined) {
      getVacantInfo(t200_id_vacant)
        .then((response) => {
          //console.log(response);
          response.map((data) => {
            //console.log(data?.id_state);
            switch (data?.id_state) {
              case 1:
                vacantApplicationsData.unseen = data?.total;
                break;
              case 2:
                vacantApplicationsData.inProcess = data?.total;
                break;
              case 3:
                vacantApplicationsData.rejected = data?.total;
                break;
              case 4:
                vacantApplicationsData.hired = data?.total;
                break;
              case 5:
                vacantApplicationsData.rejected = data?.total;
                break;
              case 6:
                vacantApplicationsData.rejected = data?.total;
                break;
              default:
                break;
            }
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [t200_id_vacant]);

  const handleInitialContent = () => {
    setInitialContent(false);
  };

  const setModal1 = () => {
    setModalType(1);
    openModalForm();
  };

  const setModal2 = () => {
    setModalType(2);
    openModalForm();
  };

  const handleDeleteJob = async () => {
    const response = await deleteJob(job[0]?.t200_id_vacant);
    console.log(response);
    if (response.status === 200)
      setIsDeletedJob({ succes: response.status, message: response.message });
    else
      setIsDeletedJob({ success: response.status, message: response.message });
  };

  return (
    <>
      <section className={styles.wrapper}>
        {/* seccion izquierda */}
        <aside className={styles.sidebar}>
          <header className={styles.header}>
            <form>
              <div className={styles.boxSearch}>
                <BiSearch />
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Buscar vacante"
                  className={styles.inputSearch}
                />
              </div>
            </form>
            <button
              className={`${styles.btnAddJob} ${styles.tooltip}`}
              onClick={setModal1}
            >
              <GrAdd />
              <span className={styles.tooltipBox}>
                Agregar una nueva vacante.
              </span>
            </button>
          </header>
          {/* lista de vacantes */}
          {listJobs?.length > 0 ? (
            <article className={styles.wrapperListJobs}>
              {listJobs &&
                listJobs?.map((listJobs) => (
                  <Link
                    to={`${listJobs?.t200_id_vacant}`}
                    key={uuid()}
                    style={{ color: "#000" }}
                    onClick={handleInitialContent}
                  >
                    <ApplicationJob
                      nameJob={listJobs?.t200_job}
                      salary={listJobs?.t200_max_salary}
                      madality={listJobs?.t200_home_ofice}
                      nameBusisness={listJobs?.t300_id_company?.t300_name}
                      typeBusiness={
                        listJobs?.t300_id_company?.t300_bussiness_name
                      }
                      workingHours={`Lunes a Viernes de ${listJobs?.t200_check_time} a ${listJobs?.t200_closing_hour}`}
                      vacantState={
                        listJobs?.c204_id_vacant_status?.c204_description
                      }
                    />
                  </Link>
                ))}
            </article>
          ) : (
            <article className={`container ${styles.notJobs}`}>
              <div className={styles.bodyNotJobs}>
                <h2>No tienes vacantes publicadas recientemente</h2>
                <img src={burrito} alt="burrito_ipn" />
              </div>
            </article>
          )}
        </aside>
        <article className={styles.contentDetailsJob}>
          {/* seccion derecha */}
          <div className={styles.containerRight}>
            {/* a qui va la card que muestra los detalles de la vacante */}
            {!initialContent ? (
              <article className={`container ${styles.wrapperDetailsJob}`}>
                {job && (
                  <>
                    <header className={styles.headerRight}>
                      <nav className={styles.nav}>
                        <div className={`${styles.box}`}>
                          <figure className={styles.applicationsBox}>
                            <img src={Application} alt="candidatos" />
                            <figcaption>
                              <span className={styles.notify}>
                                {totalApplications >= 9
                                  ? "+9"
                                  : totalApplications}{" "}
                                Recibida(s)
                              </span>
                            </figcaption>
                          </figure>
                          <Link to={`/solicitudes/${t200_id_vacant}`}>
                            Ver postulaciones
                          </Link>
                        </div>

                        <div className={`${styles.box}`}>
                          <figure className={styles.applicationsBox}>
                            <img src={Candidate} alt="contratados" />
                            <figcaption>
                              <span className={styles.notify}>
                                {vacantApplicationsData?.hired}/
                                {job[0]?.t200_vacancy} Contratados
                              </span>
                            </figcaption>
                          </figure>
                          <Link to={`/solicitudes/${t200_id_vacant}`}>
                            Ver Contratados
                          </Link>
                        </div>

                        <div className={`${styles.box}`}>
                          <figure className={styles.applicationsBox}>
                            <img src={Steps} alt="enSeguimiento" />
                            <figcaption>
                              <span className={styles.notify}>
                                {vacantApplicationsData?.inProcess} En
                                seguimiento
                              </span>
                            </figcaption>
                          </figure>
                          <Link to={`/solicitudes/${t200_id_vacant}`}>
                            Ver Seguimiento
                          </Link>
                        </div>

                        <div className={`${styles.box}`}>
                          <figure className={styles.applicationsBox}>
                            <img src={Reject} alt="enSeguimiento" />
                            <figcaption>
                              <span className={styles.notify}>
                                {vacantApplicationsData?.rejected} Descartadas
                              </span>
                            </figcaption>
                          </figure>
                          <Link to={`/solicitudes/${t200_id_vacant}`}>
                            Ver Descartadas
                          </Link>
                        </div>

                        <div className={`${styles.box}`}>
                          <figure className={styles.applicationsBox}>
                            <img src={Review} alt="enSeguimiento" />
                            <figcaption>
                              <span className={styles.notify}>
                                {vacantApplicationsData?.unseen} En Revision
                              </span>
                            </figcaption>
                          </figure>
                          <Link to={`/solicitudes/${t200_id_vacant}`}>
                            Ver Sin Consultar
                          </Link>
                        </div>
                      </nav>
                    </header>
                    
                    <div className={styles.wrapperCard}>
                      <article className={`${styles.card}`}>
                        <header className={styles.cardHeader}>
                          <h3 className={`${styles.nameCompany}`}>
                            {job[0]?.t200_job}
                          </h3>
                        </header>
                        <div className={styles.wrapperTags}>
                          <Chip
                            label={`${numberFormat(
                              job[0]?.t200_min_salary
                            ).slice(4)}MXN
                                    ${
                                      job[0]?.t200_max_salary === 0
                                        ? ""
                                        : `a ${numberFormat(
                                            job[0]?.t200_max_salary
                                          ).slice(4)}MXN `
                                    }
                                    al mes ${
                                      job[0]?.t200_salary_negotiable
                                        ? "Negociable"
                                        : "No negociable"
                                    }`}
                            // size="small"
                            icon={<GiIcon.GiMoneyStack style={{color: "green", fontSize:"1rem"}} />}
                          />

                          <Chip
                            label={`Modalidad: ${job[0]?.c214_id_modality?.c214_description} `}
                            // size="small"
                            icon={<MdIcon.MdBusinessCenter style={{color: "#78909c", fontSize:"1rem"}} />}
                          />

                          <Chip
                            label={`Fecha de cierre programada: ${job[0]?.t200_close_date}`}
                            // size="small"
                            icon={<BsIcon.BsCalendarDate style={{color: "red", fontSize:"1rem"}} />}
                          />
                        </div>
                        {totalApplications === 0 ? (
                          <div className={styles.actions}>
                            <button>
                              <MdEdit className={styles.editAction} />
                            </button>
                            <button className={`${styles.btnTrash}`}>
                              <GoTrashcan
                                className={styles.deleteAction}
                                onClick={setModal2}
                              />
                            </button>
                          </div>
                        ) : (
                          <div className={styles.actions}>
                            <button className={`${styles.btnTrash}`}>
                              <GoTrashcan
                                className={styles.deleteAction}
                                onClick={setModal2}
                              />
                            </button>
                          </div>
                        )}
                        {/* Descripcion de la vacante */}
                          <div className={styles.summary}>
                            <p className={`${styles.lineClamp}`}>
                              {job[0]?.t200_description}
                            </p>
                          </div>
                      </article>
                    </div>
                  </>
                )}
              </article>
            ) : (
              <div className={styles.noContentJob}>
                <figure>
                  <figcaption>
                    Selecciona una vacante para ver sus detalles
                    <br />
                    No hay nada seleccionado.
                  </figcaption>
                  <img
                    src={applicationsIcon}
                    alt="iconJob"
                    className={styles.image}
                  />
                </figure>
              </div>
            )}
          </div>
        </article>
      </section>
      {modalType === 1 || modalType === 2 ? (
        modalType === 1 ? (
          <ModalForm isOpen={isOpenModalForm} closeModal={closeModalForm}>
            <FormPostJob />
          </ModalForm>
        ) : modalType === 2 ? (
          <ModalForm isOpen={isOpenModalForm} closeModal={closeModalForm}>
            <ConfirmDelete
              deleteJob={handleDeleteJob}
              isDeletedJob={isDeletedJob}
              job={job[0]?.t200_job}
            />
          </ModalForm>
        ) : null
      ) : null}
    </>
  );
};

export default PageHistory;

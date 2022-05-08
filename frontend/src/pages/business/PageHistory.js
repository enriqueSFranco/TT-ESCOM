import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthContext from "context/AuthContext";
import { useModal } from "hooks/useModal";
import { uuid } from "utils/uuid";
import { numberFormat } from "utils/numberFormat";
import Chip from "@mui/material/Chip";
import { getJob, getApplicationsJobs } from "services/jobs/index";
import { getJobsForRecruiter } from "services/recruiter/index";
import ApplicationJob from "components/Card/ApplicationJob/ApplicationJob";
import ModalForm from "components/Modal/ModalForm";
import FormPostJob from "components/Form/postJob/FormPostJob";
import { BiSearch } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import styles from "./PageHistory.module.css";
import burrito from "images/emoji_donador.jpg";
import * as GiIcon from "react-icons/gi";
import * as BsIcon from "react-icons/bs";
import * as MdIcon from "react-icons/md";

const PageHistory = () => {
  const { token } = useContext(AuthContext);
  const { t200_id_vacant } = useParams();
  const [totalApplications, setTotalApplications] = useState(0);
  const [initialContent, setInitialContent] = useState(true);
  const [listJobs, setListJobs] = useState(null);
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
      getApplicationsJobs(t200_id_vacant)
        .then((response) => {
          console.log(response);
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
          setJob(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [t200_id_vacant]);

  const handleInitialContent = () => {
    setInitialContent(false);
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
            <button className={styles.btnAddJob} onClick={openModalForm}>
              <GrAdd />
            </button>
          </header>
          {/* lista de vacantes */}
          {listJobs?.length > 0?(
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
                    typeBusiness=""
                    workingHours="Lunes a Viernes de 9:00am - 6:30pm"
                  />
                </Link>
              ))}
          </article>):
          (<article className={`container ${styles.notJobs}`}>
          <div className={styles.bodyNotJobs}>
            <h2>No tienes vacantes publicadas recientemente</h2>
            <img src={burrito} alt="burrito_ipn" />
          </div>
        </article>)}
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
                        <div className={`${styles.box} ${styles.applications}`}>
                          <i>
                            <FiUsers />
                          </i>
                          <h3><span className={styles.notify}>{totalApplications >= 9 ? "+9" : totalApplications}</span> Recibida(s)</h3>
                          <Link to={`/solicitudes/${t200_id_vacant}`}>
                            Ver postulaciones
                          </Link>
                        </div>
                        <div className={`${styles.box}`}>
                          <span>2/{job[0]?.t200_vacancy}</span>
                          <h3>Contratados</h3>
                        </div>
                        <div className={`${styles.box}`}>
                          <span>8</span>
                          <h3>En seguimiento</h3>
                        </div>
                        <div className={`${styles.box}`}>
                          <span>3</span>
                          <h3>Descartadas</h3>
                        </div>
                        <div className={`${styles.box}`}>
                          <span>8</span>
                          <h3>Sin consultar</h3>
                        </div>
                      </nav>
                    </header>
                    <div>
                      <article className={`${styles.card}`}>
                        <header className={styles.cardHeader}>
                          <h3 className={`${styles.nameCompany}`}>{job[0]?.t200_job}</h3>
                        </header>
                          <div className={styles.wrapperTags}>
                            <Chip label={`Modalidad: ${job?.t200_home_ofice ? "Remoto" : "Presencial"}`} size="small" icon={<MdIcon.MdBusinessCenter />} />

                            <Chip label={`Sueldo: ${numberFormat(job?.t200_min_salary).slice(4,)}MXN a ${numberFormat(job?.t200_max_salary).slice(4,)}MXN al mes`} size="small" icon={<GiIcon.GiMoneyStack />} />

                            <Chip label={`Fecha de publicacion: ${job?.t200_publish_date}`} size="small" icon={<BsIcon.BsCalendarDate />} />
                          </div>                          
                       
                        <div>
                          <div className={styles.summary}>
                            <p className={`${styles.lineClamp}`}>{job[0]?.t200_description}</p>
                          </div>
                          
                        </div>
                      </article>
                    </div>
                  </>
                )}
              </article>
            ) : (
                <div>
                  <h3>Selecciona una vacante para ver sus detalles</h3>
                  <h4>No hay nada seleccionado.</h4>
                </div>
            )}
          </div>
        </article>
      </section>
      <ModalForm isOpen={isOpenModalForm} closeModal={closeModalForm}>
        <FormPostJob />
      </ModalForm>
    </>
  );
};

export default PageHistory;

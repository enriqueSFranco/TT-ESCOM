import { useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext";
import { useModal } from "hooks/useModal";
import { Link, Outlet } from "react-router-dom";
import { uuid } from "utils/uuid";
import CardJob from "components/Card/CardJob/CardJob";
import { getJobsForRecruiter } from "services/recruiter/index";
import ApplicationJob from "components/Card/ApplicationJob/ApplicationJob";
import { BiSearch } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import styles from "./PageHistory.module.css";
import ModalForm from "components/Modal/ModalForm";
import burrito from "images/emoji_donador.jpg"
import FormPostJob from "components/Form/postJob/FormPostJob";

const PageHistory = () => {
  const { token } = useContext(AuthContext);
  const [listJobs, setListJobs] = useState(null);
  const [isOpenModalForm, openModalForm, closeModalForm] = useModal();
  let id = token?.user?.user_id;

  useEffect(() => {
    getJobsForRecruiter(id)
      .then(response => {
        // console.log(response.data);
        setListJobs(response.data)
      })
      .catch(error => {
        console.error(error);
      })
  }, [id]);

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
            {
              listJobs && (
                listJobs?.map(listJobs => (
                  <ApplicationJob 
                    key={uuid()}
                    nameJob={listJobs?.t200_job}
                    salary={listJobs?.t200_max_salary}
                    madality={listJobs?.t200_home_ofice}
                    nameBusisness={listJobs?.t300_id_company?.t300_name}
                    typeBusiness=""
                    workingHours="Lunes a Viernes de 9:00am - 6:30pm"
                  />
                ))
              )
            }
          </article>)
          :
        (<article className={`container ${styles.notJobs}`}>
          <div className={styles.bodyNotJobs}>
            <h2>No tienes vacantes publicadas recientemente</h2>
            <img src={burrito} alt="burrito_ipn" />
          </div>
        </article>)}
          

          {/*<article className={`${styles.wrapper} ${styles.grid}`}>
          <div style={{ width: "500px" }}>
             {listJobs?.map((job) => (
              <Link
                to={`vacante/${job?.t200_id_vacant}`}
                key={job?.t200_id_vacant}
              >
                <CardJob job={job} />
              </Link>
            )
            )}
          </div>
          <Outlet />
        </article>*/}

        </aside>
        <article>
          {/* seccion derecha */}
        </article>
      </section>
      <ModalForm isOpen={isOpenModalForm} closeModal={closeModalForm}>
        <FormPostJob />
      </ModalForm>
    </>
  );
};

export default PageHistory;

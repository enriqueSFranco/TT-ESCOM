import { useContext, useEffect, useState } from "react";
import AuthContext from "context/AuthContext";
import { useModal } from "hooks/useModal";
import { uuid } from "utils/uuid";
import { getJobsForRecruiter } from "services/recruiter/index";
import ApplicationJob from "components/Card/ApplicationJob/ApplicationJob";
import { BiSearch } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import styles from "./PageHistory.module.css";
import ModalForm from "components/Modal/ModalForm";
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
          </article>
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

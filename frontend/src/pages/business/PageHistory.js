import { useModal } from "hooks/useModal";
import { uuid } from "utils/uuid";
import ApplicationJob from "components/Card/ApplicationJob/ApplicationJob";
import { BiSearch } from "react-icons/bi";
import { GrAdd } from "react-icons/gr";
import styles from "./PageHistory.module.css";
import ModalForm from "components/Modal/ModalForm";
import FormPostJob from "components/Form/postJob/FormPostJob";

const PageHistory = () => {

  const [isOpenModalForm, openModalForm, closeModalForm] = useModal();

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
            <ApplicationJob 
              key={uuid()}
              nameJob="Desarrollador Web"
              salary="30000"
              madality="Remoto"
              nameBusisness="Facebook"
              typeBusiness=""
              workingHours="Lunes a Viernes de 9:00am - 6:30pm"
            />
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

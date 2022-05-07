import { Outlet } from "react-router-dom";
import { useModal } from "hooks/useModal";
import Modal from "components/Modal/Modal";
import AboutMe from "components/Card/AboutMe/AboutMe";
import MenuStudent from "components/Menu/MenuStudent";
import CardProfileStudent from "components/Card/CardStudent/CardProfileStudent";
import styles from "./PageProfileStudent.module.css";

const PageProfileStudent = () => {
  const [isOpenModalProject, , closeModalProject] = useModal();

  return (
    <>
      <section className={`${styles.wrapperProfile} container`}>
        <article className={`${styles.grid}`}>
          <div className={styles.profileCard}>
            <CardProfileStudent />
          </div>
          <div className={styles.profileAboutMe}>
            <AboutMe />
          </div>
          <div className={styles.profileSummary}>
            <MenuStudent />
            <Outlet />
          </div>
        </article>
      </section>
      <Modal isOpen={isOpenModalProject} closeModal={closeModalProject}>
        <h1>Experiencia por proyecto</h1>
      </Modal>
    </>
  );
};

export default PageProfileStudent;

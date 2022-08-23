import { Outlet } from "react-router-dom";
import AboutMe from "components/Card/AboutMe/AboutMe";
import MenuStudent from "components/Menu/MenuStudent";
import CardProfileStudent from "components/Card/CardStudent/CardProfileStudent";
import LayoutHome from "Layout/LayoutHome";
import styles from "./PageProfileStudent.module.css";

const PageProfileStudent = () => {
  return (
    <LayoutHome>
      <div className={`${styles.grid}`}>
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
      </div>
    </LayoutHome>
  );
};

export default PageProfileStudent;

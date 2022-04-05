import { Outlet } from "react-router-dom";
import MenuStudent from "../../components/Menu/MenuStudent";
import CardProfileStudent from "../../components/Card/CardStudent/CardProfileStudent";
import styles from "./PageProfileStudent.module.css";

const PageProfileStudent = () => {
  return (
    <article className={`${styles.profile} container`}>
      <div className="row my-5">
        <div className="col">
          <CardProfileStudent />
        </div>
        <div className="col">
          <MenuStudent />
          <Outlet />
        </div>
      </div>
    </article>
  );
};

export default PageProfileStudent;
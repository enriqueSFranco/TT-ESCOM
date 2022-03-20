import { Outlet } from "react-router-dom";
import MenuStudent from "../components/Menu/MenuStudent";
import CardProfileStudent from "../components/Card/CardProfileStudent";
import styles from "./PageProfileStudent.module.css";

const PageProfileStudent = () => {
  return (
    <article className={`${styles.profile} container`}>
      <div className="row my-5">
        <div className="col">
          <CardProfileStudent />
        </div>
        <div className="col">
          {/* TODO: Pasar el menu a un componente */}
          <MenuStudent />
          <Outlet />
        </div>
      </div>
    </article>
  );
};

export default PageProfileStudent;

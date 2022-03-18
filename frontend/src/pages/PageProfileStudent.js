import CardProfileStudent from "../components/Card/CardProfileStudent";
<<<<<<< HEAD:frontend/src/pages/PageProfileStudent.js
import styles from "./PageProfileStudent.module.css";
=======
import CardDetailsStudent from "../components/AboutMe/AboutMe";
>>>>>>> be2c133aa9d6ef8ff503384a7ae4eaaeec025b1d:frontend/src/pages/PageDetailsUser.js

const PageProfileStudent = () => {
  return (
    <section className={`${styles.wrapperProfile} container`}>
      <div className="row align-items-stretch my-5">
        <div className="col">
          <CardProfileStudent />
        </div>
        <div className="col">
          {/* Componente details student */}
          <h5>Menu trabajando.....</h5>
          <CardDetailsStudent />
        </div>
      </div>
    </section>
  );
};

export default PageProfileStudent;

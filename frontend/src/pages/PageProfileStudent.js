import React from 'react';
import CardProfileStudent from "../components/Card/CardProfileStudent";
import styles from "./PageProfileStudent.module.css";
import CardDetailsStudent from "../components/AboutMe/AboutMe";

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

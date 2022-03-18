import CardProfileStudent from "../components/Card/CardProfileStudent";
import styles from "./PageProfileStudent.module.css";

const PageProfileStudent = () => {
  return (
    <section className={`${styles.wrapperProfile} container`}>
      <div className="row align-items-stretch my-5">
        <div className="col">
          <CardProfileStudent />
        </div>
        <div className="col">
          {/* Componente details student */}
          <h5>Detalles de estudiente</h5>
        </div>
      </div>
    </section>
  );
};

export default PageProfileStudent;

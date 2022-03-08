import { useForm } from "../hooks/useForm";
import JobCard from "../components/Card/JobCard";
import Input from "../components/Input/Input";
import Footer from "../components/Footer/Footer";
import db from "../api/db";
import * as FaIcon from "react-icons/fa";
import styles from "./PageHome.module.css";

const initialForm = {
  job: "",
  location: "",
};

const Home = () => {
  const { form, handleChange } = useForm(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("buscando...");
  };

  return (
    <section>
      <div className={`${styles.container__form} container`}>
        <h1 className={styles.container__title}>
          Encuentra el trabajo de tus sueños
        </h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={`${styles.container__input} mb-3 `}>
            <i className={styles.icon_left}>
              <FaIcon.FaBuilding />
            </i>
            <Input
              type="text"
              id="job"
              name="job"
              placeholder="Buscar un empleo"
              className={`${styles.input} ${styles.ti_24}`}
              value={form.job}
              onChange={handleChange}
            />
          </div>
          <div className={`${styles.container__input} mb-3`}>
            <i className={styles.icon_left}>
              <FaIcon.FaLocationArrow />
            </i>
            <Input
              type="text"
              name="location"
              id="location"
              placeholder="Ubicación"
              className={`${styles.input} ${styles.ti_24}`}
              value={form.location}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <Input type="submit" value="Buscar Vacante" className="btn btn-primary" />
          </div>
        </form>
      </div>
      <article className="container jobs">
        <h2 className="vacancy">Vacantes</h2>
        <div className="container__job-card">
          {db.map(
            ({
              id,
              company,
              img_company,
              type_vacancy,
              min_salary,
              max_salary,
              full_time,
              location,
            }) => (
              <JobCard
                key={id}
                company={company}
                type_vacancy={type_vacancy}
                min_salary={min_salary}
                max_salary={max_salary}
                full_time={full_time}
                location={location}
              />
            )
          )}
        </div>
      </article>
      <Footer />
    </section>
  );
};

export default Home;

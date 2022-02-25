import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useForm } from "../hooks/useForm";
import * as FaIcon from "react-icons/fa";
import JobCard from "../components/Card/JobCard";
import Input from "../components/Input/Input";
import db from "../api/db";
import "./PageHome.css";

const initialForm = {
  job: "",
  location: "",
};

const Home = () => {
  const { user } = useContext(AuthContext);
  const { form, handleChange } = useForm(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("buscando...");
  };

  return (
    <section>
      <div className="container container-form">
        {user ? (
          <div className="hero">
            <h3>Hola {user.username}</h3>
            <span>Busquemos el trabajo de tus sueños</span>
          </div>
        ) : (
          <h1 className="container__title">
            Encuentra el trabajo de tus sueños
          </h1>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3 container__input">
            <span className="icon-left">
              <FaIcon.FaBuilding />
            </span>
            <Input
              type="text"
              id="job"
              name="job"
              placeholder="Buscar un empleo"
              className="input ti-24"
              value={form.job}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 container__input">
            <span className="icon-left">
              <FaIcon.FaLocationArrow />
            </span>
            <Input
              type="text"
              name="location"
              id="location"
              placeholder="Ubicación"
              className="input ti-24"
              value={form.location}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <Input type="submit" value="Buscar" className="btn btn-primary" />
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
                img_company={img_company}
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
    </section>
  );
};

export default Home;

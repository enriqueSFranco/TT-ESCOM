import React from "react";
import { useForm } from "../hooks/useForm";
import * as FaIcon from "react-icons/fa";
import "./PageHome.css";
import JobCard from "../components/Card/JobCard";

const initialForm = {
  job: "",
  location: "",
};

const validateForm = () => {};

const Home = () => {
  const { form, handleChange } = useForm(initialForm, validateForm);

  return (
    <section>
      <div className="container search__job">
        <h1 className="container__title">Encuentra el trabajo de tus seños</h1>
        <form>
          <label htmlFor="job" className="htmlF-label">
            Vacante
          </label>
          <div className="mb-3 container__input">
            <span className="icon">
              <FaIcon.FaBuilding />
            </span>
            <input
              type="text"
              id="job"
              name="job"
              className="form-control ti-16"
              value={form.job}
              onChange={handleChange}
            />
          </div>
          <label htmlFor="location" className="htmlF-label">
            Ubicacion
          </label>
          <div className="mb-3 container__input">
            <span className="icon">
              <FaIcon.FaLocationArrow />
            </span>
            <input
              type="text"
              name="location"
              id="location"
              className="form-control ti-16"
              value={form.location}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <input type="submit" value="Buscar" className="btn btn-primary" />
          </div>
        </form>
      </div>
      <div className="separator"></div>
      <article className="container jobs">
        <h2>Vacantes</h2>
        <div className="container__job-card">
          <JobCard />
        </div>
      </article>
    </section>
  );
};

export default Home;

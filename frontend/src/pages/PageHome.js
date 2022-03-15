import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { useFetch } from "../hooks/useFetch";
import Input from "../components/Input/Input";
import Loader from "../components/Loader/Loader";
import JobList from "../components/Card/CardJobList";
import Footer from "../components/Footer/Footer";
import * as FaIcon from "react-icons/fa";
import styles from "./PageHome.module.css";


let initialForm = {
  job: "",
  location: "",
}

const Home = () => {
  const [show, setShow] = useState(true);
  const { form, handleChange } = useForm(initialForm);
  const { data, loading } = useFetch("https://pokeapi.co/api/v2/pokemon/");

  const handleScroll = () => {
    if (window.screenY > 500) {
      setShow(false);
    } else {
      setShow(true);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll, false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("buscando...");
  };

  if (!data) return null;

  return (
    <section>
      <div className={`container my-4`}>
        <h1 className={styles.containerTitle}>
          Encuentra el trabajo de tus sueños
        </h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={`${styles.containerInput}`}>
            <i className={styles.iconLeft}>
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
          <div className={`${styles.containerInput}`}>
            <i className={styles.iconLeft}>
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
      {loading && <Loader />}
      <div className="container">
        <JobList />
      </div>
      <Footer />
    </section>
  );
};

export default Home;

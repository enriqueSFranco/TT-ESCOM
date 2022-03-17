import { useForm } from "../hooks/useForm";
import { useFetch } from "../hooks/useFetch";
import Input from "../components/Input/Input";
import Label from "../components/Input/Label";
import Span from "../components/Input/Span";
import Loader from "../components/Loader/Loader";
import JobList from "../components/Card/CardJobList";
import Footer from "../components/Footer/Footer";
import styles from "./PageHome.module.css";

let initialForm = {
  job: "",
  location: "",
}

const Home = () => {
  const { form, handleChange } = useForm(initialForm);
  const { data, loading } = useFetch("https://pokeapi.co/api/v2/pokemon/");

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
            <Label htmlFor="job" className="">
              <Input
                type="text"
                id="job"
                name="job"
                placeholder=" "
                value={form.job}
                onChange={handleChange}
              />
              <Span content="Buscar un empleo" />
            </Label>
          </div>
          <div className={`${styles.containerInput}`}>
            <Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder=" "
                value={form.location}
                onChange={handleChange}
              />
              <Span content="Ubicación" />
            </Label>
          </div>
          <input type="submit" value="Buscar Vacante" className="btn btn-primary" />
        </form>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className={`${styles.jobsSection} container`}>
          <JobList />
        </div>
      )}
      <Footer />
    </section>
  );
};

export default Home;

import { useForm } from "../../hooks/useForm";
import Input from "../Input/Input";
import Label from "../Input/Label";
import Span from "../Input/Span";
import styles from "./Search.module.css";

let initialForm = {
  job: "",
  location: "",
};

const Search = ({ handleSearch }) => {
  const { form, handleChange } = useForm(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.job.trim() || !form.location.trim()) return;
    handleSearch(form.job);
  };

  return (
    <div className={`${styles.searchContainer}`}>
      <h1 className={styles.title}>
        Ayudandote a conseguir un <span>trabajo</span>
        <br />
        <span>y a vivir tus sueños.</span>
      </h1>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <Label htmlFor="job">
          <Input
            type="text"
            id="job"
            name="job"
            value={form.job}
            onChange={handleChange}
          />
          <Span content="Buscar una vacante" />
        </Label>
        <Label htmlFor="location">
          <Input
            type="text"
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
          />
          <Span content="Ubicacion" />
        </Label>
        <input
          type="submit"
          value="Buscar Vacante"
          className={`${styles.btnSearch} btn btn-primary`}
        />
        {/* <div className={`${styles.containerInput}`}>
        </div> */}
      </form>
    </div>
  );
};

export default Search;

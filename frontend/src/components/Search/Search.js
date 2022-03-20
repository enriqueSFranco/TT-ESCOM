import React from "react";
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
    if (!form.job.trim() || !form.location.trim()) {
      console.info("campos vacios");
      return;
    }
    handleSearch(form);
  };

  return (
    <div className={`${styles.searchContainer}`}>
      <h1 className={styles.title}>
        Encuentra el trabajo de tus sueños
      </h1>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
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
        <div>
          <input
            type="submit"
            value="Buscar Vacante"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;

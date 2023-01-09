import { useEffect, useState, useRef } from "react";
import { useDebounce, useViewport } from "hooks";
import { searchCharacter, searchJob } from "services";
import Loader from "components/Loader/Loader";
import * as BiIcon from "react-icons/bi";
import styles from "./Search.module.css";
import {
  Button,
  Form,
  InputSearch,
  Separator,
  WrapperInput,
  WrapperForm,
} from "./styled-components/FormSearchStyled";

const FormSearchJob = ({ newResponse, setNewResponse, setFilterData, handleSearch }) => {
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const debounce = useDebounce(query, 500);
  const [locationJob, setLocationJob] = useState("");
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterDataAutocomplete] = useState(null);
  const [viewport] = useViewport();

  // filtrado para el autocompletado
  const handleFilterJob = (e) => {
    const query = e.target.value;
    console.log(
      "🚀 ~ file: FormSearchJob.js:28 ~ handleFilterJob ~ query",
      query
    );

    setQuery(query);

    if (query !== "") {
      searchCharacter(query)
        .then((res) => {
          const { results } = res;
          setFilterDataAutocomplete(results);
        })
        .catch((error) => error);
    }
    return;
  };

  const handleClick = (job) => setQuery(job);

  const onSubmit = (e) => {
    e.preventDefault();

    if (query === "") return;

    setLoading(true);
    setTimeout(() => {
      setQuery(debounce);
      setNewResponse({
        ...newResponse,
        ...{
          "Texto a buscar": debounce,
          Donde: locationJob,
          "Modalidad de empleo": [],
          "Experiencia laboral": [],
        }
      });
      searchJob(newResponse)
        .then((response) => {
          const { result } = response
          setFilterData(result)
        })
        .catch((error) => console.error(error));
      setLoading(false);
      handleSearch(debounce === "" ? filterData : debounce);
    }, 500);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <WrapperForm>
      <Form onSubmit={onSubmit}>
        <WrapperInput content="Qué">
          <InputSearch
            type="text"
            id="job"
            name="job"
            ref={inputRef}
            value={query}
            onChange={handleFilterJob}
            onBlur={() => {
              setTimeout(() => {
                setFilterDataAutocomplete([]);
              }, 200);
            }}
            autoComplete="off"
            placeholder="Desarrollador Backend"
            marginLeft="2.7rem"
          />
          {/* TODO: pasar los elementos de autocompletado a componentes. */}
          <ul className={styles.dataResultsJobs}>
            {filterData &&
              filterData?.map((value) => (
                <li
                  key={crypto.randomUUID()}
                  value={value?.t200_job}
                  onClick={() => handleClick(value?.t200_job)}
                  className={styles.dataItem}
                >
                  {value?.t200_job}
                </li>
              ))}
          </ul>
        </WrapperInput>
        <Separator></Separator>
        <WrapperInput content="Dónde">
          <InputSearch
            type="text"
            id="location"
            name="location"
            value={locationJob}
            onChange={(e) => setLocationJob(e.target.value)}
            autoComplete="off"
            placeholder="Ciudad de Mexico"
            marginLeft="3.7rem"
          />
        </WrapperInput>
        <Button type="submit" disabled={loading}>
          {viewport.device === "MOBILE" ? (
            <>
              {loading && <Loader />}
              {!loading && "Buscar vacante"}
              {loading && ""}
            </>
          ) : (
            <>
              {loading && <Loader width="20" height="20" color="#fff" />}
              {!loading && <BiIcon.BiSearch />}
              {loading && ""}
            </>
          )}
        </Button>
      </Form>
    </WrapperForm>
  );
};

export default FormSearchJob;

import { useState } from "react";
import { useFetch } from "hooks/useFetch";
import { useDebounce } from "hooks/useDebounce";
import { useViewport } from "hooks/useViewport";
import { searchCharacter } from "services/index"
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


const FormSearchJob = ({ handleSearch }) => {
  const [queryJob, setQueryJob] = useState("");
  const [locationJob, setLocationJob] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filterData, setFilterData] = useState(null);
  const [viewport] = useViewport();
  // const { data } = useFetch(`${process.env.REACT_APP_URL_VACANTS}`);
  const debounce = useDebounce(queryJob, 500);

  // filtrado para el autocompletado
  const handleFilterJob = (e) => {
    const query = e.target.value;
    setQueryJob(query);

    // hacer la llamada al endpoint de searchCharacter
    if (query !== '') {
      searchCharacter(query)
        .then(res => {
          const { results } = res
          console.log(results)
          setFilterData(results)
      })
        .catch(error => console.error(error))
    }
    return;
    // const dataFiltered = data.result?.filter((el) => {
    //   let er = new RegExp(`^${query}`, "gi");
    //   let matches = el.t200_job.toLowerCase().match(er);
    //   return matches;
    // });
    // return query === "" ? setFilterData([]) : setFilterData(filterData);
  };

  const handleClick = (job) => setQueryJob(job);

  const onSubmit = (e) => {
    e.preventDefault();

    if (queryJob === "" && locationJob === "") return

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      handleSearch(debounce === "" ? filterData : debounce);
    }, 500);

    // limpiamos los campos del formulario
    setQueryJob('')
    setLocationJob('')
  };

  // if (!filterData) return null

  return (
    <WrapperForm>
      <Form onSubmit={onSubmit}>
        <WrapperInput content="Qué">
          <InputSearch
            type="text"
            id="job"
            name="job"
            value={queryJob}
            onChange={handleFilterJob}
            onBlur={() => {
              setTimeout(() => {
                setFilterData([]);
              }, 200);
            }}
            autoComplete="off"
            autoFocus="true"
            placeholder="Desarrollador Backend"
            marginLeft="2.7rem"
          />
          {/* TODO: pasar los elementos de autocompletado a componentes. */}
          <ul className={styles.dataResultsJobs}>
            {filterData && filterData?.map((value) => (
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
        <Button type="submit" disabled={isLoading}>
          {viewport.device === "MOBILE" ? (
            <>
              {isLoading && <Loader />}
              {!isLoading && 'Buscar vacante'}
              {isLoading && ""}
            </>
          ) : (
            <>
              {isLoading && <Loader />}
              {!isLoading && <BiIcon.BiSearch />}
              {isLoading && ""}
            </>
          )}
        </Button>
      </Form>
    </WrapperForm>
  );
};

export default FormSearchJob;

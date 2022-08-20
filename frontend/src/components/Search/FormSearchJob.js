import { useState } from "react";
import { useFetch } from "hooks/useFetch";
import { useDebounce } from "hooks/useDebounce";
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
const { data } = useFetch(`${process.env.REACT_APP_URL_VACANTS}`);
  const [filterData, setFilterData] = useState(data);
  const debounce = useDebounce(queryJob, 500)

  const handleFilterJob = (e) => {
    const query = e.target.value;
    setQueryJob(query);
    const newFilter = data?.filter(({ t200_job }) => {
      let regex = new RegExp(`${query}`, "gi");
      return t200_job.match(regex);
    });
    console.log(data)
    query === "" ? setFilterData([]) : setFilterData(newFilter);
  };

  const handleClick = (job) => setQueryJob(job);

  const onSubmit = (e) => {
    e.preventDefault();
    if (debounce === "") return setFilterData(data);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      handleSearch(debounce === "" ? setFilterData(data) : debounce);
    }, 2000);
  };

  console.log(debounce)

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
            {filterData?.map((value) => (
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
          {/* lista de estados, municipios */}
        </WrapperInput>
        <Button
          type="submit"
          disabled={isLoading}
        >
          {isLoading && <Loader />}
          {!isLoading && <BiIcon.BiSearch />}
          {isLoading && ""}
        </Button>
      </Form>
    </WrapperForm>
  );
};

export default FormSearchJob;

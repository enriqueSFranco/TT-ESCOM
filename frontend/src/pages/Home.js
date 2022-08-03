import { useState } from "react";
import { useGetAllJobs } from "hooks/useGetAllJobs";
import { getVacantsFilter } from "services/jobs";
import FormSearchJob from "components/Search/FormSearchJob";
import CardJob from "components/Card/CardJob/CardJob";
import JobList from "components/Card/JobList/JobList";
import LayoutHome from "Layout/LayoutHome";
import LayoutHero from "Layout/LayoutHero";
import { Aside, Content, Hero, Main } from "./styled-components/HomeStyled";
import parallaxESCOM from "images/parallaxESCOM.jpg";


const Home = () => {
  // const [jobs, setJobs] = useState(null);
  const [response, loading] = useGetAllJobs();
  const [data, setData] = useState([]); // lista de vacantes filtrada
  const [isFiltered, setIsFiltered] = useState(false); // bandera para saber si la informacion se tiene que filtrar
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   getAllJobs()
  //     .then((response) => {
  //       if (response.status === 200) {
  //         setJobs(response.data);
  //       }
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false));
  // }, []);

  const filteredData = (value) => {
    if (value !== "") {
      getVacantsFilter({
        job: value.toLowerCase(),
        company_name: "",
        c206_id_profile: "",
        id_modality: "",
      })
        .then((response) => {
          console.log(response);
          setData(response.data.result);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleSearch = (value) => {
    filteredData(value);
    setIsFiltered(value !== "" ? true : false);
  };

  // const handleFilterHomeOffice = useMemo(
  //   () => (e) => {
  //     const { value } = e.target;
  //     if (value === "") {
  //       setIsFiltered(false);
  //       setData(jobs?.result);
  //     } else if (value !== "") {
  //       setIsFiltered(true);
  //       getVacantsFilter({
  //         job: "",
  //         company_name: "",
  //         c206_id_profile: "",
  //         id_modality: value,
  //       }).then((response) => {
  //         const { data } = response;
  //         setData(data?.result);
  //       });
  //     }
  //   },
  //   []
  // );

  /**
   * Filtra los empleos por empresa
   * @return devuleve los empleos publicados por una empresa seleccionada
   **/
  // const handleFilterBusiness = (e) => {
  //   const { value } = e.target;
  //   console.log(value);
  //   if (value === "allBusiness") {
  //     setIsFiltered(false);
  //     setData(jobs?.result);
  //     // setTotalJobs(jobs?.result.length);
  //   } else if (value !== "") {
  //     setIsFiltered(true);
  //     getVacantsFilter({
  //       job: "",
  //       company_name: value,
  //       c206_id_profile: "",
  //       id_modality: "",
  //     })
  //       .then((response) => {
  //         if (response.status === 200) {
  //           const { data } = response;
  //           console.log(data?.result);
  //           setData(data?.result);
  //           // setTotalJobs(data?.result.length);
  //         }
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  // const handleFilterProfile = (e) => {
  //   const { value } = e.target;
  //   if (value === "allProfile") {
  //     setIsFiltered(false);
  //     setData(jobs);
  //     // setTotalJobs(jobs.length);
  //   } else if (value !== "") {
  //     setIsFiltered(true);
  //     getVacantsFilter({
  //       job: "",
  //       company_name: "",
  //       c206_id_profile: value,
  //       id_modality: "",
  //     }).then((response) => {
  //       const { data } = response;
  //       console.log(data?.resuslt);
  //       setData(data?.result);
  //       // setTotalJobs(data?.result.length);
  //     });
  //   }
  // };

  if (!response) return null;

  return (
    <LayoutHome>
      <Main>
        <Hero>
          <LayoutHero src_photo={parallaxESCOM} alt_photo="parallax-ESCOM">
            <FormSearchJob handleSearch={handleSearch} />
          </LayoutHero>
        </Hero>
        <Content>
          {/* <CardJob /> */}
          <JobList jobs={isFiltered ? data : response} loading={loading} />
        </Content>
        <Aside></Aside>
      </Main>
    </LayoutHome>
  );
};

export default Home;

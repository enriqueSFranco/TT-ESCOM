import { useState } from "react";
import { useGetAllJobs } from "hooks/useGetAllJobs";
import FormSearchJob from "components/Search/FormSearchJob";
import JobList from "components/Card/JobList/JobList";
import LayoutHome from "Layout/LayoutHome";
import LayoutHero from "Layout/LayoutHero";
import { Aside, Content, Hero, Main } from "./styled-components/HomeStyled";
import parallaxESCOM from "images/parallaxESCOM.jpg";


const Home = () => {
  const [response, loading] = useGetAllJobs();
  const [filteredData, setDataFiltered] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  function handleFilter(value) {
    let lowerValue = value.toLowerCase()

    if (lowerValue !== '') {
      const result = response.filter(el =>  {
        // let regex = new RegExp(lowerValue, 'gi')
        return el.t200_job.toLowerCase().match(lowerValue)
      })
      console.log('result: ',result)
      setDataFiltered(result)
    }
  }

  function handleSearch(value) {
    setIsFiltered(value !== "" ? true : false);
    handleFilter(value)
  }

  if (!response && !filteredData) return null;

  return (
    <LayoutHome>
      <Main>
        <Hero>
          <LayoutHero src_photo={parallaxESCOM} alt_photo="parallax-ESCOM">
            <FormSearchJob handleSearch={handleSearch} />
          </LayoutHero>
        </Hero>
        <Content>
          <JobList jobs={isFiltered ? filteredData : response} loading={loading} />
        </Content>
        <Aside></Aside>
      </Main>
    </LayoutHome>
  );
};

export default Home;

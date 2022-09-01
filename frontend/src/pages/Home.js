import { useCallback, useEffect, useRef, useState } from "react";
import { useGetAllJobs } from "hooks/useGetAllJobs";
import { useNearScreen } from "hooks/useNearScreen";
import { useCustomDebounce } from "hooks/useDebounce";
import FormSearchJob from "components/Search/FormSearchJob";
import JobList from "components/Card/JobList/JobList";
import LayoutHome from "Layout/LayoutHome";
import LayoutHero from "Layout/LayoutHero";
import { Aside, Content, Hero, Main } from "./styled-components/HomeStyled";
import parallaxESCOM from "images/parallaxESCOM.jpg";
import Filters from "components/Filter/Filters";
import ButtonScrollTop from "components/Button/ButtonScrollTop";

const Home = () => {
  const { response, loading, loadingNextPage, setPage } = useGetAllJobs();
  const [filteredData, setDataFiltered] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const externalRef = useRef(null);
  const { isNearScreen } = useNearScreen({
    distance: "100px",
    externalRef: loading ? null : externalRef,
    once: false,
  });

  function handleNextPage() {
    setPage(prevPage => prevPage + 1)
  }
  
  const debounce = useCustomDebounce(() => {
    handleNextPage()
  }, 400)

  function handleFilter(value) {
    let lowerValue = value.toLowerCase();

    if (lowerValue !== "") {
      const result = response.filter((el) =>
        el.t200_job.toLowerCase().match(lowerValue)
      );
      setDataFiltered(result);
    }
  }

  function handleSearch(value) {
    setIsFiltered(value !== "" ? true : false);
    handleFilter(value);
  }

  const debouncehandleNextPage = useCallback(debounce
  , []);

  useEffect(() => {
    if (isNearScreen) debouncehandleNextPage();
  },[isNearScreen, debouncehandleNextPage]);

  if (!response && !filteredData) return null;

  console.log(response)

  return (
    <LayoutHome>
      <Main>
        <Hero>
          <LayoutHero src_photo={parallaxESCOM} alt_photo="parallax-ESCOM">
            <FormSearchJob handleSearch={handleSearch} />
          </LayoutHero>
        </Hero>
        <Content>
          <JobList
            jobs={isFiltered ? filteredData : response}
            loading={loading}
            loadingNextPage={loadingNextPage}
          />
          <div id="visor" ref={externalRef}></div>
        </Content>
        <ButtonScrollTop />
        <Aside>
          {/* TODO: Hacer la parte de los filtros */}
          <Filters />
        </Aside>
      </Main>
    </LayoutHome>
  );
};

export default Home;

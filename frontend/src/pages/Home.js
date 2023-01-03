import { useCallback, useEffect, useRef, useState } from "react";
import {
  useGetAllJobs,
  useNearScreen,
  useCustomDebounce,
  useSearchJob,
} from "hooks";
import FormSearchJob from "components/Search/FormSearchJob";
import JobList from "components/Card/JobList/JobList";
import Loader from "components/Loader/Loader";
import LayoutHome from "Layout/LayoutHome";
import LayoutHero from "Layout/LayoutHero";
import parallaxESCOM from "images/parallaxESCOM.jpg";
import Filters from "components/Filter/Filters";
// import ButtonScrollTop from "components/Button/ButtonScrollTop";
import {
  Aside,
  Content,
  Hero,
  Main,
  Cards,
  SummaryCard,
} from "./styled-components/HomeStyled";
import DetailsJob from "components/Modal/contentModals/DetailsJob";
import RecommendedVacanciesFilter from "components/Filter/FilterRecommendedVacancies";

const Home = () => {
  const [filteredData, setDataFiltered] = useState(new Set());
  const [selectedFilter, setSelectedFilter] = useState([
    {
      label: "Sin experiencia",
      checked: false,
    },
    {
      label: "0 - 6 meses",
      checked: false,
    },
    {
      label: "6 meses - 1 año",
      checked: false,
    },
    {
      label: "1 - 2 años",
      checked: false,
    },
    {
      label: "Más de 2 años",
      checked: false,
    },
  ]);
  const [recommended, setRecommended] = useState(false);
  const [vacantId, setVacantId] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const [query, setQuery] = useState("");
  const [data] = useSearchJob(query);
  const externalRef = useRef(null);
  const { response, loading, loadingNextPage, setPage } = useGetAllJobs();
  const { isNearScreen } = useNearScreen({
    distance: "100px",
    externalRef: loading ? null : externalRef,
    once: false,
  });

  function handleNextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  const debounce = useCustomDebounce(() => {
    handleNextPage();
  }, 400);

  // TODO: Hacer la funcionalidad de filtrado con checkbox
  function onFiltereChange(e) {
    const { value, checked } = e.target;

    setSelectedFilter({
      ...selectedFilter,
      [e.target.name]: checked,
    });

    if (checked) {
      const result = response.filter(
        (it) =>
          it?.c207_id_experience?.c207_description === value ||
          it?.c214_id_modality?.c214_description === value
      );
      setDataFiltered([...filteredData, ...result]);
      console.log(filteredData);
    } else {
      const result = filteredData.filter(
        (it) =>
          it?.c207_id_experience?.c207_description !== value ||
          it?.c214_id_modality?.c214_description !== value
      );
      setDataFiltered([...result]);
    }
  }

  function handleChangeRecommended(e) {
    setRecommended(e.target.checked);
  }

  function handleSearch(value) {
    setIsFiltered(value !== "" ? true : false);
  }

  const debouncehandleNextPage = useCallback(debounce, []);

  useEffect(() => {
    if (isNearScreen) debouncehandleNextPage();
  }, [isNearScreen, debouncehandleNextPage]);

  if (!response) return null;

  return (
    <LayoutHome>
      <Main>
        <Hero>
          <LayoutHero src_photo={parallaxESCOM} alt_photo="parallax-ESCOM">
            <FormSearchJob
              handleSearch={handleSearch}
              query={query}
              setQuery={setQuery}
            />
          </LayoutHero>
        </Hero>
        <Aside>
          <Filters recommended={recommended} handleChangeRecommended={handleChangeRecommended} onFiltereChange={onFiltereChange} />
          <RecommendedVacanciesFilter
            handleChangeRecommended={handleChangeRecommended}
          />
        </Aside>
        <Content>
          <Cards id="cards">
            <JobList
              jobs={isFiltered ? data?.results : response}
              loading={loading}
              recommended={recommended}
              setVacantId={setVacantId}
            />
            <div
              style={{
                width: "100%",
                display: "grid",
                placeContent: "center",
                backgroundColor: "transparent",
                margin: "1rem 0",
                padding: "0 0 2rem 0",
              }}
            >
              {loadingNextPage && <Loader />}
            </div>
            <div id="visor" ref={externalRef}></div>
          </Cards>
          <SummaryCard>
            <DetailsJob vacantId={vacantId || response[0]?.t200_id_vacant} />
          </SummaryCard>
        </Content>
        {/* <ButtonScrollTop /> */}
      </Main>
    </LayoutHome>
  );
};

export default Home;

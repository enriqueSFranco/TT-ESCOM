import { useState } from "react";
import { useAuth } from "context/AuthContext";
import {
  useGetAllJobs,
  useSearchJob,
  useRecommendationsVacancies,
} from "hooks";
import FormSearchJob from "components/Search/FormSearchJob";
import JobList from "components/Card/JobList/JobList";
import EmptyView from "./EmptyView";
import ButtonScrollTop from "components/Button/ButtonScrollTop";
import DetailsJob from "components/Modal/contentModals/DetailsJob";
import RecommendedVacanciesFilter from "components/Filter/FilterRecommendedVacancies";
import Filteres from "components/Filter/Filters";
import LayoutFilter from "Layout/LayoutFilter";
import LayoutHome from "Layout/LayoutHome";
import LayoutHero from "Layout/LayoutHero";
import parallaxESCOM from "images/parallaxESCOM.jpg";
import {
  Content,
  Hero,
  Main,
  Cards,
  SummaryCard,
  WrapperFilters,
} from "./styled-components/HomeStyled";

const Home = () => {
  const { token } = useAuth();
  const [match, setMatch] = useState(null);
  const [resultsFound, setResultsFound] = useState(true);
  const [selectedFilterExp, setSelectedFilterExp] = useState([
    { id: 1, checked: false, label: "Sin experiencia" },
    { id: 2, checked: false, label: "0 - 6 meses" },
    { id: 3, checked: false, label: "6 meses - 1 año" },
    { id: 4, checked: false, label: "1 - 2 años" },
    { id: 5, checked: false, label: " más de 2 años" },
  ]);
  const [selectedFilterModality, setSelectedFilterModality] = useState([
    { id: 1, checked: false, label: "Presencial" },
    { id: 2, checked: false, label: "Desde casa" },
    { id: 3, checked: false, label: "Híbrido" },
  ]);
  const [recommended, setRecommended] = useState(false);
  const [vacantId, setVacantId] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);
  const [query, setQuery] = useState("");
  const [data] = useSearchJob(query);
  const { response, loading } = useGetAllJobs();
  const [filterData, setFilterData] = useState([]);
  const { response: recommender, isLoading } = useRecommendationsVacancies(
    token?.user?.id
  );

  // TODO: Hacer la funcionalidad de filtrado con checkbox
  function onFiltereChange(id) {
    const itemsExp = selectedFilterExp;
    const itemExpChecked = itemsExp.map((it) =>
      it.id === id ? { ...it, checked: !it.checked } : it
    );
    setSelectedFilterExp(itemExpChecked);
  }

  function onFiltereModalityChange(id) {
    const itemsModality = selectedFilterModality;
    const itemExpChecked = itemsModality.map((it) =>
      it.id === id ? { ...it, checked: !it.checked } : it
    );
    setSelectedFilterModality(itemExpChecked);
  }

  function handleChangeRecommended(e) {
    setRecommended(e.target.checked);
  }

  function handleSearch(value) {
    setIsFiltered(value !== "" ? true : false);
  }

  if (!response) return null;

  console.log(data)

  return (
    <LayoutHome>
      <Main>
        <Hero>
          <LayoutHero src_photo={parallaxESCOM} alt_photo="parallax-ESCOM">
            <FormSearchJob handleSearch={handleSearch} />
          </LayoutHero>
        </Hero>

        <WrapperFilters>
          <Filteres
            data={response}
            selectedFilterExp={selectedFilterExp}
            selectedFilterModality={selectedFilterModality}
            setFilterData={setFilterData}
            setResultsFound={setResultsFound}
            onFiltereChange={onFiltereChange}
            onFiltereModalityChange={onFiltereModalityChange}
          />
        </WrapperFilters>

        <Content>
          <Cards id="cards">
            {resultsFound ? (
              <JobList
                jobs={response}
                recommendedJobs={recommender}
                loading={loading}
                isVacantRecommended={recommended}
                setMatch={setMatch}
                setVacantId={setVacantId}
              />
            ) : (
              <EmptyView />
            )}
          </Cards>
          <SummaryCard>
            <DetailsJob
              vacantId={
                vacantId ||
                response[0]?.t200_id_vacant ||
                recommended[0]?.t200_id_vacant?.t200_id_vacant
              }
              recommended={recommended}
              match={match}
            />
          </SummaryCard>
        </Content>
        <ButtonScrollTop />
      </Main>
    </LayoutHome>
  );
};

export default Home;

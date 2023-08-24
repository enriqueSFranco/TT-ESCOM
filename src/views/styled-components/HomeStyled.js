import styled from "styled-components";
import { device } from "breakpoints";

const Main = styled.main`
  @media screen and ${device.mobileM} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "hero"
      "content_data";
    position: relative;
  }

  @media screen and ${device.laptop} {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-template-areas:
      "hero hero"
      "filters filters"
      "content_data content_data";
    position: relative;
    background-color: #fff;
  }
`;

const Hero = styled.div`
  grid-area: hero;
  width: 100%;
  background-color: #fff;
  height: 200px;
`;

const WrapperFilters = styled.section`
  grid-area: filters;
  height: fit-content;
  background-color: #fff;
  width: 70%;
  border-bottom: 1px solid #ccc;
  margin: 0 auto;
  position: sticky;
  top: 250px;
  z-index: 9;
`;

const Content = styled.section`
  @media screen and ${device.mobileM} {
    grid-area: content_data;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 2rem;
    padding: 1rem;
  }

  @media screen and ${device.laptop} {
    min-height: 100vh;
    grid-area: content_data;
    display: grid;
    grid-template-columns: 600px 1fr;
    grid-template-areas: "cards summary_card";
    margin: 3rem auto 0 auto;
    background-color: #f9fbfc;
  }
`;

const Cards = styled.div`
  grid-area: cards;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  /* background-color: red; */
`;

const SummaryCard = styled.div`
  background-color: #fff;
  width: 680px;
  height: fit-content;
  grid-area: summary_card;
  position: sticky;
  top: 312px;
`;


export {
  Content,
  Cards,
  SummaryCard,
  Hero,
  Main,
  WrapperFilters,
};

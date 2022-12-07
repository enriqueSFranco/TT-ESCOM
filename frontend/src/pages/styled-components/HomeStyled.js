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
      "aside content_data";
    position: relative;
    background-color: #fff;
  }
`;

const Hero = styled.div`
  grid-area: hero;
  width: 100%;
`;

const Content = styled.section`
  @media screen and ${device.mobileM} {
    position: relative;
    /* top: 280px; */
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
    grid-template-areas: "cards summary_card";
    grid-template-columns: 600px 1fr;
    padding: 1rem;
  }
`;

const Cards = styled.div`
  grid-area: cards;
  display: flex;
  background-color: #fff;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1rem;
`;

const SummaryCard = styled.div`
  background-color: #fff;
  grid-area: summary_card;
`;

const Aside = styled.aside`
  grid-area: aside;
  padding: 1rem;
`;

export { Aside, Content, Cards, SummaryCard, Hero, Main };

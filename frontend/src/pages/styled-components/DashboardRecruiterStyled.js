import styled from "styled-components";

const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${(props) => props.height || "100%"};
`;

const Container = styled.main`
  width: 100%;
  height: 100%;
  grid-area: container;
  background-color: #f8f8f8;
  padding: 0 16px;
`;

const Grid = styled.div`
  height: calc(100% - 9.3rem);
  padding: 0 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const WrapperWidgets = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;

const ContentWidgetCommon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const TextNumber = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

const ContentWidget = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const WrapperNoResults = styled.article`
  background-color: #E2E9F6;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`

const ContainerImage = styled.figure`
`
const Image = styled.img`
`
const TitleImage = styled.figcaption`
  color: #0068B5;
  text-align: center;
  font-weight: 700;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export {Aside, ContentWidget, TextNumber, Grid, ContentWidgetCommon, Container, WrapperWidgets }

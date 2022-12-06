import styled from "styled-components";

const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  background-color: #fff;
  height: ${(props) => props.height || "100%"};
`;

const Container = styled.main`
  grid-area: container;
  width: 100%;
  height: 100%;
`;
export { Aside, Container };

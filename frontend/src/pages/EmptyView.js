import React from "react";
import styled from "styled-components";
import noResults from "assets/images/plane_2.gif";

const TextH3 = styled.h3`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: linear-gradient(
    90deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const EmptyView = () => {
  return (
    <picture>
      <source srcSet={noResults} media="(min-width: 600px)" />
      <img src={noResults} alt="sin resultados" />
      <TextH3>No se encontraron resultados para la búsqueda.</TextH3>
    </picture>
  );
};

export default EmptyView;

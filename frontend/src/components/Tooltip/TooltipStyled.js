import styled from "styled-components";

const WrapperTooltip = styled.div`
  position: relative;
  &:hover {
    span {
      top: 100%;
      opacity: 0.9;
      visibility: visible;
    }
  }
`;

const Title = styled.span`
  position: absolute;
  right: 0;
  top: 60%;
  font-size: 12px;
  width: max-content;
  border-radius: 1rem;
  padding: 4px 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #222;
  color: #fff;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
`;

export { WrapperTooltip, Title };

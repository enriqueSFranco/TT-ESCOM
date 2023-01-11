import styled from "styled-components";

const WrapperValidateCompany = styled.section`
  overflow-y: auto;
  position: relative;
  top: 3.5rem;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #000;
  background-color: #fff;
  border-radius: 5px;
  padding: 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const TextH2 = styled.h2`
  background: linear-gradient(27deg, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  margin-top: 1rem;
`;

export { WrapperValidateCompany, TextH2 };

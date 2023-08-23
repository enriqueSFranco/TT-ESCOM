import styled from "styled-components";

const WrapperForm = styled.div`
  display: grid;
  place-content: center;
  height: 400px;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const SuccesLegen = styled.label`
  font-size: 18px;
`

const WrapperLegend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GroupButtons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  text-indent: 5px;
  margin-top: 1.5rem;
`;

export { GroupButtons, TextArea, WrapperForm, SuccesLegen, WrapperLegend };

import styled from "styled-components";

const Select = styled.select`
  height: 100%;
  border-radius: 1rem;
  outline: 1px solid #ccc;
  border: 0;
  background-color: transparent;
  padding: 0 1rem;
  cursor: pointer;
`;

const Form = styled.form`
  position: relative;
  top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100px;
`;

const Button = styled.input`
  background-color: #116bfe;
  border: none;
  outline: none;
  color: #fff;
  padding: 0.4rem 1rem;
  border-radius: 2px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 120px;
`;

export { Button, Form, Select };

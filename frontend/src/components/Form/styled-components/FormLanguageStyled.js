import styled from "styled-components";

const Form = styled.form`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const Title = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.5rem;
  text-transform: capitalize;
`;

const Button = styled.input`
  width: fit-content;
  outline: none;
  border: none;
  background-color: #116bfe;
  color: #fff;
  border-radius: 4px;
  padding: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3281ff;
  }
`;

const Select = styled.select`
  height: 50px;
  padding: 0 0.5rem;
  border-radius: 4px;
  outline: 1px solid #ccc;
  border: 0;
  background-color: #fff;
  cursor: pointer;
`;

const Range = styled.input`
  width: 100%;
  height: 8px;
  border-radius: 1rem;
  box-shadow: inset 14px 14px 29px #1a1b1e, inset -14px -4px -29px #2b2d32;
  background-color: #2a2d32;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    box-shadow: none;
    border-radius: 0px;
    border: 0px solid #010101;
  }
  &::-moz-range-track {
    width: 100%;
    height: 1px;
    cursor: pointer;
    box-shadow: none;
    border-radius: 0px;
    border: 0px solid #010101;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    height: 22px;
    width: 22px;
    transform: rotate(45deg);
    background: radial-gradient(
      circle at 20%,
      #d8d7d7 0%,
      #626262 50%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    /* border-radius: 50%; */
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -20px;
  }

  &::-moz-range-thumb {
    appearance: none;
    transform: rotate(45deg);
    border: none;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
    height: 22px;
    width: 22px;
    /* border-radius: 50%; */
    background-color: #2a2d32;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -20px;
  }
  &::-moz-focus-outer {
    border: 0;
  }
`;

const Porcentage = styled.span`
  background: linear-gradient(27deg, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700;
`;

export { Button, Form, Title, Select, Range, Porcentage };

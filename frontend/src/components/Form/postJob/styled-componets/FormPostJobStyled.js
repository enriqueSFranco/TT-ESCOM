import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: fit-content;
  background-color: #ffffffbd;
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 0;
  border-radius: 0.2rem 0.2rem 1rem 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 900px;
  position: relative;
  margin: 0 0 1rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      hsla(192, 95%, 50%, 1) 0%,
      hsla(225, 89%, 47%, 1) 100%
    );
    height: 5px;
    border-radius: 1rem;
  }
`;

const TitleH1 = styled.h1`
  background: linear-gradient(
    90deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 700;
  margin: 1rem 0 0 0;
`;

const ContainerForm = styled.div`
  position: relative;
  top: ${props => props.top || '4rem'};
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
`;

const SubGroupInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const GroupInput = styled.div`
  width: 800px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const Button = styled.button`
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 0.3rem;
  background-color: #62c62e;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Select = styled.select`
  height: 100%;
  width: ${(props) => props.width || "250px"};
  border-radius: 1rem;
  outline: 0;
  border: 0;
  padding: 0 0.5rem;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const WrapperSelect = styled.div`
  outline: 1px solid #ccc;
  border-radius: 1rem;
`;
export {
  Button,
  Form,
  GroupInput,
  SubGroupInput,
  Select,
  WrapperSelect,
  ContainerForm,
  TitleH1,
};

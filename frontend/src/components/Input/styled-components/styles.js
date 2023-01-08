import styled from "styled-components";

const BoxInput = styled.div`
  position: relative;
  border: 1.5px solid #ccc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: ${(props) => (props.bgInput ? props.bgInput : "#fff")};
  width: ${({ width }) => width || "100%"};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 1rem;
`;

const InputLabel = styled.span`
  position: absolute;
  left: 0;
  color: #ccc;
  padding: 1rem;
  pointer-events: none;
  font-size: 1rem;
  transition: all 0.5s ease;
`;

const TextField = styled.input`
  width: ${({ width }) => width || "100%"};
  outline: none;
  padding: 1rem;
  color: ${(props) => (props.color ? props.color : "#000")};
  background-color: ${(props) => (props.bgInput ? props.bgInput : "#fff")};
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: none;
  font-size: 1rem;
  letter-spacing: 1px;
  border-radius: 1rem;

  &:focus {
    box-shadow: #1a73e8 0px 0px 0px 1px, #1a73e8 0px 0px 0px 1px inset;
  }

  &:valid ~ span,
  &:focus ~ span {
    color: ${(props) =>
      props.colorTextFloat ? props.colorTextFloat : "#1A73E8"};
    transform: translateX(1rem) translateY(-1.9rem);
    background-color: ${(props) => props.bgTextFloat || "#fff"};
    font-size: 0.75rem;
    letter-spacing: 1px;
    padding: 0 0.2rem;
    /* backdrop-filter: blur(10px); */
  }
`;

const Icon = styled.div`
  position: absolute;
  width: 20px;
  height: 80%;
  right: 10px;
  top: 0.3rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  background-color: ${(props) => props.bgInput || "#fff"};
  color: ${({ iconColor }) => iconColor || "#000"};
  cursor: pointer;
`;

// TAG INPUT
const ContainerTags = styled.div`
  outline: 1px solid #ccc;
  width: 350px;
  height: 60px;
  overflow-y: auto;
  margin-top: 10px;
  padding: 5px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;
const TagItem = styled.div`
  background-color: #000;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 2px 5px;
  border-radius: 5px;
`;

const TagText = styled.span`
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;
const ButtonDelete = styled.button`
  border-radius: 50%;
  outline: none;
  border: none;
  background-color: #fff;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 500;
`;

const TagInput = styled.input`
  border: none;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 5px;
  outline: 2px solid red;
  width: 50%;
  
`;

export {
  BoxInput,
  Icon,
  InputLabel,
  TextField,
  ContainerTags,
  TagItem,
  TagText,
  ButtonDelete,
  TagInput,
};

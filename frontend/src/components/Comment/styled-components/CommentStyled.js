import styled from "styled-components";

const Message = styled.span`
  background-color: #f9f9f9;
  font-weight: 300;

  ${(props) => {
    if (props.typeUser) {
      return `
        background-color: #2B3FEC;
        color: #fff;
        font-weight: 300;
      `;
    }
  }}
  padding: .5rem .7rem;
  border-radius: 1rem;
`;

const Description = styled.div`
  width: 70%;
  height: fit-content;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const TextDate = styled.span`
  font-weight: 500;
  font-size: 0.9rem;
  color: #116bfe;
`;

const CommentBox = styled.textarea`
  outline: 2px solid #2172f2;
  border-radius: 2px;
  border: none;
  width: 50%;
  height: 50px;
  resize: none;
  text-indent: 4px;
  padding: 0.2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #222;
    font-weight: 400;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContainerMessage = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  ${(props) => {
    if (props.typeUser) {
      return `
        flex-direction: row-reverse;
      `;
    }
  }}
  align-items: center;
  gap: 0.5rem;
`;

export { ContainerMessage, Message, Form, Description, CommentBox, TextDate };

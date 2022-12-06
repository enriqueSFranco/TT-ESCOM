import styled from "styled-components";
import { USERS } from "types";

const WrapperComment = styled.article`
  background-color: #f5f5f5;
  max-width: 100%;
  height: fit-content;
  padding: 0.5rem;
  border-radius: 2px;
`;

const WrapperAvatar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
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

export {
  WrapperComment,
  WrapperAvatar,
  Form,
  Description,
  CommentBox,
  TextDate,
};

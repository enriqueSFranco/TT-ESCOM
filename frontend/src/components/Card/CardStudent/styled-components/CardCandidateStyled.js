import styled from "styled-components";
import background from "assets/images/wave.jpg";

const Card = styled.article`
  width: 400px;
  border-radius: 0 0 4px 4px;
  padding: 4px 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 10px;
`;

const CardHeader = styled.header`
  background-color: skyblue;
  border-radius: 10px;
  width: 100%;
  background: center/cover no-repeat url(${background});
`;

const CardContentAvatar = styled.figure`
  padding: 0.5rem 0 0.3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  border-radius: 1rem;
`;

const Text = styled.p`
  display: block;
  margin: 0;
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) => props.textColor || "#000"};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const TitleModal = styled.h3`
  background: linear-gradient(27deg, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-bottom: 10px;
`;

const CardContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #ffff;
  padding: 0.5rem 0 0.3rem 0.5rem;
  margin-bottom: 0.8rem;
  border-radius: 5px;
`;

const CardViwProfile = styled.div`
  display: grid;
  place-content: center;

  .button {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    border: none;
    outline: 1px solid #000;
    background-color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    margin-bottom: 5px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export {
  Card,
  CardContentAvatar,
  CardHeader,
  CardViwProfile,
  Text,
  CardContact,
  TitleModal
};

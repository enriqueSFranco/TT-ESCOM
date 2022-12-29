import styled from "styled-components";
import { USERS } from "types";

const WrapperLoader = styled.div`
  width: 100vh;
  height: 70vh;
  position: relative;
  left: 10rem;
  display: grid;
  place-content: center;
`;

const WrapperIconEdit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  font-size: 1.3rem;
  color: #2172f2;
  
  .button-edit {
    cursor: pointer;
  }
`;

const WraperCard = styled.article`
  width: 100%;
  height: 100vh;
  outline: 2px solid blue;
  ${({ typeOfUser }) => {
    if (typeOfUser === USERS.manager) {
      return `
        height: 100%;
      `;
    }
  }}
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 1rem;
  /* outline: 2px solid green; */
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const WrapperComment = styled.section`
  width: 100%;
  ${({typeOfUser}) => {
    if (typeOfUser === USERS.manager) {
      return `
        height: 100%;
        `;
      }
    }}
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const HeaderInfo = styled.header``;

const Description = styled.div`
  height: fit-content;
  overflow-y: auto;
  outline: 2px solid orange;
`;

const WrapperActions = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 0;
  position: absolute;
  bottom: 0;
  left: 0;

  .button_admin {
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border-radius: 2px;
    color: #fff;
    font-weight: 600;
    display: flex;
    gap: 0.3rem;
    align-items: center;
  }

  .publish {
    background-color: #7fbb42;
  }

  .disabled {
    background-color: #eee;
    color: #222;
  }

  .reject {
    background-color: red;
  }
`;

const ContentDescription = styled.div`
  height: fit-content;
  overflow-y: auto;
  /* background-color: red; */
`;

const ListItems = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0 0 1rem 0;
  padding: 0;
`;

const Title = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(27deg, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export {
  WrapperLoader,
  ContentDescription,
  WrapperActions,
  WrapperIconEdit,
  Title,
  WrapperComment,
  ListItems,
  WraperCard,
  Description,
  HeaderInfo,
};

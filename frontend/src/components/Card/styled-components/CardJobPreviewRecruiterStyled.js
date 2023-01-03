import styled from "styled-components";

const Card = styled.article`
  position: relative;
  height: fit-content;
  color: #000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  padding: 2rem 0 0 0;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  transition: box-shadow .3s ease-in-out;
  
  &:hover {
    color: #000;
    box-shadow: #2172F2 0px 0px 0px 2px;
  }
`;

const CardHeader = styled.header`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const CardHeaderLeft = styled.div`
  /* outline: 2px solid greenyellow; */
  width: 100%;
  font-weight: 700;
`;

const CardHeaderRight = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    object-fit: contain;
    object-position: center center;
    margin-right: 0.5rem;
  }
`;

const CardListTags = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0 0 18px 0.5rem;
  list-style: none;
`;

const CardListItemTags = styled.li``;

const TitleJob = styled.h2`
  margin: 0 0 10px 10px;
  font-size: 18px;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: linear-gradient(27deg, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const TotalApplications = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.9rem;
  color: #ccc;
  font-weight: 700;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: .5rem 1rem;
  width: 100%;
  /* height: 100px; */
  border-top: 1px solid #ccc;
  border-radius: 0 0 1rem 1rem;
  color: #000;

  .cerrada {
    color: #FF0000;
  }
  .abierta {
    color: #31C27C;
  }
  .en-revision {
    color: #E56A1B;
  }
`;

export {
  Card,
  CardHeader,
  CardListTags,
  CardHeaderLeft,
  CardHeaderRight,
  CardListItemTags,
  TotalApplications,
  TitleJob,
  CardFooter,
};
import styled from "styled-components";
import background from "assets/images/PolygonLuminary.png";

const Header = styled.header`
  padding: 1rem 0;
  border-radius: 5px 5px 0 0;
  color: "#fff";
  background: center/cover no-repeat url(${background});
`;

const Button = styled.button`
  background-color: #fff;
  border: none;
  outline: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 1px;
  border-radius: 5px;
  padding: 8px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  transition: box-shadow .3s ease-in-out;

  &:hover {
    box-shadow: #fff 0px 0px 0px 2px;
  }
`

const Container = styled.div`
  background-color: #fff;
  height: 448px;
  width: 100%;
  overflow-y: auto;
  scrollbar-color: #0a4c95 #c2d2e4;

  &::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }

  &::-webkit-scrollbar-track-piece {
    background-color: #c2d2e4;
  }

  &::-webkit-scrollbar-thumb:vertical {
    height: 30px;
    background-color: #0a4c95;
  }
`;

const WrapperSummaryJob = styled.div`
  outline: 2px solid #ccc;
  border-radius: 5px;
  height: 650px;
  padding: 0 0 1rem 0;
`;

const ContentModal = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const TextH2 = styled.h2`
  font-size: ${(props) => props.size || "1.3em"};
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: linear-gradient(30deg, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const WrapperMoreInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-bottom: 2px solid #eee;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const WrapperRequitements = styled.div`
  padding: 8px 4px;
  border-bottom: 2px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .containerListSkill {
    width: 100%;
    padding: 0 4px;
    height: 100px;
    overflow-y: auto;
  }

  .titleTypeSkills {
    font-size: 16px;
    font-weight: 600;
    background: linear-gradient(27deg, #3f5efb, #fc466b);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const DescriptionJob = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0 1rem 1rem 1rem;
`;

export {
  DescriptionJob,
  ContentModal,
  Header,
  Button,
  TextH2,
  WrapperRequitements,
  WrapperMoreInfo,
  Container,
  WrapperSummaryJob,
};

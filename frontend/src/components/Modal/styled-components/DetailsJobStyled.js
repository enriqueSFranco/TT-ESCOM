import styled from "styled-components";
import background from "assets/images/PolygonLuminary.png";

const Header = styled.header`
  padding: 1rem 0;
  border-radius: 5px 5px 0 0;
  color: "#fff";
  background: center/cover no-repeat url(${background});
`;

const WrapperSummaryJob = styled.div`
  outline: 2px solid #ccc;
  border-radius: 5px;
  height: 860px;
  position: sticky;
  top: 90px;
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
  /* gap: .5rem; */
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
  height: 350px;
  background-color: #fff;
  overflow-y: auto;
  line-height: 30px;
`;

export {
  DescriptionJob,
  ContentModal,
  Header,
  TextH2,
  WrapperRequitements,
  WrapperMoreInfo,
  WrapperSummaryJob,
};

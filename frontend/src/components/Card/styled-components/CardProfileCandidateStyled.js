import styled from "styled-components";

const WrapperCard = styled.article`
  min-width: 100%;
  min-height: calc(100vh - 10rem);
  position: relative;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "card_left card_right";
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const WrapperCV = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const LinkToCV = styled.a`
  background-color: #0A58CA;
  border-radius: 5px;
  color: #fff;
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;
  transition: all .4s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #1591D7;
    font-weight: 700;
  }
`

const CardLeft = styled.div`
  grid-area: card_left;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;
`;

const CardRight = styled.div`
  grid-area: card_right;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;

  .menu_item_indicator {
    position: absolute;
    top: -.2rem;
    height: 2.5rem;
    border-radius: 4px;
    background-color: #308efe;
    transform: translateX(-50%);
    transition: 0.3s ease-in-out;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: .5rem;
  z-index: 9;
  cursor: pointer;
`;

const CardInfo = styled.div`
  /* outline: 2px solid blue; */
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardHeader = styled.header`
  /* outline: 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { WrapperCard, CardLeft, CardHeader, CardInfo, WrapperCV, LinkToCV, CardRight, Item };

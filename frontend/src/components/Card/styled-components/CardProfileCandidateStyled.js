import styled from 'styled-components'

const WrapperCard = styled.article`
  min-width: 100%;
  min-height: calc(100vh - 15rem);
  position: relative;
  /* top: 2.5rem; */
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "card_left card_right";
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  `

const CardLeft = styled.div`
  grid-area: card_left;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;
`

const CardRight = styled.div`
  grid-area: card_right;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1rem;
`

const Item = styled.li`
  cursor: pointer;
`

const CardInfo = styled.div`
  /* outline: 2px solid blue; */
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const CardHeader = styled.header`
  /* outline: 2px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`


export { WrapperCard, CardLeft, CardHeader, CardInfo, CardRight, Item }
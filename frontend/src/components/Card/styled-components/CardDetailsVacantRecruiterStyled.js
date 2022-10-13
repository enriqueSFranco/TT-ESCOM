import styled from 'styled-components'

const WrapperLoader = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  place-content: center;
`

const WraperCard = styled.article`
  width: 1200px;
  height: 74.5vh;
  margin: 0 auto;
  background: #F7F7F9;
  border-radius: 5px;
  padding: 1rem;
  margin-top: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const HeaderInfo = styled.header`
`

const Description = styled.div``

const ListItems = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  margin: 0 0 1rem 0;
  padding: 0;
`

export { WrapperLoader, ListItems, WraperCard, Description, HeaderInfo }
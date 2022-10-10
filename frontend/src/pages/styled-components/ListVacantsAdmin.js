import styled from 'styled-components'

const Content = styled.section`
  background-color: #F7F7F9;
  width: 100%;
  height: calc(100vh - 8.9rem);
  overflow-y: auto;
  padding: 1rem;
  margin-left: .5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: max-content;
  gap: 1rem;
`

export { Content }
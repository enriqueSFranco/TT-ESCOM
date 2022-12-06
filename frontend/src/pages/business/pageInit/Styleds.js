import styled from 'styled-components'

const Grid = styled.div`
  /* outline: 2px solid blue;   */
  height: calc(100% - 9.3rem);
  padding: 0 .5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`


const WrapperWidgets = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`

const ContentWidgetCommon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: capitalize;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const TextNumber = styled.span`
  font-size: 2rem;
  font-weight: 700;
`

const ContentWidget = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export { Grid, WrapperWidgets, ContentWidget, ContentWidgetCommon, TextNumber }
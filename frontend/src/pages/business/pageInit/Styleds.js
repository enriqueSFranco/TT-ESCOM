import styled from 'styled-components'
import { USERS } from "types";

const Grid = styled.div`
  ${({typeOfUser}) => {
    if (typeOfUser === USERS.manager) {
      return `
        height: 100%;
        padding: 10px 0;
      `
    }
  }}
  display: grid;
  grid-template-columns: 800px 1fr;
  align-content: center;
  gap: 1rem;
`


const WrapperWidgets = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: .5rem 0;
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
  color: #438ffe;
  font-family: monospace;
`

const ContentWidget = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
`

export { Grid, WrapperWidgets, ContentWidget, ContentWidgetCommon, TextNumber }
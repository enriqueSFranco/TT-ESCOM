import styled from 'styled-components'
import { USERS } from "types";

const Grid = styled.div`
  ${({typeOfUser}) => {
    if (typeOfUser === USERS.manager) {
      return `
        height: 100%;

      `
    }
    if (typeOfUser === USERS.recruiter) {
      return `
        height: calc(100% - 9.5rem);
      `
    }
  }}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* justify-items: center; */
  align-content: center;
  gap: 1rem;
`


const WrapperWidgets = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: .5rem;
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
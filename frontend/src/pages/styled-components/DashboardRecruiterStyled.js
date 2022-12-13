import styled from 'styled-components'

const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  background-color: #fff;
  height: ${props => props.height || '100%'};
`

const Container = styled.main`
  width: 100%;
  height: 100%;
  grid-area: container;
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

const Grid = styled.div`
  height: calc(100% - 9.3rem);
  padding: 0 .5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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


export {Aside, ContentWidget, TextNumber, Grid, ContentWidgetCommon, Container, WrapperWidgets }
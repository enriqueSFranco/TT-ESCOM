import styled from 'styled-components'

const WrapperListCardJobPreviewRecruiter = styled.div`
  width: 90%;
  height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`

const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  background-color: #FFF;
`

const Container = styled.main`
  grid-area: container;
  width: 100%;
  background-color: #fff;
  border-left: 1px solid #ccc;
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const ContentWidget = styled.div`
  outline: 2px solid red;
  display: flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`


export {Aside, ContentWidget, ContentWidgetCommon, Container, WrapperListCardJobPreviewRecruiter, WrapperWidgets }
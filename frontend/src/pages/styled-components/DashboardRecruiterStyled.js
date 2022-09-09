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
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #fff;
  border-left: 1px solid #ccc;
`

export {Aside, Container, WrapperListCardJobPreviewRecruiter }
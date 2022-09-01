import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  top: 4rem;
  width: 100%;
  height: calc(100vh - 4rem);
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-areas: "aside container";
`
const WrapperListCardJobPreviewRecruiter = styled.div`
  width: 90%;
  height: calc(100vh - 10rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  height: 550px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-left: 1px solid #ccc;
`


export { Aside, Container, Form, Wrapper, WrapperListCardJobPreviewRecruiter }
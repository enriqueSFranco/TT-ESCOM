import styled from 'styled-components'

const Main = styled.main`
  position: relative;
  top: 4rem;
  width: 100%;  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 300px 1fr;

  grid-template-areas: 
                      "hero"
                      "info";
`

const GridTop = styled.div`
  grid-area: hero;
`

const GridButtom = styled.div`
  grid-area: info;
  width: 100%;
  height: fit-content;
`

const Form = styled.form`
  width: fit-content;
  height: 80px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000097;
  backdrop-filter: blur(10px);
  padding: .5rem;
  border-radius: 4px;
  z-index: 99;
`

export { Main, GridButtom, GridTop, Form }
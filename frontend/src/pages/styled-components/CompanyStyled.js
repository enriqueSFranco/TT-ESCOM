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
  position: relative;
  top: 6rem;
  padding: 1rem;
  grid-area: info;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 220px;
  justify-items: center;
  width: 100%;
  height: fit-content;
`

const Form = styled.form`
  width: fit-content;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000097;
  backdrop-filter: blur(10px);
  padding: .5rem;
  border-radius: 4px;
`

export { Main, GridButtom, GridTop, Form }
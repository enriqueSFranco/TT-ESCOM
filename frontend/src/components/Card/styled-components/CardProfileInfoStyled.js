import styled from 'styled-components'

const Card = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 220px);
`

const ObjectiveProfesional = styled.div`
  /* height: 150px; */
  margin-top: 1rem;
`

const Experience = styled.div`
  /* height: 150px; */
  border-top: 1px solid #ccc;
`

const Education = styled.div`
  /* height: 1510px; */
  border-top: 1px solid #ccc;
`
const WrapperAcademicHostory = styled.div`
  height: fit-content;
  background-color: #F1F3F4;
  padding: .5rem;
  border-radius: 2px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 2px;
    background-color: #4796E7;
  }

  .text {
    padding: 0;
    margin: 0;
  }
`

export { Card, ObjectiveProfesional, Experience, Education, WrapperAcademicHostory }
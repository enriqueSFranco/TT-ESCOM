import styled from 'styled-components'

const Container = styled.article`
  outline: 2px solid #ccc;
  width: 360px;
  height: fit-content;
  border-radius: .5rem;
  padding: 1rem;
  margin-bottom: 1rem;
`

const Title = styled.h1`
  font-size: 1.3rem;
  text-transform: uppercase;
`

export { Container, Title }
import styled from 'styled-components'

const Container = styled.article`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  width: 360px;
  height: fit-content;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`

const Title = styled.h1`
  font-size: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000;
`

export { Container, Title }
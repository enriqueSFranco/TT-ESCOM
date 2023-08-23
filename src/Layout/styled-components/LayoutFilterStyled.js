import styled from 'styled-components'

const Container = styled.article`
  width: fit-content;
  height: fit-content;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: linear-gradient(27deg, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

`

export { Container, Title }
import styled from 'styled-components'

const Container = styled.article`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 350px;
  height: fit-content;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(27deg, #1C8EFB, #005885);
    border-radius: 1rem 0 0 1rem;
  }
`

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: linear-gradient(27deg, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

`

export { Container, Title }
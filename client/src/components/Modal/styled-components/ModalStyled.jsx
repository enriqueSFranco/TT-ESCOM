import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`
const Wrapper = styled.article`
  --bg: #000000a6;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--bg);
  display: grid;
  place-content: center;
  animation: ${fadeIn} .3s ease;
  z-index: 99;
`
const Header = styled.header`
  height: 50px;
  background-color: transparent;
  display: flex;
  flex-direction: row-reverse;
`

const Title = styled.h1``

const Content = styled.div`
  background-color: #fff;
  width: 900px;
  height: 90vh;
  overflow-y: auto;
  padding: 1rem;
  border-radius: 1rem;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
`

export { Button, Content, Header, Title, Wrapper }
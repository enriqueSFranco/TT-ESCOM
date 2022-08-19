import styled, { keyframes } from 'styled-components'


const fadeIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const WrapperModal = styled.article`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.75);
  `

const ModalContainer = styled.div`
  background-color: #fff;
  width: 50%;
  height: 80vh;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  animation: ${fadeIn} .3s ease forwards;
  `

const ModalContent = styled.div`
  overflow-y: auto;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 2rem;
  color: #ccc;
  transition: color .3s ease-in-out;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: grid;
  place-content: center;
  
  &:hover {
    color: #45A5EA;
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.5rem;
`


export {Button, WrapperModal, Title, ModalContainer, ModalContent}
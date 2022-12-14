import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: fit-content;
  background-color: #ffffffbd;
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #105AF4;
    height: 4px;
    border-radius: 1rem;
  }

  `

const ContainerForm = styled.div`
  position: relative;
  top: 4rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const SubGroupInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const GroupInput = styled.div`
  width: 800px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

const Button = styled.button`
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: .3rem;
  background-color: #F13465;
  color: #FFF;
  font-weight: 600;
`

const Select = styled.select`
  height: 100%;
  width: 250px;
  border-radius: 0;
  outline: 0;
  border: 0;
  padding: 0 .5rem;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const WrapperSelect = styled.div`
  outline: 1px solid #ccc;
`

export { Button, Form, GroupInput, SubGroupInput, Select, WrapperSelect, ContainerForm }
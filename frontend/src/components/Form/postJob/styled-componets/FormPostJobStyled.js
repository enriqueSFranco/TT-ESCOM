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
  border-radius: 1rem;
  `

const ContainerForm = styled.div`
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
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
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const WrapperSelect = styled.div`
  outline: 1px solid #ccc;
`

export { Button, Form, GroupInput, SubGroupInput, Select, WrapperSelect, ContainerForm }
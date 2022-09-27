import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

const AddLanguage = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  margin-right: 1rem;
  font-size: 1.5rem;
`

export { Header, AddLanguage }
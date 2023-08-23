import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`

const AddLanguage = styled.button`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: none;
  outline: none;
  color: #028dd4;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #028ed43f;
  margin: .5rem -.5rem 0 0;
`

export { Header, AddLanguage }
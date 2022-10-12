import styled from 'styled-components'

const WrapperForm = styled.div`
  position: relative;
  top: 3rem;
  background-color: #F7F7F9;
  padding: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const WrapperLegend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GroupButtons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`

const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  outline: none;
  text-indent: 5px;
  margin-top: 1.5rem;
`

export { GroupButtons, TextArea, WrapperForm, WrapperLegend }
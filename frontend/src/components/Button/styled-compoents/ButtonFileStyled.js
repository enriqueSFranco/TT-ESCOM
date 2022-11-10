import styled from 'styled-components'

const WrapperButtonFile = styled.div`
  background-color: ${props => props.bgColor || 'transparent'};
  border-radius: 4px;
`

const WrapperLabel = styled.label`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: ${props => props.color || "#000"};
  padding: .5rem .9rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: .3rem;
  cursor: pointer;
`

const InputFile = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`

export { WrapperButtonFile, WrapperLabel, InputFile }
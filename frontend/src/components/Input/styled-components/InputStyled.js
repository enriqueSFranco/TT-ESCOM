import styled from 'styled-components'

const BoxInput = styled.div`
  position: relative;
  width: fit-content;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const InputLabel = styled.span`
  position: absolute;
  left: 0;
  color: #ccc;
  padding: 1rem;
  pointer-events: none;
  font-size: 1rem;
  transition: all .5s ease;
`

const TextField = styled.input`
  width: ${({width}) => width ? width : '100%'};
  padding: 1rem;
  outline: none;
  border: 1.5px solid #ccc;
  color: ${props => props.color ? props.color : '#fff'};
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 1px;
  border-radius: .2rem;
  background-color: ${props => props.bgInput ? props.bgInput : '#00000097'};

  &:focus {
    border: 1.5px solid #1A73E8;;
  }
  
  &:valid ~ span,
  &:focus ~ span {
    color: ${props => props.colorTextFloat ? props.colorTextFloat : '#fff' };
    transform: translateX(1rem) translateY(-.6rem);
    background-color: ${props => props.bgTextFloat ? props.bgTextFloat : '#00000097'};
    font-size: .75rem;
    letter-spacing: 1px;
    padding: 0 .2rem;
    backdrop-filter: blur(10px);
  }
`

const Icon = styled.div`
  position: absolute;
  width: 20px;
  height: 90%;
  right: .5rem;
  top: .1rem;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${({iconColor}) => iconColor || '#fff'};
  cursor: pointer;
`

export { BoxInput, Icon, InputLabel, TextField }
import styled from 'styled-components'

const BoxInput = styled.div`
  position: relative;
  border: 1.5px solid #ccc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: ${props => props.bgInput ? props.bgInput : '#fff'};
  width: ${({width}) => width || '100%'};
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  width: ${({width}) => width || '100%'};
  outline: none;
  padding: 1rem;
  color: ${props => props.color ? props.color : '#000'};
  background-color: ${props => props.bgInput ? props.bgInput : '#fff'};
  font-weight: 400;
  border: none;
  font-size: 1rem;
  letter-spacing: 1px;

  &:focus {
    box-shadow: #1A73E8 0px 0px 0px 1px, #1A73E8 0px 0px 0px 1px inset;
  }
  
  &:valid ~ span,
  &:focus ~ span {
    color: ${props => props.colorTextFloat ? props.colorTextFloat : '#1A73E8' };
    transform: translateX(1rem) translateY(-1.9rem);
    background-color: ${props => props.bgTextFloat || '#fff'};
    font-size: .75rem;
    letter-spacing: 1px;
    padding: 0 .2rem;
    /* backdrop-filter: blur(10px); */
  }
`

const Icon = styled.div`
  position: absolute;
  width: 20px;
  height: 80%;
  right: .2rem;
  top: .3rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  background-color: ${props => props.bgInput || '#fff'};
  color: ${({iconColor}) => iconColor || '#000'};
  cursor: pointer;
`

export { BoxInput, Icon, InputLabel, TextField }
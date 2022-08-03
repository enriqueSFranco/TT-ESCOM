import styled from 'styled-components'

const BoxInput = styled.div`
  position: relative;
  /* outline: 2px solid red; */
  width: ${props => props.width ? props.width : '300px'};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const InputLabel = styled.span`
  position: absolute;
  left: 0;
  /* text-transform: capitalize; */
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
  border: 1px solid #ccc;
  color: ${props => props.color ? props.color : '#000'};
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 1px;
  border-radius: .8rem;
  background-color: ${props => props.bgInput ? props.bgInput : '#fff'};

  &:valid ~ span,
  &:focus ~ span {
    color: ${props => props.colorTextFloat ? props.colorTextFloat : '#000' };
    transform: translateX(1.2rem) translateY(-.4rem);
    background-color: ${props => props.bgTextFloat ? props.bgTextFloat : '#fff'};
    font-size: .8rem;
    letter-spacing: 2px;
    padding: 0;
  }
`

const Icon = styled.div`
  position: absolute;
  width: 20px;
  height: fit-content;
  right: 1rem;
  top: 1rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  /* outline: 2px solid blue; */
  font-size: 1.1rem;
  color: ${({iconColor}) => iconColor || '#000'};
  cursor: pointer;
`

export { BoxInput, Icon, InputLabel, TextField }
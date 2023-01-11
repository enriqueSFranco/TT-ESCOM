import styled from 'styled-components'

const WrapperCard = styled.div`
  box-shadow: #0B72FF 0px 0px 0px 2px;
  width: 600px;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const MyButton = styled.button`
  display: flex;
  align-items: center; 
  gap: 4px;
  width: fit-content;
  border: none;
  background-color: transparent;
  transition: color .4s ease-in-out;

  &:hover {
    color: '#125DFC';
  }
`

const WrapperActions = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Title = styled.h2`
  font-size: ${props => `${props.fontSize}rem` || '1rem'};
  font-weight: normal;
  color: ${props => props.color || '#000'};
  text-transform: ${props => props.textTransform || 'normal'}
`


export {WrapperCard, WrapperActions, MyButton, Title}
import styled from 'styled-components'

const WrapperCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  display: grid;
  grid-template-columns: 90% 1fr;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Title = styled.h2`
  font-size: ${props => `${props.fontSize}rem` || '1rem'};
  text-transform: ${props => props.textTransform || 'capitalize'}
`


export {WrapperCard, Title}
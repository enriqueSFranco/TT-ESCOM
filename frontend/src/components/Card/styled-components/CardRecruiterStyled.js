import styled from 'styled-components'

const CardContent = styled.article`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  width: 350px;
  height: fit-content;
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #000;
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const CardInfoActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 2rem;
  margin-top: 1rem;
`

const TextH3 = styled.h3`
  font-size: ${props => props.fontSize || '1rem'};
`


export { CardContent, CardInfo, CardInfoActions, TextH3 }
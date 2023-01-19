import styled from 'styled-components'

const CardContent = styled.article`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 350px;
  height: fit-content;
  background-color: #F2F7F6;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #000;
`

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5px;
`

const CardInfoActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 2rem;
  margin-top: 1rem;
`

const TextH3 = styled.h3`
  color: #0A58CA;
  font-size: ${props => props.fontSize || '1rem'};
  margin: 1rem 0 0 0;
  padding: 0;
`


export { CardContent, CardInfo, CardInfoActions, TextH3 }
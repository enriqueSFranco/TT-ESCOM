import styled from 'styled-components'

const LanguageStyled = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: absolute;
  width: 300px;
  height: 120px;
  outline: 1px solid #ccc;
  border-radius: 4px;
  padding: .5rem;
`

const Actions = styled.div`
  width: 50px;
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 0;
`

const Level = styled.span`
  font-size: .85rem;
  color: ${props => props.color || '#000'};
`

const HeaderLanguage = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LanguageText = styled.h1`
  text-align: center;
  font-size: 1.5rem;
`

export { Actions, Level, LanguageStyled, HeaderLanguage, LanguageText }
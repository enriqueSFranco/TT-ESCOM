import styled from 'styled-components'

const LanguageStyled = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  width: 300px;
  height: fit-content;
  border-radius: 4px;
  padding: .5rem;
  background-color: #F5F7F8;

  .image {
    width: 50px;
    position: absolute;
    top: 1.3rem;
    left: 1.3rem;
  }
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
  background: linear-gradient(27deg, #3f5efb, #fc466b);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export { Actions, Level, LanguageStyled, HeaderLanguage, LanguageText }
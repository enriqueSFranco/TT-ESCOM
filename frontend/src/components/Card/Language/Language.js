import React from 'react'
import { GrEdit } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'
import ProgressBar from 'components/ProgressBar/ProgressBar'
import { Actions, Level, LanguageStyled, HeaderLanguage, LanguageText } from '../styled-components/CardLanguageStyled'

const Language = ({ language, progress, levelColor }) => {
  return (
    <LanguageStyled>
      <HeaderLanguage>
        <span>Idioma</span>
        <Actions>
          <GrEdit />
          <AiFillDelete />
        </Actions>
      </HeaderLanguage>
      <LanguageText>Ingles</LanguageText>
      <div style={{textAlign:'center'}}>
        <Level color={levelColor}>Nativo</Level>
      </div>
      <ProgressBar progress={60} />
    </LanguageStyled>
  )
}

export default Language
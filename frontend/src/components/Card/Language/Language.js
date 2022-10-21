import React from 'react'
import { GrEdit } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'
import ProgressBar from 'components/ProgressBar/ProgressBar'
import { Actions, Level, LanguageStyled, HeaderLanguage, LanguageText } from '../styled-components/CardLanguageStyled'

const Language = ({ type, language, progress, levelColor }) => {

  return (
    <LanguageStyled>
      <HeaderLanguage>
        <span>{type}</span>
        <Actions>
          <GrEdit />
          <AiFillDelete />
        </Actions>
      </HeaderLanguage>
      <LanguageText>{language}</LanguageText>
      <div style={{textAlign:'center'}}>
        <Level color={levelColor}>Nativo</Level>
      </div>
      <ProgressBar progress={progress} language={language} />
    </LanguageStyled>
  )
}

export default Language
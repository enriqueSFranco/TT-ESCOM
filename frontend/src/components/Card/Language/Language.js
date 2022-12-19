import React from 'react'
import { GrEdit } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'
import ProgressBar from 'components/ProgressBar/ProgressBar'
import { Actions, Level, LanguageStyled, HeaderLanguage, LanguageText } from '../styled-components/CardLanguageStyled'

function generateLevel(level) {
  let result = ""
  if (level >= 30 && level <= 50) return result += "Basico"
  if (level >= 51 && level <= 60) return result += "Intermedio"
  if (level >= 61 && level <= 100) return result += "Avanzado"
}

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
        <Level color={levelColor}>{generateLevel(progress)}</Level>
      </div>
      <ProgressBar progress={progress} language={language} />
    </LanguageStyled>
  )
}

export default Language
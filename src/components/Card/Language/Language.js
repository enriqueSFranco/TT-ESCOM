import React from 'react'
import languageImg from 'assets/images/language-translate.png'
import { GrEdit } from 'react-icons/gr'
import { AiFillDelete } from 'react-icons/ai'
import ProgressBar from 'components/ProgressBar/ProgressBar'
import { Actions, Level, LanguageStyled, HeaderLanguage, LanguageText } from '../styled-components/CardLanguageStyled'

function generateLevel (level) {
  let result = ""
  if (level >= 30 && level <= 50) return result += "Nivel básico"
  if (level >= 51 && level <= 60) return result += "Nivel intermedio"
  if (level >= 61 && level <= 100) return result += "Nivel avanzado"
}

const Language = ({ type, language, progress, levelColor }) => {

  return (
    <LanguageStyled>
      <HeaderLanguage>
        <span style={{ color: '#6D6D6D', fontWeight: '600' }}>{type}</span>
        <Actions>
          <GrEdit />
          <AiFillDelete />
        </Actions>
      </HeaderLanguage>
      <picture>
        <source srcSet={languageImg} media="(min-width: 100px)" />
        <img src={languageImg} alt="lenguaje" className="image" />
      </picture>
      <LanguageText>{language}</LanguageText>
      <div style={{ textAlign: 'center' }}>
        <Level color={levelColor}>{generateLevel(progress)}</Level>
      </div>
      <ProgressBar progress={progress} language={language} />
    </LanguageStyled>
  )
}

export default Language
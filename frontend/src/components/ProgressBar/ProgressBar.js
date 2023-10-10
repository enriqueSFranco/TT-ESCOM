import React from 'react'
import { stringToColor } from 'utils/generateColors'
import { Progress, ProgressText, WrapperProgress } from './ProgressBarStyled'

const ProgressBar = ({ progress, language }) => {
  console.log(stringToColor(language))
  return (
    <WrapperProgress>
      <Progress progress={progress} bg={`${stringToColor(language)}`}>
        <ProgressText>{progress}%</ProgressText>
      </Progress>
    </WrapperProgress>
  )
}

export default ProgressBar
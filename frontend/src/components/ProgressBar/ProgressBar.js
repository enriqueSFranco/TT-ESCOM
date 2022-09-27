import React from 'react'
import { Progress, ProgressText, WrapperProgress } from './ProgressBarStyled'

const ProgressBar = ({progress}) => {
  return (
    <WrapperProgress>
      <Progress progress={progress}>
        <ProgressText>{progress}%</ProgressText>
      </Progress>
    </WrapperProgress>
  )
}

export default ProgressBar
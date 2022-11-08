import React from 'react'
import { WrapperTooltip, Title } from './TooltipStyled'

const Tooltip = ({children, title}) => {
  return (
    <WrapperTooltip>
      {children}
      <Title>{title}</Title>
    </WrapperTooltip>
  )
}

export default Tooltip
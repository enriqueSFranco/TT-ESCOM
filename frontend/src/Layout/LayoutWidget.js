import React from 'react'
import {LayoutWidgetStyled} from './styled-components/LayoutWidgetStyled'

const LayoutWidget = ({number, text, icon}) => {
  return (
    <LayoutWidgetStyled>
      <div>
        <h3>{number}</h3>
        <span>{text}</span>
      </div>
      <div>
        <span>
          {icon}
        </span>
      </div>
    </LayoutWidgetStyled>
  )
}

export default LayoutWidget
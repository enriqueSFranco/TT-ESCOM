import React from 'react'
import {LayoutWidgetStyled} from './styled-components/LayoutWidgetStyled'

const LayoutWidget = ({number, text, icon}) => {
  return (
    <LayoutWidgetStyled>
      <div>
        <h3>3</h3>
        <span>Reclutadores en espera</span>
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
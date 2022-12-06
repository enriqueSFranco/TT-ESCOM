import React from 'react'
import { Widget } from './styled-components/LayoutWidgetRecruiterStyled'

const LayoutWidgetRecruiter = ({children}) => {
  return (
    <Widget>
      {children}
    </Widget>
  )
}

export default LayoutWidgetRecruiter
import { Widget } from './styled-components/LayoutWidgetRecruiterStyled'

interface Props {
  children: React.ReactNode
}

const LayoutWidgetRecruiter: React.FC<Props> = ({ children }) => {
  return (
    <Widget>
      {children}
    </Widget>
  )
}

export default LayoutWidgetRecruiter
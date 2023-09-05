
interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, ...rest }) => {
  return (
    <button {...rest}>{children}</button>
  )
}

export default BaseButton
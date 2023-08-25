
interface BaseButtonProps {
  children: React.ReactNode
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default BaseButton
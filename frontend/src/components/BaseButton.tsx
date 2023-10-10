
interface BaseButtonProps {
  children: React.ReactNode
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, ...props }) => {
  return (
    <button className="w-full py-2 bg-blue-500 rounded-sm font-light flex items-center justify-center text-white lg:w-14 lg:h-full lg:p-0 lg:rounded-full lg:hover:bg-blue-600" {...props}>{children}</button>
  )
}

export default BaseButton
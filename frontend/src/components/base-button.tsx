import { HexadecimalColor } from '../shared'

type Size = {
  width: number
  height: number
}

type BaseButtonProps = {
  size: Size
  bgColor?: HexadecimalColor
  color?: HexadecimalColor
  children: React.ReactNode
}

export const BaseButton = ({ children, size, color = '#fff', bgColor = '#222', ...props }: BaseButtonProps) => {
  return (
    <button
      className={`w-[${size.width}px] h-[${size.height}px] py-3 px-4 bg-[${bgColor}] text-[${color}] rounded-sm font-light flex items-center justify-center rounded-ld`}
      {...props}
    >
      {children}
    </button>
  )
}
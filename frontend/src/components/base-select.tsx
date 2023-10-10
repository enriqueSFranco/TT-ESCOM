import { useId } from "react"

interface BaseSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  children: React.ReactNode
}

export const BaseSelect: React.FC<BaseSelectProps> = ({ name, children, ...rest }) => {
  const selectHintId = useId()

  return (
    <select
      name={name}
      id={selectHintId}
      className="w-full h-10 flex items-center justify-between appearance-none bg-transparent border-none outline-none"
      {...rest}
    >
      {children}
    </select>
  )
}

import { useId } from 'react'

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const BaseInput: React.FC<BaseInputProps> = ({ value, onChange, ...props }) => {
  const inputHintId = useId()
  return (
    <input
      id={inputHintId}
      value={value}
      onChange={onChange}
      {...props}
      className='w-full py-2 focus:border-blue-500 caret-black outline-none border-none indent-3 bg-transparent rounded-sm text-black font-light placeholder:text-gray-400 placeholder:font-light placeholder:text-sm'
    />
  )
}

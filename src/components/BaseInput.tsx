import { useId } from 'react'

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const BaseInput: React.FC<BaseInputProps> = ({ value, onChange, ...props }) => {
  const inputHintId = useId()
  return (
    <input
      id={inputHintId}
      value={value}
      onChange={onChange}
      {...props}
      className='w-full py-2 outline-none border-none indent-3 bg-slate-800/5 rounded-sm text-black font-light placeholder:text-black placeholder:font-light placeholder:text-sm'
    />
  )
}

export default BaseInput
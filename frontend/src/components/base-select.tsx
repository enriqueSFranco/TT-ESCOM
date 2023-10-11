import { useId } from 'react'

type Option<T> = {
  value: T
  label: string
}

interface BaseSelectProps<T> {
  name: string
  options: Option<T>[]
  value: T
  onChange: (value: T) => void
}

export function BaseSelect<T> ({ name, options, value, onChange, ...rest }: BaseSelectProps<T>) {
  const selectHintId = useId()

  function handleChange (e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target

    if (value.trim().length > 0) {
      const selectedOption = options.find(option => option.value === value)
      console.log(selectedOption)
      if (selectedOption !== undefined) {
        onChange(selectedOption.value)
      }
    }
  }

  return (
    <select
      name={name}
      value={value?.toString()}
      id={selectHintId}
      onChange={handleChange}
      className='w-full h-10 flex items-center justify-between appearance-none bg-transparent border-none outline-none'
      {...rest}
    >
      {options.map(option => <option key={`option-id-${crypto.randomUUID()}`} value={option.value?.toString()}>{option.label}</option>)}
    </select>
  )
}

import { useState } from 'react'

export function useForm(initialForm = {}) {
  const [form, setForm] = useState(initialForm);

  function handleChange(e) {
    const { value, name } = e.target;
    setForm({
      ...form, [name]: value
    })
  }

  return { form, handleChange }
}
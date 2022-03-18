import { useState } from "react";

export const useForm = (initialForm) => {
  const[form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  return {
    form,
    handleChange,
    handleChecked
  };
};

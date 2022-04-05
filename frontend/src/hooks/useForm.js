import { useState } from "react";
import { createAccountCompany } from "../services/businnes/createAccountCompany";
import { createAccountStudent } from "../services/students/createAccountStudent";

export const useForm = (initialForm, validateForm) => {
  const[form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  
  const hadlerValidate = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handlerSubmitStudent = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    
    if (Object.keys(errors).length === 0) { // si la longitud de las claves del objeto error es de cero, quiere decir que no hay errores.
      setLoading(true);
      createAccountStudent(form)
        .then(response => {
          setLoading(false);
          setResponse(response);
          // setForm(initialForm)
        });
    } else {
      return;
    }
  };

  const handlerSubmitCompany = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      createAccountCompany(form)
      .then(response => {
        setLoading(false);
        setResponse(response);
      })
      .catch(error => console.error(error));
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleChecked,
    handlerSubmitStudent,
    handlerSubmitCompany,
    hadlerValidate
  };
};

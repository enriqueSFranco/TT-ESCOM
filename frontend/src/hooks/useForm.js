import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccountCompany } from "../services/businnes/createAccountCompany";
import { createAccountStudent } from "../services/students/createAccountStudent";

export const useForm = (initialForm, validateForm) => {
  const navigate = useNavigate();
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

  // PASAR A LOS COMPONENTES DE REGISTRO

  const handlerSubmitStudent = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    
    if (Object.keys(errors).length === 0) { // si la longitud de las claves del objeto error es de cero, quiere decir que no hay errores.
      setLoading(true);
      createAccountStudent(form)
        .then(response => {
          setLoading(false);
          // console.log('->',response);
          if (response.data.status === 200 || response.data.status === 201) {
            setResponse(response);
              setTimeout(() => {
                navigate("/alumno")
              }, 5000);
          } else {
          }
        })
        .catch(() => setResponse(response.data.message))
        .finally(() => setLoading(false));
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

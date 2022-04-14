import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccountCompany } from "services/businnes/index";
import { createAccountStudent } from "services/students/index";
import { postJob } from "services/jobs";

export const useForm = (initialForm, validateForm) => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleValidate = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmitStudent = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      // si la longitud de las claves del objeto error es de cero, quiere decir que no hay errores.
      setLoading(true);
    
      createAccountStudent(form)
        .then(response => {
          // console.log(response.data.errors.message)
          if (response.data.status === 200 || response.data.status === 201) {
            setLoading(false);
            setResponse(true);
            setTimeout(() => {
              navigate("/alumno");
            }, 3000);
          }
        })
        .catch(() => setResponse(false))
        .finally(() => setLoading(false));
    } else {
      return;
    }
  };

  const handleSubmitCompany = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      // setLoading(true);
      createAccountCompany(form);
    }
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      postJob(form)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleChecked,
    handleSubmitStudent,
    handleSubmitCompany,
    handleValidate,
    handlePostJob,
  };
};

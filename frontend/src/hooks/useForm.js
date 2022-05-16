import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { createBusiness } from "services/businnes/index";
import { createAccountStudent } from "services/students/index";
import { postJob } from "services/jobs/index";
import { postCertification } from "services/students/index";

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
    e.preventDefault(); // cancelamos el comporamiento del formulario que tiene por defecto

    setErrors(validateForm(form)); // verificamos si hay error en los campos del formulario
    if (Object.keys(errors).length === 0) { // si la longitud de las claves del objeto error es de cero, quiere decir que no hay errores.
      setLoading(true);
      createAccountStudent(form).then((response) => {
        console.log(response)
        if (response.status === 201) {
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/alumno");
          }, 3000);
          setForm(initialForm);
        } else {
          setErrors({t100_email: "El email ya esta en uso"});
        }
      });
    } else return;
  };

  const handleSubmitCompany = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    console.log(form);
    if (Object.keys(errors).length === 0) {
      createBusiness(form)
        .then(response => {
          console.log(response)
          if (response.status === 201) {
            toast.success(response?.data?.message);
            setTimeout(() => {
              navigate("/pre-registro");
            }, 3000);
          } else if (response.status === 400) {
            toast.error(response.data.message);
          }
        })
    }
  };

  const onSubmitPostJob = (e) => {
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

  const onSubmitPostCertification = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      postCertification(form)
        .then(response => {
          if (response.status === 201) {
            const { data } = response;
            setResponse(data);
            setLoading(false);
          } else {
            setLoading(false);
          }
        })
    }
  }

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
    onSubmitPostJob,
    onSubmitPostCertification
  };
};

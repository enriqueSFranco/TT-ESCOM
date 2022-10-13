import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CODE_201 } from "services/http.code";
import { createAccountRecruiter } from "services";
import { createAccountStudent } from "services/students/index";
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
        if (response.status || response.status === CODE_201) {
          const { data } = response
          toast.success(data.message);
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

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fr = new FileReader()
      fr.readAsDataURL(file)

      fr.onload = () => {
        resolve(fr.result)
      }
      fr.onerror = (error) => {
        reject(error)
      }
    })
  }

  async function uploadFile(e) {
    const file = e.target.files[0]
    console.log('file: ',file)
    const base64 = await convertToBase64(file)

    return base64
  }

  const handleSubmitCompany = (e) => {
    e.preventDefault();
    // form.t300_validator_document = uploadFile(e)
    setErrors(validateForm(form));
    // console.log('->',form)

    if (Object.keys(errors).length === 0) {
      createAccountRecruiter(form)
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

  // const handleSubmitCompanyRecruiter = e => {
  //   e.preventDefault();
  //   if (Object.keys(errors).length === 0) {
  //     setLoading(true);
  //     createBusinessRecruiter(form)
  //     .then(response => {
  //       if (response.status === 201) {
  //         toast.success("Pre-Registro enviado con exito.");
  //         setTimeout(() => {
  //           navigate("/pre-registro")
  //         }, 3000);
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  //     .finally(() => setLoading(false));
  //   }
  // }

  const onSubmitPostCertification = (e) => {
    e.preventDefault();
    // setErrors(validateForm(form));
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
    onSubmitPostCertification,
  };
};

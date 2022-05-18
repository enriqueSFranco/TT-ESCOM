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
          navigate("/mis-vacantes");
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

  const setJobData = (jobInfo) => {
    
    console.log("Hola we c:");
    form.t200_job = jobInfo?.t200_job;
    form.t200_description = jobInfo?.t200_description;
    form.t200_benefits = jobInfo?.t200_benefits;
    form.t200_check_time = jobInfo?.t200_check_time;
    form.t200_closing_hour = jobInfo?.t200_closing_hour;
    form.t200_work_days = jobInfo?.t200_work_days;
    form.c207_id_experience = jobInfo?.c207_id_experience?.c207_id_experience;
    form.t200_min_salary = jobInfo?.t200_min_salary;
    form.t200_max_salary = jobInfo?.t200_max_salary;
    form.t200_gross_salary = jobInfo?.t200_gross_salary;
    form.t200_salary_negotiable = jobInfo?.t200_salary_negotiable;
    form.c214_id_modality = jobInfo?.c214_id_modality?.c214_id_modality;
    form.c206_id_profile = jobInfo?.c206_id_profile?.c206_id_profile;
    form.c204_id_vacant_status = jobInfo?.c204_id_vacant_status?.c204_id_vacant_status;
    form.c208_id_contract = jobInfo?.c208_id_contract?.c208_id_contract;
    form.t200_publish_date = jobInfo?.t200_publish_date;
    form.t200_close_date = jobInfo?.t200_close_date;
    form.t200_state = jobInfo?.t200_state;
    form.t200_municipality = jobInfo?.t200_municipality;
    form.t200_locality = jobInfo?.t200_locality;
    form.t200_street = jobInfo?.t200_street;
    form.t200_cp = jobInfo?.t200_cp;
    form.t200_interior_number = jobInfo?.t200_interior_number;
    form.t200_exterior_number = jobInfo?.t200_exterior_number;
    form.t200_vacancy = jobInfo?.t200_vacancy;
    console.log("Listo");
  }

  return {
    form,
    errors,
    loading,
    response,
    setJobData,
    handleChange,
    handleChecked,
    handleSubmitStudent,
    handleSubmitCompany,
    handleValidate,
    onSubmitPostJob,
    onSubmitPostCertification
  };
};

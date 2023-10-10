// import { useFetch } from "hooks/useFetch";
import { FormRecruiterInfo } from "./FormRecruiterInfo";

// const validateForm = (form) => {
//   let errors = {};
//   let regex = {
//     t301_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
//     t301_last_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
//     t301_email: /^(\w+[/./-]?){1,}@[A-Za-z]+[/.]\w{2,}$/,
//     t301_phonenumber: /\x2b[0-9]+/,
//   };

//   if (!form.t301_name.trim())
//     errors.t301_name = "El campo 'Nombre' es requerido";
//   else if (!regex.t301_name.test(form.t301_name))
//     errors.t301_name = "El campo 'Nombre' es incorrecto";

//   if (!form.t301_email.trim())
//     errors.t301_email = "El campo 'Correo electronico' es requerido";
//   else if (!regex.t301_email.test(form.t301_email))
//     errors.t301_email = "El campo 'Correo electronico' es incorrecto";

//   if (!form.t301_last_name.trim())
//     errors.t301_last_name = "El campo 'Apellidos' es requerido";
//   else if (!regex.t301_last_name.test(form.t301_last_name))
//     errors.t301_last_name = "El campo 'Apellidos' es incorrecto";

//   // if (!form.t301_phonenumber.trim())
//   //   errors.t301_phonenumber = "El campo 'Telefono' es requerido";
//   // else if (!regex.t301_phonenumber.test(form.t301_phonenumber))
//   //   errors.t301_phonenumber = "El campo 'Telefono' es incorrecto";

//   return errors;
// };

export const FormBusinessRecruiter: React.FC = () => {
  // const {
  //   form,
  //   errors,
  //   handleChange,
  //   handleValidate,
  //   handleSubmitCompanyRecruiter,
  // } = useForm(initialForm, validateForm);
  // const { data } = useFetch(process.env.REACT_APP_URL_COMPANY);

  return (
    <div>
      <select
        id="t300_id_company"
        name="t300_id_company"
      // onChange={(event, newValue) => {
      //   form.t300_id_company = newValue["t300_id_company"];
      // }}
      // value={form.t300_id_company}
      />
      <FormRecruiterInfo />
    </div>
  );
};

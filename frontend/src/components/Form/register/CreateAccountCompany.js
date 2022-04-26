import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "hooks/useForm";
import { companyInitialForm } from "../schemes";
import FormCompanyInfo from "./FormCompanyInfo";
import FormRecruiterInfo from "./FormRecruiterInfo";
import styles from "../Styles.module.css";

/**
 * RFC DE UNA EMPRESA
 * EJM951103H34
 * EJM: Iniciales de una empresa
 * 951103: Fecha de creacion de la empresa (YY/MM/DD) 95/11/03
 * H34: Homoclave, proporcionada por el SAT
 **/

const validateForm = (form) => {
  let errors = {};
  let regex = {
    t300_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t300_rfc: /^([A-ZÑ\x26]{3,4})([0-9]{6})([A-Z0-9]{3})$/,
    t300_bussiness_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,255}$/,
    t301_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t301_last_name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{4,16}$/,
    t301_email: /^(\w+[/./-]?){1,}@[A-Za-z]+[/.]\w{2,}$/,
    t301_phonenumber: /\x2b[0-9]+/,
  };

  if (!form.t300_name.trim())
    errors.t300_name = "El campo 'Nombre de la empresa' es requerido.";
  else if (!regex.t300_name.test(form.t300_name))
    errors.t300_name =
      "El campo 'Empresa' solo acepta letras y espacios en blanco.";

  if (!form.t300_rfc.trim()) errors.t300_rfc = "El campo 'rfc' es requerido.";
  else if (!regex.t300_rfc.test(form.t300_rfc))
    errors.t300_rfc = "El campo 'rfc' no es valido.";

  if (!form.t300_bussiness_name.trim())
    errors.t300_bussiness_name = "El campo 'razon social' es requerido";
  else if (!regex.t300_bussiness_name.test(form.t300_bussiness_name))
    errors.t300_bussiness_name =
      "El campo 'razon social' solo acepta letras y espacion en blanco";

  if (!form.t301_email.trim())
    errors.t301_email = "El campo 'Email' es requerido.";
  else if (!regex.t301_email.test(form.t301_email))
    errors.t301_email = "El campo 'Email' es incorrecto.";

  return errors;
};

const FormCompany = () => {
  const { 
    form, 
    errors, 
    handleChange, 
    handleValidate, 
    handleSubmitCompany } = useForm(companyInitialForm, validateForm);
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  const prevStep = () => setStep(step - 1);

  if (step === 1)
    return (
      <div className={`container bg-primary shadow rounded ${styles.wrapper}`}>
        <div className="row text-center">
          <div className={`${styles.bg} col rounded`}>
            <div className={`${styles.login}`}>
              <blockquote>
                Un paso más cerca de tu nuevo <em>empleo</em>.
              </blockquote>
              <span>
                Ya tines cuenta?{" "}
                <Link className={`${styles.linkToLogin}`} to="/reclutador">
                  Inicia sesion
                </Link>
              </span>
              <span>
                <a href="/#">Recuperar contraseña</a>
              </span>
            </div>
          </div>
          <div className={`col bg-white p-5 rounded-end`}>
            <h2 className={`${styles.welcome}`}>Bienvenido</h2>
            <FormCompanyInfo
              nextStep={nextStep}
              form={form}
              errors={errors}
              handleChange={handleChange}
              handleValidate={handleValidate}
            />
          </div>
        </div>
      </div>
    );
  else if (step === 2)
    return (
      <div className={`container bg-primary shadow rounded ${styles.wrapper}`}>
        <div className="row">
          <div
            className={`${styles.bg} col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded`}
          >
            <div className={`${styles.login}`}>
              <blockquote>
                Crea tu cuenta y publica tus vacantes con nosotros.
              </blockquote>
              <span>
                Ya tines cuenta?{" "}
                <Link className={`${styles.linkToLogin}`} to="/reclutador">
                  Inicia sesion
                </Link>
              </span>
              <span>
                <a href="/#">Recuperar contraseña</a>
              </span>
            </div>
          </div>
          <div className={`col bg-white p-5 rounded-end`}>
            <h2 className={`${styles.welcome}`}>Bienvenido</h2>
            <FormRecruiterInfo
              prevStep={prevStep}
              form={form}
              errors={errors}
              handleSubmitCompany={handleSubmitCompany}
              handleChange={handleChange}
              handleValidate={handleValidate}
            />
          </div>
        </div>
      </div>
    );
};

export default FormCompany;

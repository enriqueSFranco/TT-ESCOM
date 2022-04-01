import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { createAccountCompany } from "../../services/businnes/createAccountCompany";
import TextField from "@mui/material/TextField";
import styles from "./Styles.module.css";

const initialForm = {
    t300_name: "",
    t300_rfc: "",
    t300_nss: 0,
    t300_bussiness_name: "",
    t300_web_page: "https://www.company.com.mx/",
    t300_mision: "",
    t300_vision: "",
    t300_objective: "",
    t300_logo: null,
    t300_banner: null,
    t400_id_admin: "",
    t300_create_date: "2022-03-24"
};

const FormCompany = () => {
  const { form, handleChange } = useForm(initialForm);

  const onSubmit = (e) => {
    e.preventDefault();
    createAccountCompany(form)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
  };

  if (form === null) return;

  return (
    <div className="container w-75 bg-primary shadow rounded">
      <div className="row align-items-stretch">
        <div
          className={`${styles.bg} col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded`}
        >
          <h1>Bolsa de trabajo ESCOM</h1>
        </div>
        <div className="col bg-white p-5 rounded-end">
          <h2 className={`${styles.welcome}`}>Bienvenido</h2>
          <form onSubmit={onSubmit}>
            {/* input para el username */}
            <div className={styles.inputGroup}>
              <TextField
                label="Nombre de su empresa"
                id="t300_name"
                name="t300_name"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t300_name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}> 
              <TextField
                label="RFC"
                id="t300_rfc"
                name="t300_rfc"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t300_rfc}
                onChange={handleChange}
              />
            </div>
            {/* input para el password */}
            {/* <div className={styles.inputGroup}>
              <TextField
                label="Correo electronico"
                id="emailCompany"
                name="emailCompany"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.emailCompany}
                onChange={handleChange}
              />
            </div> */}
            <div className={styles.wrapperBtnLogin}>
              <button
                type="submit"
                className={`${styles.btLogin} btn btn-primary`}
              >
                Confirmar Pre-Registro
              </button>
            </div>
            <div className="my-3">
              <span>
                Ya tines cuenta?{" "}
                <Link to="/reclutador">Inicia sesion</Link>
              </span>
              <br />
              <span>
                <a href="/#">Recuperar contraseña</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCompany;

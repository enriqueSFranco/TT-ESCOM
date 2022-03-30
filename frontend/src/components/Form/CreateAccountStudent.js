import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { helpHttp } from "../../utils/helpHttp";
import TextField from "@mui/material/TextField";
import StepComponent from "./FirstFormStudet/Step"
import styles from "./Styles.module.css";

let initialForm = {
  t100_boleta: "",
  t100_name: "",
  t100_last_name: "",
  t100_username: "",
  t100_password: "",
  t100_cv: null,
  t100_email: "",
  t100_gender: null,
  t100_date_of_birth: null,
  t100_personal_objectives: "",
  t100_target_salary: null,
  t100_travel: false,
  t100_profile_picture: null,
  is_active: false
  
};

const CreateAccount = () => {
  const { form, handleChange } = useForm(initialForm);

  if (form === null) return;

  const createAccount = (e) => {
    e.preventDefault();
    const endpoint = "/api/Students/";

    let options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: form,
    };
    helpHttp()
      .POST(endpoint, options)
      .then((response) => {
        if (!response.err) {
          console.log(response);
          console.log(this.props);
          /*window.location.replace("https://www.linkedin.com/feed/");*/
          
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={`container bg-primary shadow rounded`}>
      <div className="row align-items-stretch">
        <div
          className={`${styles.bg} col d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded`}
        >
          <h1>Bolsa de trabajo ESCOM</h1>
        </div>
        <div className="col bg-white p-5 rounded-end">
          <h2 className={`${styles.welcome}`}>Bienvenido</h2>
          <form onSubmit={createAccount}>
            {/* input para el username 
            <div className={styles.inputGroup}>
              <TextField
                label="Nombre"
                id="t100_name"
                name="t100_name"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t100_name}
                onChange={handleChange}
              />
  </div>*/}
            <div className={styles.inputGroup}>
              <TextField
                label="Boleta"
                id="t100_boleta"
                name="t100_boleta"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t100_boleta}
                onChange={handleChange}
              />
            </div>
            {/* input para el password */}
            <div className={styles.inputGroup}>
              <TextField
                label="Correo electronico"
                id="t100_email"
                name="t100_email"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t100_email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <TextField
                label="Contraseña"
                id="t100_password"
                name="t100_password"
                type="password"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.t100_password}
                onChange={handleChange}
              />
            </div>
            <div className={styles.wrapperBtnLogin}>
              <button
                type="submit"
                className={`${styles.btLogin} btn btn-primary`}
              >
                Crear Cuenta
              </button>
            </div>
            <div className="my-3">
              <span>
                Ya tines cuenta?{" "}
                <Link to="/alumno">Inicia sesion</Link>
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

export default CreateAccount;

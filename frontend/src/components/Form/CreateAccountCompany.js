import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import TextField from "@mui/material/TextField";
import styles from "./Styles.module.css";

const initialForm = {
  nameCompany: "",
  rfcCompany: "",
  emailCompany: "",
  roleCompany: "",
};

const FormCompany = () => {
  const { form, handleChange } = useForm(initialForm);

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
          <form>
            {/* input para el username */}
            <div className={styles.inputGroup}>
              <TextField
                label="Nombre de su empresa"
                id="nameCompany"
                name="nameCompany"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.nameCompany}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}> 
              <TextField
                label="RFC"
                id="rfc"
                name="rfc"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.rfc}
                onChange={handleChange}
              />
            </div>
            {/* input para el password */}
            <div className={styles.inputGroup}>
              <TextField
                label="Correo electronico"
                id="emailCompany"
                name="emailCompany"
                sx={{ width: 500, maxWidth: "100%" }}
                value={form.emailCompany}
                onChange={handleChange}
              />
            </div>
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

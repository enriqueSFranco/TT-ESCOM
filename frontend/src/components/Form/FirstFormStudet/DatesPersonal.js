import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import styles from "./StylesStepper.module.css";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      format="## ## ## ## ##"
    />
  );
});

const BoletaC = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
      format="##########"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

BoletaC.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function DatesPersonal({ form, handleChange }) {
  const [checked, setChecked] = useState(false);

  const checkChanged = (state) => {
    setChecked(!checked);
    //setTravel(!checked);
    //console.log(!checked);
  };

  return (
    <div className={styles.containerPage}>
      <h5 className={styles.formTitle}>Proporcionanos algunos datos para completar tu registro.</h5>
      <form className={styles.formDataPrivate}>
        <div className={styles.inputGroup}>
          <TextField
            size="small"
            label="Nombre"
            name="t100_name"
            id="t100_name"
            value={form.t100_name}
            onChange={handleChange}
            sx={{ width: 300, maxWidth: "100%", marginRight: 2 }}
          />
          <TextField
            size="small"
            label="Apellido(s)"
            name="t100_last_name"
            id="t100_last_name"
            value={form.t100_last_name}
            onChange={handleChange}
            sx={{ width: 300, maxWidth: "100%" }}
          />
        </div>

        <div className={styles.inputGroup}>
          <TextField
            size="small"
            sx={{width: 300}}
            label="Telefono de contacto"
            value={form.t100_phonenumber}
            onChange={handleChange}
            name="t100_phonenumber"
            id="t100_phonenumber"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
        </div>

        <div className={styles.inputGroupP}>
          <div className={styles.Col1}>
            <TextField
              size="small"
              label="¿Donde te ubicas?"
              name="t100_residence"
              id="t100_residence"
              value={form.t100_residence}
              onChange={handleChange}
              sx={{ width: 300, maxWidth: "100%" }}
            />
            <div className={styles.inputCheckbox}>
              Dispuesto a reubicarte?
              <Checkbox
                value={(form.t100_travel = checked)}
                checked={checked}
                onChange={checkChanged}
                size="small"
              />
            </div>
          </div>
        </div>

        <div className={`my-4 ${styles.inputGroup}`}>
          <p className={styles.titleParagraph}>¿Eres comunidad del IPN? Ingresa tu número de boleta.</p>
          <TextField
            size="small"
            label="Boleta"
            value={form.t100_boleta}
            onChange={handleChange}
            name="t100_boleta"
            id="t100_boleta"
            sx={{ width: 300, maxWidth: "100%" }}
            InputProps={{
              inputComponent: BoletaC,
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default DatesPersonal;

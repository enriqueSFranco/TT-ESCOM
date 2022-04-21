import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import styles from "./StylesStepper.module.css";
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';


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
      format="### ### ####"
    />
  );
});

NumberFormatCustom.propTypes = {
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
    <div >
    <form>
      <div className={styles.inputGroup}>
          <TextField
            label="¿Donde te ubicas?"
            name="t100_residence"
            id="t100_residence"
            value={form.t100_residence}
            onChange={handleChange}
            sx={{ width: 400, maxWidth: "100%" }}
          />
        </div>

        <div className={styles.inputCheckbox}>
          Dispuesto a reubicarte?
          <Checkbox
            value={(form.t100_travel = checked)}
            checked={checked}
            onChange={checkChanged}
            size="small"
          />
        </div>

        <div className={styles.inputGroup}>
        <TextField
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
  </form>
    </div>
  );
}

export default DatesPersonal;

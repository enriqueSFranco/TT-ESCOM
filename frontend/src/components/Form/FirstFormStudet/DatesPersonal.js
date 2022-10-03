import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import styles from "./StylesStepper.module.css";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import {
  MdLocationPin,
} from "react-icons/md";
import {
  getLocality,
} from "services/catalogs";
import {Select, WrapperSelect} from "./styled-componets/FormStepCandidate";

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
  const [localities, setLocalities] = useState(null);
  const [checked, setChecked] = useState(false);
  const [place, setPlace] = useState("");
  const [cp, setCP] = useState("");

  const checkChanged = (state) => {
    setChecked(!checked);
  };

  const handleLocality = (e) => {
    const { value } = e.target;
    setCP(value);
  
    if (value !== "") {
      getLocality(value)
        .then((response) => {
          setLocalities(response);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className={styles.containerPage}>
      <h5 className={styles.formTitlePersonal}>Por favor, proporcionanos los siguientes datos.</h5>
      <form className={styles.formDataPrivate}>
        <div className={styles.inputGroupName}>
          <TextField
            size="small"
            label="Nombre*"
            name="t100_name"
            id="t100_name"
            value={form.t100_name}
            onChange={handleChange}
            sx={{ width: 600, maxWidth: "100%", marginRight: 2 }}
          />
          <div >
            <TextField
              size="small"
              label="Primer Apellido*"
              name="t100_last_name"
              id="t100_last_name"
              value={form.t100_last_name}
              onChange={handleChange}
              sx={{paddingTop:0.3, width: 300, maxWidth: "100%" }}
            />
            <TextField
              size="small"
              label="Segundo Apellido*"
              name="t100_second_surname"
              id="t100_second_surname"
              value={form.t100_second_surname}
              onChange={handleChange}
              sx={{paddingLeft:0.5,paddingTop:0.3, width: 300, maxWidth: "100%" }}
            />
          </div>
        </div>

        <div className={styles.inputGroupPhone} >
          <TextField
            size="small"
            sx={{width: 300}}
            label="Telefono de contacto*"
            value={form.t100_phonenumber}
            onChange={handleChange}
            name="t100_phonenumber"
            id="t100_phonenumber"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
        </div>
        <div className={`my-4 ${styles.inputGroupLocation}`}>
          <div className={styles.flex}>
            <MdLocationPin
                    style={{
                      fontWeight: "bold",
                      fontSize: "2.5rem",
                    }}                    
            />
            <p style={{ fontWeight: "400", fontSize: "1.5rem", }}>Donde te ubicas?</p>
          </div>
          <div className={styles.Col1}>    
            <div className={styles.flex}>
              <TextField
                size="small"
                label="Calle y numero"
                name="t100_residence"
                id="t100_residence"
                value={form.t100_residence}
                onChange={handleChange}
                sx={{ width: 300, maxWidth: "100%", padding:1 }}
              />
              <TextField
                size="small"
                label="C.P.*"
                value={cp ? parseInt(cp) : ""}
                onChange={handleLocality}              
                sx={{ width: 300, maxWidth: "100%", padding:1 }}
              />
            </div>            
            <div className={styles.flex}>
              <TextField
                size="small"
                label="Estado"
                value={place.c222_state}
                onChange={handleChange}
                sx={{ width: 300, maxWidth: "100%" ,padding:1}}
              />
              <TextField
                size="small"
                label="Localidad"
                value={place.c222_municipality}  
                sx={{ width: 300, maxWidth: "100%", padding:1 }}
              />
            </div>            
            <WrapperSelect>
              <Select
                name="c222_id_locality"
                id="c222_id_locality"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                sx={{ width:300, padding:1}}
              >
                <option value="" disabled>
                  Seleccione una localidad
                </option>
                {localities &&
                  localities?.map((township) => (
                    <option
                      key={crypto.randomUUID()}
                      value={township.c222_id}
                    >
                      {township.c222_locality}
                    </option>
                  ))}
              </Select>
            </WrapperSelect>
            <div className={styles.inputCheckbox}>
              Dispuesto a reubicarte?
              <Checkbox
                value={(form.t100_travel)}
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

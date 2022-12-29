import React, { useState } from "react";
import { Checkbox } from "@mui/material";
import { Input } from "components/Input/Input";
import { MdLocationPin } from "react-icons/md";
import { getLocality } from "services/catalogs";
import { Select, WrapperSelect } from "./styled-componets/FormStepCandidate";
import styles from "./StylesStepper.module.css";

function DatesPersonal({
  form,
  handleChange,
  id_locality,
  state,
  setState,
  municipality,
  setMunicipality,
  cp,
  setCP,
  place,
  setPlace,
}) {
  const [localities, setLocalities] = useState(null);
  const [checked, setChecked] = useState(false);

  const checkChanged = () => setChecked(!checked);

  const handleLocality = (e) => {
    const { value } = e.target;

    setCP(value);

    if (value !== "") {
      getLocality(value)
        .then((response) => {
          setLocalities(response);
          setState(response[0]["c222_state"]);
          setMunicipality(response[0]["c222_municipality"]);
        })
        .catch((error) => console.error(error));
    }
  };

  const set_locality = (e) => {
    const locality = e.split(",");
    form.c222_id_locality = locality[0];
    setPlace(locality[1]);
  };

  return (
    <div className={styles.containerPage}>
      <h5 className={styles.formTitlePersonal}>Información Personal</h5>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <Input
            label="Nombre*"
            name="t100_name"
            id="t100_name"
            value={form.t100_name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <Input
            label="Primer Apellido*"
            name="t100_last_name"
            id="t100_last_name"
            value={form.t100_last_name}
            onChange={handleChange}
          />
          <Input
            label="Segundo Apellido*"
            name="t100_second_surname"
            id="t100_second_surname"
            value={form.t100_second_surname}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroupPhone}>
          <Input
            label="Telefono de contacto*"
            value={form.t100_phonenumber}
            onChange={handleChange}
            name="t100_phonenumber"
            id="t100_phonenumber"
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
          <MdLocationPin
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          />
          <span
            style={{
              fontWeight: "400",
              fontSize: "1em",
              color: "#2F4665",
              margin: "1rem 0",
            }}
          >
            Donde te ubicas?
          </span>
        </div>
        <div className={styles.flex}>
          <Input
            label="Calle y numero"
            name="t100_residence"
            id="t100_residence"
            value={form.t100_residence}
            onChange={handleChange}
          />
          <Input
            label="Codigo Postal*"
            value={cp ? parseInt(cp) : ""}
            onChange={handleLocality}
            onKeyDown={function (e) {
              let charCode = e.which ? e.which : e.keyCode;
              if (charCode > 31 && (charCode < 48 || charCode > 57))
                e.preventDefault();
            }}
          />
        </div>
        <div className={styles.flex}>
          <Input label="Estado" value={state} />
          <Input label="Localidad" value={municipality} />
        </div>
        <WrapperSelect>
          <Select
            name="c222_id_locality"
            id="c222_id_locality"
            value={place}
            onChange={(e) => set_locality(e.target.value)}
          >
            <option value="" disabled>
              Seleccione una localidad
            </option>
            {localities &&
              localities?.map((township) => (
                <option
                  key={crypto.randomUUID()}
                  value={[township.c222_id, township.c222_locality]}
                >
                  {township.c222_locality}
                </option>
              ))}
          </Select>
        </WrapperSelect>
        <div className={styles.inputCheckbox}>
          Dispuesto a reubicarte?
          <Checkbox
            value={form.t100_travel}
            checked={checked}
            onChange={checkChanged}
            size="small"
          />
        </div>

        <div className={`${styles.inputGroup}`}>
          <p className={styles.titleParagraph}>
            ¿Eres comunidad del IPN? Ingresa tu número de boleta.
          </p>
          <Input
            maxLength="10"
            width="260px"
            label="Boleta"
            value={form.t100_boleta}
            onChange={handleChange}
            name="t100_boleta"
            id="t100_boleta"
          />
        </div>
      </form>
    </div>
  );
}

export default DatesPersonal;

import React, { useState, useEffect } from "react";
import { useForm } from "hooks/useForm";
import { generateYears } from "utils/generateYears";
import { months } from "interface/months";
import {
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Autocomplete,
} from "@mui/material/";
import styles from "./StylesStepper.module.css";
import { uuid } from "utils/uuid";
import { BiUser } from "react-icons/bi";
import {
  getAllAcademicStates,
  getAllAcademicLevels,
} from "services/catalogs/index";

function DatesSchool({
  academicUnit,
  setAcademicUnits,
  startMonth,
  setStartMonth,
  startYear,
  setStartYear,
  endMonth,
  setEndMonth,
  endYear,
  setEndYear,
  academicHistorial,
  setAcademicHistorial,
}) {
  const { form, handleChange } = useForm(academicHistorial);
  const [academicStates, setAcademicStates] = useState([]);
  const [academicLevels, setAcademicLevels] = useState([]);

  useEffect(() => {
    getAllAcademicStates()
      .then((response) => {
        setAcademicStates(response);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getAllAcademicLevels()
      .then((response) => {
        setAcademicLevels(response);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChangek = (event) => setStartMonth(event.target.value);

  const handleChangey = (event) => setStartYear(event.target.value);

  const handleChangeq = (event) => setEndMonth(event.target.value);

  const handleChangex = (event) => setEndYear(event.target.value);

  const handleChangeState = (event) =>
    (academicHistorial.c109_id_academic_state = event.target.value);

  const handleChangeLevel = (event) =>
    (academicHistorial.c107_id_academic_level = event.target.value);

  const handleAutocomplete = (event, newValue) => {
    form.t104_academic_unit = newValue;
    setAcademicHistorial(form);
    academicHistorial.t104_academic_unit = newValue;
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 100,
      },
    },
  };

  const MenuPropsM = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
      },
    },
  };

  return (
    <div className={styles.containerPage}>
      <h5 className={styles.formTitleDataSchool}>
        Platicanos un poco sobre tus estudios.
      </h5>
      <form className={styles.formDataSchool}>
        <div className={styles.inputGroup}>
          <p className={styles.titleParagraph}>¿Que estudia/estudiaste?</p>
          <TextField
            label="Carrera"
            size="small"
            name="t104_carreer"
            id="t104_carreer"
            value={form.t104_carreer}
            onChange={handleChange}
            sx={{ width: "100%", maxWidth: "100%", marginRight: 15 }}
          />
        </div>

        <div className={styles.inputGroup}>
          <p className={styles.titleParagraph}>
            ¿En que institución estudias/estudiaste?
          </p>
          <Autocomplete
            sx={{ width: 400 }}
            size="small"
            id="t104_academic_unit"
            name="t104_academic_unit"
            freeSolo
            onChange={handleAutocomplete}
            value={academicHistorial.t104_academic_unit}
            options={academicUnit.map((option) => option?.c108_academic_unit)}
            renderInput={(params) => (
              <TextField {...params} label="Unidad Académica" />
            )}
          />
        </div>

        <div className={styles.form1}>
          <h3 className={styles.title}>
            <BiUser /> Información académica
          </h3>
          <div className={styles.inputGroup_1_2}>
            <FormControl sx={{ width: 250 }}>
              <InputLabel id="c109_id_academic_state">
                Estado academico
              </InputLabel>
              <Select
                size="small"
                id="c109_id_academic_state"
                name="c109_id_academic_state"
                onChange={handleChangeState}
                label="Estado academico"
              >
                {academicStates?.map((academicState) => (
                  <MenuItem
                    key={uuid()}
                    value={academicState?.c109_id_academic_state}
                  >
                    {academicState?.c109_description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: 250 }}>
              <InputLabel id="c107_id_academic_level">
                Nivel academico
              </InputLabel>
              <Select
                size="small"
                id="c107_id_academic_level"
                name="c107_id_academic_level"
                
                onChange={handleChangeLevel}
                label="Nivel academico"
              >
                {academicLevels?.map((academicLevel) => (
                  <MenuItem
                    key={uuid()}
                    value={academicLevel?.c107_id_academic_level}
                  >
                    {academicLevel?.c107_description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className={styles.inputGroupP1}>
          <div className={styles.Col4}>
            <p className={styles.titleParagraph}>Fecha en que iniciaste</p>
            <FormControl>
              <InputLabel id="mes-inicio-1">Mes</InputLabel>
              <Select
                size="small"
                labelId="mes-inicio-1"
                id="mes-inicio-1"
                value={startMonth}
                label="Año"
                onChange={handleChangek}
                sx={{ width: 150, marginRight: 1 }}
                MenuProps={MenuPropsM}
              >
                {months.map((mes) => (
                  <MenuItem key={mes["id"]} value={mes["id"]}>
                    {mes["name"]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="anio-inicio-1">Año</InputLabel>
              <Select
                size="small"
                labelId="anio-inicio-1"
                id="anio-inicio-1"
                value={startYear}
                label="Año"
                onChange={handleChangey}
                sx={{ width: 100 }}
                MenuProps={MenuProps}
              >
                {generateYears().map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className={styles.Col3}>
            <p className={styles.titleParagraph}>
              Fecha en que concluyes o vas a concluir
            </p>
            <FormControl>
              <InputLabel id="mes-final-2">Mes</InputLabel>
              <Select
                size="small"
                labelId="mes-final-2"
                id="mes-final-2"
                value={endMonth}
                label="Mes"
                onChange={handleChangeq}
                sx={{ width: 150, marginRight: 1 }}
                MenuProps={MenuPropsM}
              >
                {months.map((mes) => (
                  <MenuItem key={mes["id"]} value={mes["id"]}>
                    {mes["name"]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="anio-final-2">Año</InputLabel>
              <Select
                size="small"
                labelId="anio-final-2"
                id="anio-final-2"
                value={endYear}
                label="Año"
                onChange={handleChangex}
                sx={{ width: 100 }}
                MenuProps={MenuProps}
              >
                {generateYears().map((year) => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DatesSchool;

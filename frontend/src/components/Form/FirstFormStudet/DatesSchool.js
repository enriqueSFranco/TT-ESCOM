import React from "react";
import { useForm } from "hooks/useForm";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./StylesStepper.module.css";

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

  const handleChangek = (event) => setStartMonth(event.target.value);

  const handleChangey = (event) => setStartYear(event.target.value);

  const handleChangeq = (event) => setEndMonth(event.target.value);

  const handleChangex = (event) => setEndYear(event.target.value);

  const handleAutocomplete = (event) => {
    form.t104_academic_unit = event.target.value;
    setAcademicHistorial(form);
  };

  console.log(form)

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

  const meses = [
    { id: 1, name: "Enero" },
    { id: 2, name: "Febrero" },
    { id: 3, name: "Marzo" },
    { id: 4, name: "Abril" },
    { id: 5, name: "Mayo" },
    { id: 6, name: "Junio" },
    { id: 7, name: "Julio" },
    { id: 8, name: "Agosto" },
    { id: 9, name: "Septiembre" },
    { id: 10, name: "Octubre" },
    { id: 11, name: "Noviembre" },
    { id: 12, name: "Diciembre" },
  ];

  const years = [
    2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
    2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
    1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990,
  ];

  return (
    <div className={styles.containerPage}>
      <form>
        <h5>Platicanos un poco sobre tus estudios</h5>
        <div className={styles.inputGroup}>
          <p>??Que estudiaste o estas estudiando?</p>
          <TextField
            label="Carrera"
            name="t104_carreer"
            id="t104_carreer"
            value={form.t104_carreer}
            onChange={handleChange}
            sx={{ width: "100%", maxWidth: "100%", marginRight: 15 }}
          />
        </div>

        <div className={styles.inputGroup}>
          <p>??En que instituci??n?</p>
          <Autocomplete
            disablePortal
            id="t104_academic_unit"
            name="t104_academic_unit"
            freeSolo
            onChange={handleAutocomplete}
            value={form.t104_academic_unit}
            options={academicUnit.map((option) => option.c108_academic_unit)}
            renderInput={(params) => (
              <TextField {...params} label="Unidad ??cademica" />
            )}
          />
        </div>

        <div className={styles.inputGroupP1}>
          <div className={styles.Col4}>
            <div className={styles.texto}>Fecha en que iniciaste</div>
            <FormControl>
              <InputLabel id="mes-inicio-1">Mes</InputLabel>
              <Select
                labelId="mes-inicio-1"
                id="mes-inicio-1"
                value={startMonth}
                label="A??o"
                onChange={handleChangek}
                sx={{ width: 150, marginRight: 1 }}
                MenuProps={MenuPropsM}
              >
                {meses.map((mes) => (
                  <MenuItem key={mes["id"]} value={mes["id"]}>
                    {mes["name"]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="anio-inicio-1">A??o</InputLabel>
              <Select
                labelId="anio-inicio-1"
                id="anio-inicio-1"
                value={startYear}
                label="A??o"
                onChange={handleChangey}
                sx={{ width: 100 }}
                MenuProps={MenuProps}
              >
                {years.map((anio) => (
                  <MenuItem key={anio} value={anio}>
                    {anio}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className={styles.Col3}>
            <div className={styles.texto}>
              Fecha en que concluyes o vas a concluir
            </div>
            <FormControl>
              <InputLabel id="mes-final-2">Mes</InputLabel>
              <Select
                labelId="mes-final-2"
                id="mes-final-2"
                value={endMonth}
                label="Mes"
                onChange={handleChangeq}
                sx={{ width: 150, marginRight: 1 }}
                MenuProps={MenuPropsM}
              >
                {meses.map((mes) => (
                  <MenuItem key={mes["id"]} value={mes["id"]}>
                    {mes["name"]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="anio-final-2">A??o</InputLabel>
              <Select
                labelId="anio-final-2"
                id="anio-final-2"
                value={endYear}
                label="A??o"
                onChange={handleChangex}
                sx={{ width: 100 }}
                MenuProps={MenuProps}
              >
                {years.map((anio) => (
                  <MenuItem key={anio} value={anio}>
                    {anio}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className={styles.inputGroup}></div>
      </form>
    </div>
  );
}

export default DatesSchool;

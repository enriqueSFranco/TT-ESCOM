import React, { useState, useEffect } from "react";
import { useForm } from "hooks/useForm";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./StylesStepper.module.css";
import { uuid } from "utils/uuid";
import { BiCurrentLocation, BiUser } from "react-icons/bi";
import {
  getAllAcademicStates,
  getAllAcademicLevels
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
  
  const handleAutocomplete = (event,newValue) => {  
                form.c108_academic_unit =newValue;              
                setAcademicHistorial(form);
              }
  
  const handleText = (event) => {                
              setAcademicHistorial(form);
              }              
              

   console.log(form);

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
          <p>¿Que estudiaste o estas estudiando?</p>
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
          <p>¿En que institución?</p>
          <Autocomplete
            id="t104_academic_unit"
            name="t104_academic_unit"
            freeSolo
            onChange={handleAutocomplete}
            value={form.t104_academic_unit}
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
          <div className={styles.inputGroup}>
            <FormControl sx={{ width: 300 }}>
              <InputLabel id="c109_id_academic_state">Estado academico</InputLabel>
              <Select
                id="c109_id_academic_state"
                name="c109_id_academic_state"
                defaultValue=""
                onChange={handleChange}
                label="Perfil"
              >
                {academicStates?.map((academicState) => (
                  <MenuItem key={uuid()} value={academicState?.c109_id_academic_state}>
                    {academicState?.c109_description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: 300 }}>
              <InputLabel id="c109_id_academic_state">Nivel academico</InputLabel>
              <Select
                id="c109_id_academic_state"
                name="c109_id_academic_state"
                defaultValue=""
                onChange={handleChange}
                label="Experiencia"
              >
                {academicLevels?.map((academicLevel) => (
                  <MenuItem key={uuid()} value={academicLevel?.c107_id_academic_level}>
                    {academicLevel?.c107_description}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
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
                label="Año"
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
              <InputLabel id="anio-inicio-1">Año</InputLabel>
              <Select
                labelId="anio-inicio-1"
                id="anio-inicio-1"
                value={startYear}
                label="Año"
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
              <InputLabel id="anio-final-2">Año</InputLabel>
              <Select
                labelId="anio-final-2"
                id="anio-final-2"
                value={endYear}
                label="Año"
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

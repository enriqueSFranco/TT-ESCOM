import React, { useState, useEffect } from "react";
import { useForm } from "hooks/useForm";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { MdPublish, MdOutlineLightbulb, MdOutlineAdd } from "react-icons/md";
import { TextField, Autocomplete } from "@mui/material/";
import styles from "./FormPostJob.module.css";
import { getAllCatalogueExperience} from "services/catalogs/index";
import { uuid } from "utils/uuid";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";

let skillData = {
  id_vacant:0,
  skill:"",
  experience: "",
  necesary:false
}

const FormPostJobDetails = ({ baseform, onSubmit, handleChange, prevStep, skills, vacantSkills, setVacantSkills }) => {
  const [visible, setVisible] = useState(false);
  const [newSkill, setNewSkill] = useState([]);
  const [experience, setExperience] = useState([]);  
  const { form, setForm } = useForm(skillData);
  let now = new Date();    

  const handleChecked = (e) => {
    setVisible(e.target.checked);
  };
  const setIndispensable = (e) => {
    skillData.necesary = e.target.checked;
  };

  useEffect(() => {
    getAllCatalogueExperience()
      .then((response) => {
        setExperience(response);
      })
      .catch((error) => console.error(error));
  }, []);

  const setSkill = (e) => {
    console.log("Agregando skill...");
    console.log(skillData);
    if(skillData?.skill)
      vacantSkills.push(skillData);        
    setNewSkill(skillData);
    //setForm(skillData)
    baseform.requirements = vacantSkills;
    skillData = {
      id_vacant:0,
      skill:"",
      experience: "",
      necesary:false
    }
  };

  console.log(newSkill);
  console.log(vacantSkills);
  
  return (
    <div className={styles.wrapperFormJobDetails}>
      <form onSubmit={onSubmit}>
        <div className={styles.actions}>
          <TextareaAutosize
            className={styles.textArea}
            name="t200_description"
            id="t200_description"
            aria-label="maximum height"
            placeholder="Detalles de la vacante"
            minRows={5}
            style={{ width: "800px", height: 220 }}
            value={baseform.t200_description}
            onChange={handleChange}
          />
        </div>

        <div>{/*Habilidades e idiomas*/}
          <div>{/*Skills para la vacante*/}
            <h3 className={styles.title}>
               <MdOutlineLightbulb/> Habilidades y conocimientos
            </h3>
            <div className={styles.wrapperAddSkill}> 
              <Autocomplete
                sx={{ width: 275, marginLeft: 1, marginRight: 2 }}
                size="small"
                id="skill"
                name="skill"
                freeSolo
                onChange={(event,newValue)=>{
                  console.log(newValue);  
                  skillData.skill = newValue;
                }}        
                value = {skillData.skill ? skillData.skill : null}      
                getOptionLabel = {(option) => option.c116_description}
                options={skills}
                renderInput={(params) => (
                  <TextField {...params} label="Habilidad" />
                )}
              />
              <FormControl sx={{ width: 200, marginRight:2 }}>
                <InputLabel id="c207_id_experience">Experiencia</InputLabel>
                <Select
                  id="c207_id_experience"
                  name="c207_id_experience"
                  defaultValue=""
                  size="small"
                  onChange={(event,newValue)=>{
                    console.log(newValue.props.value);  
                    skillData.experience = newValue.props.value;
                  }}      
                  label="Experiencia"generica
                >
                  {experience?.map((exp) => (
                    <MenuItem key={uuid()} value={exp?.c207_id_experience}>
                      {exp?.c207_description}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox                  
                    onChange={setIndispensable}
                    size="small"
                  />
                }
                label="Indispensable"
              />
              <button type="submit" className={`${styles.btn} btn` } onClick={setSkill}>
                <MdOutlineAdd />
              </button>
            </div>
          </div>
          <div className={styles.SkillsWrapper}>{/*Para skills agregadas*/}
          <div className={styles.wrapperSkills}>
            <p className={styles.titleSkills}></p>
            <ul className={styles.listItemsSkill}>
              {vacantSkills &&
                vacantSkills.map((skill) => (
                  <li key={uuid()}>
                    <Chip
                      size="small"
                      label={skill?.skill?.c116_description}                      
                    />                    
                  </li>
                ))}
            </ul>
          </div>
          </div>
          <div>{/*Idiomas para la vacante*/}

          </div>
        </div>

        <div className={styles.closeJob}>         
          <div className={styles.wrapperSwitch}>
            <label className={styles.switch}>
              <input type="checkbox" onChange={handleChecked} id="dateCloseJob" name="dateCloseJob" />
              <span className={styles.slider}></span>
            </label>
            <label>Fecha de cierre</label>
          </div>
          {
            visible && (
              <input 
                type="date" 
                className={styles.closeJobDate} 
                name="t200_close_date"
                id="t200_close_date"
                onChange={handleChange}
                value={now.getFullYear() + "/" + (now.getMonth()+2) + "/" + now.getDate()}
              />
            )
          }
        </div>
        <div className={styles.wrapperButtons}>
          <button type="submit" className={`${styles.btn} btn btn-primary`}>
            <MdPublish />
            Publicar Vacante
          </button>
          <button onClick={prevStep} className={styles.btn}>
            Regresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPostJobDetails;

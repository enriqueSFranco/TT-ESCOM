import React,{ useState } from 'react';
import styles from "./Styles.module.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";



const DatesJob = ({hardSkills,setHardSkills,softSkills,setSoftSkills,AllResults,form,handleChange}) =>  {
  let soft = new Array();
  let hard = new Array();
  const [localhardSkills, setLocalHardSkill] = useState(hardSkills);
  const [localsoftSkills, setLocalSoftSkill] = useState(softSkills);
  /*console.log("Allskills", hardSkills,softSkills);
  console.log("hard skills: ", localhardSkills);
  console.log("hard skills: ", localsoftSkills);*/
  const [value, setValue] = React.useState("")


  AllResults.map((dato)=>{
    if(dato['c116_type']=='H'){
      hard.push(dato); 
    }
    if(dato['c116_type']=='s'){
      soft.push(dato);
    }
  }  
  );
  
  /*const handleChange = (event) => {
    setValue(event.target.value);
  };
  console.log(value);*/

    return (
      <div>
         
            {/* input para la eleccion de trabjo
            TODO: cambiar el HTMLFOR*/}
            <div className={styles.conCheckbox}>
              <div className={styles.text}><h6>Preferirias un trabajo ??</h6></div>
              <div className={styles.checkbox}>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                id="t100_modalities"
                name="t100_modalities"
                value={form.t100_modalities}
                onChange={handleChange}
              >
                <FormControlLabel value="Hibrodo" control={<Radio />} label="Hibrido" />
                <FormControlLabel value="Home office" control={<Radio />} label="Home office" />
                <FormControlLabel value="Presencial" control={<Radio />} label="Presencial" />
          </RadioGroup>
              </div>
            </div>
            <div>
            <Autocomplete
                name="hardskills"
                value={localhardSkills}
                onChange={(event, newValue) => {
                  setLocalHardSkill(newValue);                                
                  setHardSkills(newValue);
                }}
                multiple
                id="hardskills"
                options={hard}
                getOptionLabel={(option) => option.c116_description}
                defaultValue={[hard[13]]}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Hard skills"
                    placeholder="Selecciona "
                  />
                )}
            />              
            </div>

            <div>
            <Autocomplete
                name="softskills"
                value={localsoftSkills}
                onChange={(event, newValue) => {
                  setLocalSoftSkill(newValue);                                
                  setSoftSkills(newValue);
                }}
                multiple
                id="softskills"
                options={soft}
                getOptionLabel={(option) => option.c116_description}
                defaultValue={[soft[13]]}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Soft skills"
                    placeholder="Selecciona "
                  />
                )}
            />              
            </div>
              
      </div>
    );
}

export default DatesJob;
import React,{ useState } from 'react';
import styles from "./Styles.module.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckboxComponent from "../../Input/Checkbox"



const DatesJob = ({hardSkills,setHardSkills,softSkills,setSoftSkills,AllResults}) =>  {
  let soft = new Array();
  let hard = new Array();
  const [localhardSkills, setLocalHardSkill] = useState(hardSkills);
  const [localsoftSkills, setLocalSoftSkill] = useState(softSkills);
  /*console.log("Allskills", hardSkills,softSkills);
  console.log("hard skills: ", localhardSkills);
  console.log("hard skills: ", localsoftSkills);*/

  AllResults.map((dato)=>{
    if(dato['c116_type']=='H'){
      hard.push(dato); 
    }
    if(dato['c116_type']=='s'){
      soft.push(dato);
    }
  }  
  );

    return (
      <div>
         
            {/* input para la eleccion de trabjo
            TODO: cambiar el HTMLFOR*/}
            <div className={styles.conCheckbox}>
              <div className={styles.text}><h6>Preferirias un trabajo ??</h6></div>
              <div className={styles.checkbox}>
                <CheckboxComponent htmlFor="" label="Hibrido"/>
                <CheckboxComponent htmlFor="" label="Presencial"/>
                <CheckboxComponent htmlFor="" label="Home Office"/>
              </div>
            </div>
            <div>
            <Autocomplete
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
                    placeholder=""
                  />
                )}
            />              
            </div>

            <div>
            <Autocomplete
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
                    placeholder=""
                  />
                )}
            />              
            </div>
              
      </div>
    );
}

export default DatesJob;
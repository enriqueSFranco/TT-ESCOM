import React,{ useState } from 'react';
import styles from "./Styles.module.css";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckboxComponent from "../../Input/Checkbox"



const DatesJob = ({form, handleChange, AllResults}) =>  {
  let soft = new Array();
  let hard = new Array();

  const [value, setValue] = useState("");

  console.log("value: ", value);


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
          <form>
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
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                multiple
                id="tags-filled"
                options={hard}
                freeSolo
                getOptionLabel={(option) => option.c116_type}
                filterSelectedOptions
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="filterSelectedOptions"
                    placeholder="Favorites"
                  />
                )}
              />
            </div>
              
          </form>
      </div>
    );
}

export default DatesJob;
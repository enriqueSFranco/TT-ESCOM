import React from "react"
import Checkbox from '@mui/material/Checkbox';
import styles from "./Styles.module.css";

const CheckboxComponent = ({htmlFor ,label}) => {
  return (
    <div className={styles.checkbox}>
        <Checkbox/>
        <label htmlFor={htmlFor} >{label}</label>
    </div>

  )
}

export default CheckboxComponent;
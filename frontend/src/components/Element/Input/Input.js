import React from "react";

import styles from "../Styles.module.css";

const Input = React.forwardRef((props, ref) => (
  <input
    type={props.type}
    autoComplete="off"
    id={props.id}
    name={props.name}
    placeholder=" "
    className={styles.inputField}
    value={props.value}
    autoFocus={props.autoFocus}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onKeyUp={props.onKeyUp}
    ref={ref}
  />
));

export default Input;

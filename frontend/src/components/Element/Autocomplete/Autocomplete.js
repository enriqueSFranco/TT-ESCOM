import React, { useState } from "react";
import { uuid } from "../../../utils/uuid";
import Label from "../Label/Label";
import Input from "../../Input/Input";
import Span from "../Span/Span";
import styles from "./Autocomplete.module.css";

const Autocomplete = ({ options, title }) => {
  const [value, setValue] = useState("");
  const [displayOptions, setDisplayOptios] = useState(false);

  const filterData = options.filter((option) =>
    option?.t200_job.toLowerCase().includes(value.toLowerCase())
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleClick = (e) => {};

  console.log(displayOptions);

  return (
    <div className={styles.wrapper}>
      <Label htmlFor={value}>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setDisplayOptios(true)}
        />
        <Span content={title} />
      </Label>
      {displayOptions && (
        <div className={styles.options}>
          <ul className={styles.optionsList}>
            {filterData.map((option) => (
              <li onClick={handleClick} key={uuid()}>
                {option?.t200_job}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Autocomplete;

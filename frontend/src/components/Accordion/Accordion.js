import React, { useState } from "react";
import { stringToColor } from "utils/stringToColor";
import Avatar from "@mui/material/Avatar";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { MdOutlineExpandMore } from "react-icons/md";
import styles from "./Accordion.module.css";

const CustomAccordion = ({ id, name, lastName }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = (panel) => (e, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (name === undefined) return null;

  console.log(name)

  return (
    <div>
      <Accordion
        expanded={expanded === id}
        onChange={handleExpanded(id)}
      >
        <AccordionSummary
          expandIcon={<MdOutlineExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {/* contenido previo */}
          <div className={styles.summary}>
            <Avatar sx={{bgcolor: stringToColor(name)}}>
              {(name).slice(0, 1)}
            </Avatar>
            {`${name} ${lastName}`}
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {/* contenido principal */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomAccordion;

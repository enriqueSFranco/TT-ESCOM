import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import styles from "./StylesStepper.module.css";

const RenderIndicatorStep = ({ activeStep, steps }) => {
  return (
    <div className={styles.stepper}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps?.map((step) => (
          <Step key={`step-id-${step.id}`}>
            <StepLabel>
              {step.text}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

// Control de imagenes del step
const RenderImage = ({ activeStep, steps }) => {
  if (activeStep === 0)
    return (
      <aside className={`${styles.bg}`}>
        <h2 className={styles.titleCurrent}>Paso 1</h2>
        <p className={styles.subTitleCurrent}>
          Ingresa tus datos personales para acercarte a las empresas
        </p>
        <RenderIndicatorStep activeStep={activeStep} steps={steps} />
      </aside>
    );
  if (activeStep === 1)
    return (
      <aside className={`${styles.bg}`}>
        <h2 className={styles.titleCurrent}>Paso 2</h2>
        <RenderIndicatorStep activeStep={activeStep} steps={steps} />
      </aside>
    );
  if (activeStep === 2)
    return (
      <aside className={`${styles.bg}`}>
        <h2 className={styles.titleCurrent}>Paso 3</h2>
        <RenderIndicatorStep activeStep={activeStep} steps={steps} />
      </aside>
    );
  if (activeStep === 3)
    return (
      <aside className={`${styles.bg}`}>
        <h2 className={styles.titleCurrent}>paso 4</h2>
        <RenderIndicatorStep activeStep={activeStep} steps={steps} />
      </aside>
    );
};

export default RenderImage;

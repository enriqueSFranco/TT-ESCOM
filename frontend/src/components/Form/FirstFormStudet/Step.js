import React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import DatesPersonal from './DatesPersonal';
import DatesJob from './DatesJob';
import DatesSkill from './DatesSkill';
import Button from '@mui/material/Button';
import styles from "./Styles.module.css";

const StepComponent = () => {
	const [activeStep,setActiveStep]=React.useState(0);

	const PageDisplay =() => {
		if(activeStep === 0){
			return <DatesPersonal/>;
		}
		if(activeStep === 1){
			return <DatesJob/>;
		}
		if(activeStep === 2){
			return <DatesSkill/>;

		}

	}

	const nextStep = () => {
		if(activeStep<2)
			setActiveStep((currentStep) => currentStep + 1);
	}

	const previousStep = () => {
		if(activeStep>0)
			setActiveStep((currentStep) => currentStep - 1);
	}

	const steps = [
		' ',
		' ',
		' ',
	];
	  
	return (
		<div className={styles.container}>
			<div className={styles.stepper}>
				<Stepper activeStep={activeStep} alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
			</div>
			
			<div className={styles.pages}>{PageDisplay()}</div>
			<div className={styles.buttons}>
				<div className={styles.button1}>
					<Button
						disabled={activeStep === 0}
						variant="outlined"
						color="primary"
						onClick={()=>previousStep()}
					>Anterior</Button>
				</div>
				<div className={styles.space}></div>
				<div className={styles.button2}>
					<Button
						variant="outlined"
						color="primary"
						onClick={()=>nextStep()}
					>{activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}</Button>
				</div>
			</div>
		</div>
	);
};
export default StepComponent;

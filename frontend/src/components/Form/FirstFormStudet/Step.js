import React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import DatesPersonal from './DatesPersonal';
import DatesJob from './DatesJob';
import DatesSkill from './DatesSkill';
import Button from '@mui/material/Button';
import styles from "./Styles.module.css";
import { useForm } from "../../../hooks/useForm";
import { $ajax } from "../../../utils/$ajax";

let initialForm={
	t100_boleta: "2015090419",
	t100_name: "",
	t100_last_name: "",
	t100_username: "",
	t100_cv: "",
	t100_email: "",
	t100_gender: null,
	t100_date_of_birth: null,
	t100_personal_objectives: "",
	t100_speciality: "",
	t100_target_salary: "",
	t100_travel: false,
	t100_profile_picture: "",
	is_active: false,
}

const StepComponent = () => {
	const [activeStep,setActiveStep]=React.useState(0);
	const { form , handleChange} = useForm(initialForm);
	

	const PageDisplay =() => {
		if(activeStep === 0){
			console.log(form);
			return <DatesPersonal form={form} handleChange={handleChange}/>;

		}
		if(activeStep === 1){
			return <DatesJob form={form} handleChange={handleChange}/>;
		}
		if(activeStep === 2){
			console.log(form);
			return <DatesSkill form={form} handleChange={handleChange}/>;

		}

	}

	const nextStep = () => {
		if(activeStep<2){
			console.log((activeStep));
			setActiveStep((currentStep) => currentStep + 1);
		}
		if(activeStep>=2){
			console.log(("FInlaiza"));
			updateData();
			
		}
	}

	const updateData = () => {
		//console.log(form);
		const endpoint = "/api/Students/2015090419/";
	
		let options = {
		  headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		  },
		  body: form,
		};
		$ajax().PUT(endpoint, options)
		  .then((response) => {
			if (!response.err) {
			  console.log(response);
			  
			}
		  })
		  .catch((err) => console.error(err));
	  };

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
			<form onSubmit={updateData}>
				<div className={styles.pages}>{PageDisplay()}</div>
			</form>
			
			
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
						type="submit"
						onClick={()=>nextStep()}
					>{activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}</Button>
				</div>
			</div>
		</div>
	);
};
export default StepComponent;

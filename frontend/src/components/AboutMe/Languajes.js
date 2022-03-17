import React from "react";

import styles from "./Languajes.module.css";
import CardLanguaje from "./CardLanguaje"

const Languajes = () => {
	return (
		<div className={styles.CompOne}>
			<h5>Idiomas</h5>
			<CardLanguaje></CardLanguaje>
		</div>
	);
};
export default Languajes;

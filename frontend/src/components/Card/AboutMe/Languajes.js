import React from "react";

import styles from "./Languajes.module.css";
import CardLanguaje from "./CardLanguaje"

const Languajes = () => {
	return (
		<div className={styles.CompOne}>
			<h5>Idiomas</h5>
			<div className={styles.contaCards}>
				<div className={styles.Cards}>
					<CardLanguaje></CardLanguaje>
				</div>
				<div className={styles.Cards}>
					<CardLanguaje></CardLanguaje>
				</div>
			</div>
			
		</div>
	);
};
export default Languajes;

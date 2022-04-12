import React from "react";

import styles from "./Languajes.module.css";
import CardLanguaje from "./CardLanguaje"

const Languajes = () => {
	return (
		<div className={styles.wrapperLenguage}>
			<h5>Idiomas</h5>
				<CardLanguaje />
		</div>
	);
};
export default Languajes;

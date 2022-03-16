import React from "react";
import styles from "./Interests.module.css";
import * as BsIcon from "react-icons/bs";

const Skills = () => {
	return (
		<div className={styles.CompOne}>
			<div className={styles.content}>
				<div className={styles.areas}>
					<BsIcon.BsCircleFill className={styles.icon} />
					<span className={styles.tex}>Hard Skills</span>
				</div>

				<div className={styles.jobs}>
					<BsIcon.BsCircleFill className={styles.icon} />
					<span className={styles.tex}>Soft Skills</span>
				</div>
			</div>
		</div>
	);
};
export default Skills;

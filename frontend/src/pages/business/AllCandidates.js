import React from "react";
// import Accordion from "components/Accordion/Accordion";
import LayoutHome from "Layout/LayoutHome";
import ListCandidates from "components/Card/CardStudent/ListCandidates";
import styles from "./PageApplications.module.css";

function AllCandidates() {

  return (
    <LayoutHome>
      <section className={styles.wrapper}>
        <h1>candidatos</h1>
        {/* form */}
        <div className={styles.gridFluid}>
          <ListCandidates />
        </div>
      </section>
    </LayoutHome>
  );
}

export default AllCandidates;

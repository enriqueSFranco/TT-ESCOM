import React from "react";
import { useParams } from "react-router-dom";
import { useGetApplicationJob } from "hooks";
import Chip from "components/Chip/Chip";
import Table from "components/Table/Table";
import TableRow from "components/Table/TableRow";
import RowExpand from "components/Table/RowExpand";
import { TiLocationOutline } from "react-icons/ti";
import { FaBrain } from "react-icons/fa";
import { List, ListItem } from "styled-components/CommonStyles";
import styles from "./Accordion.module.css";

const Accordion = () => {
  const { t200_id_vacant } = useParams();
  const [data] = useGetApplicationJob({ idVacant: t200_id_vacant });

  if (!data) return null;

  // console.log(data);

  return (
    <section className={styles.wrapperPostulations}>
      <article className={styles.detailsVacant}>
        <div style={{outline: '1px solid #ccc', borderRadius: '5px', height: '100%'}}>
          <header className={styles.headerVacant}>
            <h1 className={styles.titleVacant}>
              {data[0]?.t200_id_vacant?.t200_job}
            </h1>
          </header>

          {/* habilidades requeridas y opcionales */}
          <div></div>
          <div>
            <List>
              <ListItem>
                <Chip
                  label={
                    data[0]?.t200_id_vacant?.c206_id_profile?.c206_description
                  }
                  bg="#EBF2FD"
                  color="#2864ED"
                />
              </ListItem>
              <ListItem>
                <Chip
                  label={
                    data[0]?.t200_id_vacant?.c207_id_experience?.c207_description
                  }
                  bg="#EBF2FD"
                  color="#2864ED"
                  icon={<FaBrain />}
                />
              </ListItem>
              <ListItem>
                <Chip
                  label={
                    data[0]?.t200_id_vacant?.c208_id_contract?.c208_description
                  }
                  bg="#EBF2FD"
                  color="#2864ED"
                />
              </ListItem>
              <ListItem>
                <Chip
                  label={
                    data[0]?.t200_id_vacant?.c214_id_modality?.c214_description
                  }
                  bg="#EBF2FD"
                  color="#2864ED"
                  icon={<TiLocationOutline />}
                />
              </ListItem>
            </List>
          </div>
          <div className={styles.summaryVacant}>
            {data[0]?.t200_id_vacant?.t200_description}
          </div>
        </div>
      </article>
      <div className={styles.listApplicant}>
        <h2 className={styles.totalApplicants}>
          Postulados: <Chip label={`${data.length} postulados`} bg="#EBF2FD" color="#2864ED" />
        </h2>
        <div className={styles.wrapperListApplicants}>
          <Table>
            {data?.map((it, index) => (
              // console.log(it)
              <TableRow
                key={`table-row-id-${crypto.randomUUID()}`}
                index={index}
                it={it}
              >
                <RowExpand it={it} />
              </TableRow>
            ))}
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

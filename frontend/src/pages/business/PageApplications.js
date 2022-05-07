import React, { useState } from "react";
import { uuid } from "utils/uuid";
import axios from 'axios';
import Table from "components/Table/Table";
import TableRow from "components/Table/TableRow";
import RowExpand from "components/Table/RowExpand";
import styles from "./PageApplications.module.css";

function PageApplications() {

  const [listUsers, setListUsers] = useState([]);

  // useEffect(() => {
  //   const getApplicationsUsers = async () => {
  //     const response = await axios.get("/api/Applications/");
  //     if (response.status === 200) setListUsers(response.data);
  //   };
  //   getApplicationsUsers();
  // }, []);


  return (
    <section className={styles.wrapper}>
      <Table>
        <TableRow>
          <RowExpand />
        </TableRow>
      </Table>
    </section>
  );
}

export default PageApplications;

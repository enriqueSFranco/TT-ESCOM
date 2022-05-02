import React, { useEffect, useState } from "react";
import axios from "axios";
import { uuid } from "utils/uuid";

function PageApplications() {

  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    const getApplicationsUsers = async () => {
      const response = await axios.get("/api/Applications/");
      if (response.status === 200) setListUsers(response.data);
    };
    getApplicationsUsers();
  }, []);

  console.log(listUsers)

  return (
    <section>
      <h1>Solicitudes de aspirantes</h1>
      {/* <ul>
        {
          listUsers?.map(user => {
            <li key={uuid()}></li>
          })
        }
      </ul> */}
    </section>
  )
}

export default PageApplications;
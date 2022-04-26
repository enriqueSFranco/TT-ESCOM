import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { uuid } from 'utils/uuid';

const wrapper = {
  position: "relative",
  top: "4rem",
};

const contentListRecruiter = {};

const PageValidateRecruiter = () => {
  const [listRecruiter, setListRecruiter] = useState([]);

  // obtenemos la lista de reclutadores
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/ValidateRecruiter/", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
    setListRecruiter(data);
    };

    fetchData();
  }, []);

  const idRecruiter = listRecruiter[0]?.t301_id_recruiter;

  // enviamos la validacion para dar de alta a un reclutador
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const payload = {
  //       is_active: true,
  //     }
  //     const { data } = await axios.post(`/api/ValidateRecruiter/${idRecruiter}/`, payload, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //       }
  //     })
  //   };

  //   fetchData();
  // }, [idRecruiter]);

  if (listRecruiter.length === 0) return null;

  // console.log(listRecruiter);

  return (
    <section style={wrapper}>
      <h2>VALIDAR RECLUTADORES</h2>
      <div style={contentListRecruiter}>
        <ul>
          {listRecruiter?.map(recruiter => (
            <li key={uuid()}>{recruiter?.t301_name} {recruiter?.t301_last_name} {recruiter?.t301_id_recruiter} <button>Aceptar Reclutador</button></li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PageValidateRecruiter;
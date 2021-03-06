import React from 'react';
import { uuid } from 'utils/uuid';
import TableRow from './TableRow';
import styles from './Table.module.css';

const menu = [
  {label: ""},
  {label: "Nombre",},
  {label: "Carrera"},
  {label: "Conocimientos Tecnicos"},
  {label: "Experiencia"},
  {label: "Certificaciones"},
  {label: "Acciones"},
]

const Table = ({children}) => {
  return (
    <table summary="Lista de candidatos" className={styles.table}>
    <thead className={`${styles.thead} ${styles.noSelected}`}>
      <tr>
        {menu.map(item => (
          <th key={uuid()} scope="col" className={styles.th}>
            {item?.label}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
  )
}

export default Table;
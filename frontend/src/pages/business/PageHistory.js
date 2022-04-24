import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { MdSpaceDashboard, MdBusinessCenter } from 'react-icons/md';
import { FaUserTie } from 'react-icons/fa';
import styles from './PageHistory.module.css';

const PageHistory = () => {
  return (
    <section className={styles.wrapper}>
      <form className={styles.formSearch}>
        <input type="search" name="" id="" placeholder='ej. kikesf' className={styles.inputSearch} />
      </form>
      <Outlet />
      <aside className={styles.sidebar}>
        <nav className={styles.menu}>
          <ul>
            <li><Avatar>E</Avatar></li>
            <li><Link to="dashboard"><MdSpaceDashboard />Dashboard</Link></li>
            <li><Link to="mis-vacantes"><MdBusinessCenter />Mis vacantes</Link></li>
            <li><Link to="solicitudes"><FaUserTie />Solicitudes</Link></li>
          </ul>
        </nav>
      </aside>
    </section>
  )
}

export default PageHistory
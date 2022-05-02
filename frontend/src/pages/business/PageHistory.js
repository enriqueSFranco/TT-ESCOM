import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { stringToColor } from "utils/stringToColor";
import AuthContext from "context/AuthContext";
import { Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { MdSpaceDashboard, MdBusinessCenter } from "react-icons/md";
import { IoMdLogOut, IoMdSettings } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";
import styles from "./PageHistory.module.css";

const PageHistory = () => {
  const { token } = useContext(AuthContext);

  return (
    <section className={styles.wrapper}>
      <form className={styles.formSearch}>
        <div className={styles.boxSearch}>
          <BiSearch />
          <input
            type="search"
            name=""
            id=""
            placeholder="ej. kikesf"
            className={styles.inputSearch}
          />
        </div>
      </form>
      <aside className={styles.sidebar}>
        <nav className={styles.menu}>
          <ul>
            <li className={styles.itemAvatar}>
              <Avatar sx={{ bgcolor: stringToColor(token?.user?.first_name) }}>
                {(token?.user?.first_name).slice(0, 1)}
              </Avatar>
              {token?.user?.first_name}
            </li>
            <li>
              <Link to="dashboard">
                <MdSpaceDashboard />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="mis-vacantes">
                <MdBusinessCenter />
                Mis vacantes
              </Link>
            </li>
            <li>
              <Link to="solicitudes">
                <FaUserTie />
                Solicitudes
              </Link>
            </li>
            <li>
              <Link to="publicar-vacante"><CgNotes />Publicar vacante</Link>
            </li>
            <li>
              <Link to="publicar-comunicado"><GrAnnounce />Publicar comunicado</Link>
            </li>
            <li>
              <Link to="configuracion"><IoMdSettings />Configuracion</Link>
            </li>
            <li>
              <Link to="/">
                <IoMdLogOut />
                Cerrar sesion
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <article className={styles.main}>
        <Outlet />
      </article>
    </section>
  );
};

export default PageHistory;
